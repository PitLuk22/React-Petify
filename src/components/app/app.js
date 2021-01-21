import React, { useState, useEffect } from 'react';
import Player from '../player';
import Song from '../song';
import Library from '../library'
import Nav from '../nav';

import musicDB from '../../data';


function App() {
	const [songs, setSongs] = useState(musicDB());
	const [currentSong, setCurrentSong] = useState(songs[0]);
	const [isPlaying, setIsPlaying] = useState(false);
	const [library, showLibrary] = useState(false);

	useEffect(() => {
		if (!localStorage.getItem('songs')) {
			localStorage.setItem('songs', JSON.stringify(musicDB()))
			setCurrentSong(...JSON.parse(localStorage.getItem('songs')).filter(song => song.active))
		} else {
			setSongs(JSON.parse(localStorage.getItem('songs')))
			setCurrentSong(...JSON.parse(localStorage.getItem('songs')).filter(song => song.active))
		}
	}, [])
	return (
		<div className={`app ${library ? 'ml20' : ''}`}>
			<Nav
				library={library}
				showLibrary={showLibrary} />
			<Song
				currentSong={currentSong}
				isPlaying={isPlaying} />
			<Player
				songs={songs}
				setSongs={setSongs}
				isPlaying={isPlaying}
				setIsPlaying={setIsPlaying}
				currentSong={currentSong}
				setCurrentSong={setCurrentSong} />
			<Library
				songs={songs}
				setCurrentSong={setCurrentSong}
				setSongs={setSongs}
				library={library} />
		</div>
	);
}

export default App;
