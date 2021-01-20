import React, { useState } from 'react';
import LibrarySong from '../library-song';
import SortMenu from '../sort-menu';
import { v4 as uuidv4 } from 'uuid';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

const Library = ({ songs, setCurrentSong, setSongs, library }) => {

	const [genre, setGenre] = useState('all');
	const [haveLiked, setHaveLiked] = useState(false);

	const setSelectedSong = (selectedSong) => {
		setCurrentSong(selectedSong);

		const newSongs = songs.map(song => {
			if (selectedSong.id === song.id) {
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

		const checkActive = (song) => {
			return selectedSong.name === song.name ? { ...song, active: true } : { ...song, active: false }
		}

		//localStorage
		let allSongs = JSON.parse(localStorage.getItem('songs'))
			.map((item) => {
				const genSong = newSongs.find(genreSong => genreSong.id === item.id);
				if (genSong) {
					return checkActive(genSong);
				} else {
					return checkActive(item);
				}
			})



		localStorage.setItem('songs', JSON.stringify(allSongs));
		setSongs(newSongs);
	}

	const showSongsOfCurrentGenre = async (genre) => {

		setGenre(genre)

		const allSongs = await JSON.parse(localStorage.getItem('songs'));
		if (genre === 'all') {
			setSongs(allSongs)
		} else if (genre === 'liked') {
			const likedSongs = allSongs.filter(song => song.liked);
			setSongs(likedSongs);
			setHaveLiked(likedSongs.length > 0 ? true : false)
		} else {
			const songsOfCurrentGenre = allSongs.filter(song => song.genre === genre);
			setSongs(songsOfCurrentGenre);
		}

	}
	console.log(haveLiked);
	return (
		<div className={`library ${library ? 'library-active' : ''}`}>
			<h2>Library</h2>
			<div className="library__songs">
				<SortMenu
					genre={genre}
					showSongsOfCurrentGenre={(genre) => showSongsOfCurrentGenre(genre)} />
				{
					!haveLiked && genre === 'liked'
						? <div className='empty'>
							<h3>Nothing have been added</h3>
							<small>Click <FontAwesomeIcon icon={faHeart} size={'sm'} color={'#1db954'} /> to add track</small>
						</div>
						: songs.map(song => <LibrarySong
							key={uuidv4()}
							setSelectedSong={(selectedSong) => setSelectedSong(selectedSong)}
							song={song}
							setSongs={setSongs}
							songs={songs}
							setCurrentSong={setCurrentSong} />)
				}
			</div>
		</div>
	)
}
export default Library;