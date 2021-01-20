import React, { useRef, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStepBackward, faStepForward, faVolumeUp, faVolumeMute, faVolumeDown, faRandom } from '@fortawesome/free-solid-svg-icons';
import { faPlayCircle, faPauseCircle } from '@fortawesome/free-regular-svg-icons';
import Like from '../like';

import { playAudio } from '../../util';


const Player = ({ songs, currentSong, setCurrentSong, isPlaying, setIsPlaying, setSongs }) => {

	const [volumeInput, showVolumeInput] = useState(false);
	const [volume, setVolume] = useState(1);
	const [songInfo, setSongInfo] = useState({
		currentTime: 0,
		duration: 0,
		'volume': volume
	})
	const [repeat, setRepeat] = useState(false);
	const [random, setRandom] = useState(false);

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
		console.log(n);
		const index = songs.findIndex(song => song.active);

		// define next track 
		let nextSong;
		if (n >= 0) {
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

		//localStorage
		localStorageHandler(newSongs);

		setSongs(newSongs);

		setCurrentSong(nextSong);
	}

	const dragVolumeHandler = (e) => {
		const inputValue = e.target.value;

		const percent = inputValue + '%';
		document.documentElement.style.setProperty('--webkitProgressPercentVolume', percent);

		setVolume(inputValue / 100);
		setSongInfo({ ...songInfo, volume: inputValue / 100 })
		audioRef.current.volume = inputValue / 100;
	}

	const showVolumeInputHandler = () => {
		showVolumeInput(!volumeInput);
	}

	const setLikeHandler = (e, toggle) => {

		const newSongs = songs.map(song => {
			if (currentSong.id === song.id) {
				return { ...song, liked: !toggle }
			} else {
				return { ...song }
			}
		});

		//localStorage
		localStorageHandler(newSongs);

		setCurrentSong({
			...currentSong,
			liked: !toggle
		})
		setSongs(newSongs);
	}

	const localStorageHandler = (newSongs) => {

		let allSongs = JSON.parse(localStorage.getItem('songs'))
			.map((item) => {
				const genSong = newSongs.find(genreSong => genreSong.id === item.id);
				if (genSong) {
					return genSong;
				} else {
					return item;
				}
			})
		localStorage.setItem('songs', JSON.stringify(allSongs));
	}

	const setIconVolume = (volume) => {
		if (volume > 0.5) return faVolumeUp;
		else if (volume <= 0.5 && volume > 0) return faVolumeDown;
		else return faVolumeMute
	}

	const setExtraSettingsHandler = (selectedSetting) => {
		switch (selectedSetting) {
			case 'rnd':
				setRandom(!random)
				if (repeat) setRepeat(false);
				break;
			case 'rep':
				setRepeat(!repeat)
				if (random) setRandom(false);
				break;
			default: return;
		}
	}

	return (
		<div className='player'>
			<div className='control'>
				<div
					className={`control__random ${random ? 'dot' : ''}`}
					onClick={() => setExtraSettingsHandler('rnd')}>
					<FontAwesomeIcon
						size='sm'
						icon={faRandom}
						style={{ color: random ? '#1db954' : '#b3b3b3' }}
					/>
				</div>
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
					icon={faStepForward}
				/>
				<div
					className={`control__repeat ${repeat ? 'dot' : ''}`}
					onClick={() => setExtraSettingsHandler('rep')}>
					<svg
						style={{ fill: repeat ? '#1db954' : '#b3b3b3' }}
						viewBox="0 0 512.016 512.016">
						<g>
							<path d="M507.336,100.696l-96-96c-4.576-4.576-11.456-5.952-17.44-3.456c-5.984,2.496-9.888,8.288-9.888,14.752v48h-208
								c-97.216,0-176,78.784-176,176c0,8.832,7.168,16,16,16h64c8.832,0,16-7.168,16-16c0-44.192,35.808-80,80-80h208v48
								c0,6.464,3.904,12.32,9.888,14.784c5.984,2.496,12.864,1.12,17.44-3.456l96-96C513.576,117.08,513.576,106.936,507.336,100.696z"
							/>
						</g>
						<g>
							<path d="M496.008,255.992h-64c-8.832,0-16,7.168-16,16c0,44.192-35.808,80-80,80h-208v-48c0-6.464-3.904-12.32-9.888-14.784
								s-12.832-1.088-17.44,3.488l-96,96c-6.24,6.24-6.24,16.384,0,22.624l96,96c4.576,4.576,11.456,5.952,17.44,3.456
								s9.888-8.32,9.888-14.784v-48h208c97.216,0,176-78.784,176-176C512.008,263.16,504.84,255.992,496.008,255.992z"/>

						</g>
					</svg>
				</div>
			</div>
			<div className='timeline'>
				<div className="volume">
					<FontAwesomeIcon
						icon={setIconVolume(songInfo.volume)}
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
				<p className='timeline__start'>{getTime(songInfo.currentTime)}</p>
				<input
					type="range"
					className='timeline__range range'
					onInput={dragHandler}
					min='0'
					max={songInfo.duration || 0}
					value={songInfo.currentTime} />
				<p className='timeline__end'>{songInfo.duration ? getTime(songInfo.duration) : `0:00`}</p>
				<Like
					setLikeHandler={(e, toggle) => setLikeHandler(e, toggle)}
					currentSong={currentSong} />
			</div>

			<audio
				onTimeUpdate={timeUpdateHandler}
				onLoadedMetadata={timeUpdateHandler}
				ref={audioRef}
				src={currentSong.audio}
				onEnded={() => {
					if (random) nextSong(Math.floor(Math.random() * (songs.length - 1) + 1))
					else if (repeat) nextSong(0)
					else nextSong(1)
				}} />
		</div >
	)
}

export default Player;