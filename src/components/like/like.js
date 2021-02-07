import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart as faHeartFilled } from '@fortawesome/free-solid-svg-icons'
import { faHeart as faHeartEmpty } from '@fortawesome/free-regular-svg-icons'

const Like = ({ setLikeHandler, like }) => {

	const likeStyle = {
		width: '20px',
		height: 'auto',
		color: like ? '#1db954' : '#3e3e3e'
	}

	return (
		<div className='like' onClick={(e) => setLikeHandler(e)}>
			<FontAwesomeIcon style={likeStyle} icon={like ? faHeartFilled : faHeartEmpty} />
		</div>
	)
}
export default Like;