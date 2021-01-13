import React, { useState } from 'react';
import LibrarySong from '../library-song';
import SortMenu from '../sort-menu';
import musicDB from '../../data';
import { v4 as uuidv4 } from 'uuid';

const Library = ({ songs, setCurrentSong, setSongs, library }) => {

	const [genre, setGenre] = useState('all');

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
		setSongs(newSongs);
	}

	const showSongsOfCurrentGenre = (genre) => {

		setGenre(genre)

		const allSongs = musicDB();
		if (genre === 'all') {
			setSongs(allSongs)
		} else {
			const songsOfCurrentGenre = allSongs.filter(song => song.genre === genre);
			setSongs(songsOfCurrentGenre);
		}

	}

	return (
		<div className={`library ${library ? 'library-active' : ''}`}>
			<h2>Library</h2>
			<div className="library__songs">
				<SortMenu
					genre={genre}
					showSongsOfCurrentGenre={(genre) => showSongsOfCurrentGenre(genre)} />
				{
					songs.map(song => <LibrarySong
						key={uuidv4()}
						setSelectedSong={(selectedSong) => setSelectedSong(selectedSong)}
						song={song} />)
				}
			</div>
		</div>
	)
}
export default Library;