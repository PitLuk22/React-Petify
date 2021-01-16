import React, { useState, useEffect } from 'react';
import Player from '../player';
import Song from '../song';
import Library from '../library'
import Nav from '../nav';

import musicDB from '../../data';


function App() {
	const [songs, setSongs] = useState(musicDB());
	const [currentSong, setCurrentSong] = useState(...JSON.parse(localStorage.getItem('songs')).filter(song => song.active));
	const [isPlaying, setIsPlaying] = useState(false);
	const [library, showLibrary] = useState(false);

	useEffect(() => {
		if (!localStorage.getItem('songs')) {
			console.log('set localStorage');
			localStorage.setItem('songs', JSON.stringify(musicDB()))
		} else {
			console.log('we already have localStorage');
			setSongs(JSON.parse(localStorage.getItem('songs')))
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
