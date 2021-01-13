import React from 'react';
import Like from '../like'

const LibrarySong = ({ song, setSelectedSong, setSongs, songs }) => {

	const { name, cover, artist, active } = song;
	const activeClass = active ? ' library-song-active' : '';

	const setLikeHandlerLibrary = (e, toggle) => {
		e.stopPropagation()
		const newSongs = songs.map(currentSong => {
			if (currentSong.id === song.id) {
				return { ...currentSong, liked: !toggle }
			} else {
				return { ...currentSong }
			}
		});
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