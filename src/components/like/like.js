import React, { useState, useEffect } from 'react';
import Lottie from 'lottie-react-web';
import like from './like.json';

const Like = ({ currentSong, setCurrentSong, songs, setSongs }) => {

	const [toggle, setToggle] = useState(false);

	useEffect(() => {
		currentSong.liked ? setToggle(true) : setToggle(false);
	}, [toggle, currentSong])


	const setLikeHandler = () => {

		const newSongs = songs.map(song => {
			if (currentSong.id === song.id) {
				return { ...song, liked: !toggle }
			} else {
				return { ...song }
			}
		});

		setCurrentSong({
			...currentSong,
			liked: !toggle
		})
		setToggle(!toggle);
		setSongs(newSongs);
	}

	return (
		<div onClick={setLikeHandler} className='like'>
			<Lottie
				width={'35px'}
				height={'35px'}
				direction={toggle ? 1 : -1}
				speed={2}
				options={{
					animationData: like,
					loop: false,
				}}
			/>
		</div>
	)
}
export default Like;