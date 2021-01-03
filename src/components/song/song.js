import React from 'react';
import styled from 'styled-components';

let isPlayingForAnim;
const Wrapper = styled.div`
		&::before {
			animation-duration: ${() => isPlayingForAnim ? '1.4s' : '0s'};
		}
		&::after {
			animation-duration: ${() => isPlayingForAnim ? '1.1s' : '0s'};
		}
		.song__img {
			animation-duration: ${() => isPlayingForAnim ? '1.2s' : '0s'};
		}
	`;

const Song = ({ currentSong, isPlaying }) => {
	document.documentElement.style.setProperty('--first', currentSong.color[0]);
	document.documentElement.style.setProperty('--second', currentSong.color[1]);

	isPlayingForAnim = isPlaying;
	const { cover, name, artist } = currentSong;

	return (
		<div className='song'>
			<Wrapper className="song__wrapper">
				<img src={cover} className="song__img" alt={name} />
			</Wrapper>
			<h2 className="song__name">{name}</h2>
			<h3 className="song__artist">{artist}</h3>
		</div>
	)
}

export default Song;