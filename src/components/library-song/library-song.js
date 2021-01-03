import React from 'react';

const LibrarySong = ({ song, setSelectedSong }) => {

	const { name, cover, artist, active } = song;
	const activeClass = active ? ' library-song-active' : '';

	return (
		<div onClick={() => setSelectedSong(song)} className={`library-song ${activeClass}`}>
			<img src={cover} className="library-song__img" alt={name} />
			<div className="library-song__descr">
				<h3>{name}</h3>
				<h4>{artist}</h4>
			</div>
		</div>
	)
}
export default LibrarySong;