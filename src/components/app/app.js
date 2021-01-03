import React, { useState } from 'react';
import Player from '../player';
import Song from '../song';
import Library from '../library'
import Nav from '../nav';

import musicDB from '../../data';

function App() {

	const [songs, setSongs] = useState(musicDB());
	const [currentSong, setCurrentSong] = useState(...songs.filter(song => song.active));
	const [isPlaying, setIsPlaying] = useState(false);
	const [library, showLibrary] = useState(false);
	const [volume, setVolume] = useState(1);

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
				setCurrentSong={setCurrentSong}
				volume={volume}
				setVolume={setVolume} />
			<Library
				songs={songs}
				setCurrentSong={setCurrentSong}
				setSongs={setSongs}
				library={library} />
		</div>
	);
}

export default App;
