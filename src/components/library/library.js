import React from 'react';
import LibrarySong from '../library-song';
import { v4 as uuidv4 } from 'uuid';

const Library = ({ songs, setCurrentSong, setSongs, library }) => {

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
		console.log('library');
		setSongs(newSongs);
	}

	return (
		<div className={`library ${library ? 'library-active' : ''}`}>
			<h2>Library</h2>
			<div className="library__songs">
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