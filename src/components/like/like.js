import React, { useState, useEffect } from 'react';
import Lottie from 'lottie-react-web';
import like from './like.json';

const Like = ({ setLikeHandler, currentSong }) => {

	const [toggle, setToggle] = useState(false);

	useEffect(() => {
		currentSong.liked ? setToggle(true) : setToggle(false);
	}, [toggle, currentSong])


	return (
		<div onClick={(e) => {
			setLikeHandler(e, toggle)
			setToggle(!toggle)
		}}
			className='like'>
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