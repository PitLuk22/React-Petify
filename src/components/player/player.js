import React, { useRef, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStepBackward, faStepForward, faVolumeUp } from '@fortawesome/free-solid-svg-icons';
import { faPlayCircle, faPauseCircle } from '@fortawesome/free-regular-svg-icons';

import { playAudio } from '../../util';

const Player = ({ songs, currentSong, setCurrentSong, isPlaying, setIsPlaying, setSongs, volume, setVolume }) => {

	const [volumeInput, showVolumeInput] = useState(false);
	const [songInfo, setSongInfo] = useState({
		currentTime: 0,
		duration: 0,
		'volume': volume
	})


	const audioRef = useRef(null);

	const playSongHandler = async () => {
		if (isPlaying) {
			await setIsPlaying(!isPlaying);
			audioRef.current.pause();
		} else {
			// Promise audio.play()
			playAudio(audioRef);
			setIsPlaying(!isPlaying);
		}
	}

	// Update when something happens with <audio/>
	const timeUpdateHandler = async () => {
		// Progress input[type='range'] for Safari and Chrome
		const current = Math.round(songInfo.currentTime);
		const duration = Math.round(songInfo.duration);
		const percent = Math.round(current / duration * 100) + '%';
		document.documentElement.style.setProperty('--webkitProgressPercent', percent);

		await setSongInfo({
			...songInfo,
			currentTime: audioRef.current.currentTime,
			duration: audioRef.current.duration
		})
		if (isPlaying) {
			// Promise audio.play()
			playAudio(audioRef);
		}
	}

	const dragHandler = (e) => {
		const inputValue = e.target.value
		audioRef.current.currentTime = inputValue;
		setSongInfo({ ...songInfo, currentTime: inputValue })
	}

	const getTime = (time) => {
		let min = Math.floor((time / 60) % 60);
		let sec = Math.floor(time % 60);

		const addZero = (num) => num >= 0 && num <= 9 ? `0${num}` : num;

		return `${min}:${addZero(sec)}`;
	}

	const nextSong = (n) => {
		const index = songs.findIndex(song => song.active);

		// define next track
		let nextSong;
		if (n > 0) {
			nextSong = songs[(index + n) % songs.length];
		} else {
			nextSong = index + n < 0 ? songs[songs.length - 1] : songs[index + n];
		}

		// set prop active to false, but next track to true
		const newSongs = songs.map(song => {
			if (nextSong.id === song.id) {
				return {
					...song,
					active: true
				}
			} else {
				return {
					...song,
					active: false
				}
			}
		});
		console.log('player');
		setSongs(newSongs);
		setCurrentSong(nextSong);
	}

	const dragVolumeHandler = (e) => {
		const inputValue = e.target.value;

		const percent = inputValue + '%';
		console.log(percent);
		document.documentElement.style.setProperty('--webkitProgressPercentVolume', percent);

		setVolume(inputValue / 100);
		setSongInfo({ ...songInfo, volume: inputValue / 100 })
		audioRef.current.volume = inputValue / 100;
	}

	const showVolumeInputHandler = () => {
		showVolumeInput(!volumeInput);
	}

	return (
		<div className='player'>
			<div className='control'>
				<FontAwesomeIcon
					onClick={() => nextSong(-1)}
					className='control__prev'
					size='lg'
					icon={faStepBackward} />
				<FontAwesomeIcon
					onClick={playSongHandler}
					className='control__play'
					size='3x'
					icon={isPlaying ? faPauseCircle : faPlayCircle} />
				<FontAwesomeIcon
					onClick={() => nextSong(1)}
					className='control__next'
					size='lg'
					icon={faStepForward} />
			</div>
			<div className='timeline'>
				<p className='timeline__start'>{getTime(songInfo.currentTime)}</p>
				<input
					type="range"
					className='timeline__range range'
					onInput={dragHandler}
					min='0'
					max={songInfo.duration || 0}
					value={songInfo.currentTime} />
				<p className='timeline__end'>{songInfo.duration ? getTime(songInfo.duration) : '0:00'}</p>
				<div className="volume">
					<FontAwesomeIcon
						icon={faVolumeUp}
						size={'1x'}
						onClick={showVolumeInputHandler} />
					<input
						type="range"
						className={`volume__range range ${volumeInput ? 'volume__range-active' : ''}`}
						onInput={dragVolumeHandler}
						onTouchStart={dragVolumeHandler}
						min={0}
						max={100}
						value={songInfo.volume * 100} />
				</div>
			</div>

			<audio
				onTimeUpdate={timeUpdateHandler}
				onLoadedMetadata={timeUpdateHandler}
				ref={audioRef}
				src={currentSong.audio}
				onEnded={() => nextSong(1)} />
		</div>
	)
}

export default Player;