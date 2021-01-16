import React from 'react';
import Like from '../like'

const LibrarySong = ({ song, setSelectedSong, setSongs, songs, setCurrentSong }) => {

	const { name, cover, artist, active } = song;
	const activeClass = active ? ' library-song-active' : '';

	const setLikeHandlerLibrary = (e, toggle) => {
		e.stopPropagation();
		const newSongs = songs.map(currentSong => {
			if (currentSong.id === song.id) {
				return { ...currentSong, liked: !toggle }
			} else {
				return { ...currentSong }
			}
		});
		// if we clicked like at the active song 
		if (e.target.closest('.library-song-active')) {
			setCurrentSong(newSongs.find(item => song.id === item.id));
		}

		//localStorage
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
		setSongs(newSongs);
	}

	return (
		<div>
			<div onClick={() => setSelectedSong(song)} className={`library-song ${activeClass}`}>
				<img src={cover} className="library-song__img" alt={name} />
				<div className="library-song__descr">
					<h3>{name}</h3>
					<h4>{artist}</h4>
				</div>
				<Like
					setLikeHandler={(e, toggle) => setLikeHandlerLibrary(e, toggle)}
					currentSong={song} />
			</div>
		</div>
	)
}
export default LibrarySong;