import React from 'react';
import Like from '../like'
import Waves from '../waves';

const LibrarySong = ({ song, setSelectedSong, setSongs, songs, setCurrentSong }) => {

	const { id, name, cover, artist, active } = song;
	const activeClass = active ? ' library-song-active' : '';
	const activeImgClass = active ? 'active' : '';

	const setLikeHandlerLibrary = (e) => {
		e.stopPropagation();
		const newSongs = songs.map(currentSong => {
			let currentLike = currentSong.liked;
			if (currentSong.id === song.id) {
				return { ...currentSong, liked: !currentLike }
			} else {
				return { ...currentSong }
			}
		});
		// if we clicked like at the active song 
		if (e.target.closest('.library-song-active')) {
			setCurrentSong(newSongs.find(item => song.id === item.id));
		}

		localStorage.setItem('songs', JSON.stringify(newSongs));
		setSongs(newSongs);
	}

	return (
		<div onClick={() => setSelectedSong(song)} className={`library-song ${activeClass}`}>
			<div className='library-song__block'>
				<img src={cover} className={`library-song__img ${activeImgClass}`} alt={name} />
				{active && <Waves />}
			</div>
			<div className="library-song__descr">
				<h3>{name}</h3>
				<h4>{artist}</h4>
			</div>
			<Like
				setLikeHandler={(e) => setLikeHandlerLibrary(e, id)}
				like={song.liked} />
		</div>

	)
}
export default LibrarySong;