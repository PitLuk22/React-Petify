import React from 'react';
import LibrarySong from '../library-song';
import SortMenu from '../sort-menu';
import { v4 as uuidv4 } from 'uuid';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

const Library = ({ songsToRender, songs, setCurrentSong, setSongs, library, genre, setGenre }) => {

	const setSelectedSong = (selectedSong) => {
		setCurrentSong(selectedSong);

		const newSongs = songs
			.map(song => selectedSong.id === song.id
				? { ...song, active: true }
				: { ...song, active: false });

		localStorage.setItem('songs', JSON.stringify(newSongs));
		setSongs(newSongs);
	}

	return (
		<div className={`library ${library ? 'library-active' : ''}`}>
			<h2>Library</h2>
			<div className="library__songs">
				<SortMenu
					genre={genre}
					showSongsOfCurrentGenre={(genre) => setGenre(genre)} />
				{
					!songsToRender.length && genre === 'liked'
						? <div className='empty'>
							<h3>Nothing has been added</h3>
							<small>Click <FontAwesomeIcon icon={faHeart} size={'sm'} color={'#1db954'} /> to add track</small>
						</div>
						: songsToRender.map(song => <LibrarySong
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