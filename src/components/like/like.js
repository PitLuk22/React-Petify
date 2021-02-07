import React from 'react';
import Lottie from 'lottie-react-web';
import likeImg from './like.json';

const Like = ({ setLikeHandler, like }) => {

	return (
		<div onClick={(e) => {
			setLikeHandler(e)
		}}
			className='like'>
			<Lottie
				width={'35px'}
				height={'35px'}
				direction={like ? 1 : -1}
				speed={2}
				options={{
					animationData: likeImg,
					loop: false,
				}}
			/>
		</div>
	)
}
export default Like;