import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMusic } from '@fortawesome/free-solid-svg-icons';
import spotify from './spotify.svg'

const Nav = ({ library, showLibrary }) => {
	return (
		<nav className='navbar'>
			<div className='navbar__logo'>
				<img src={spotify} alt='Petify' />
				<h1>Petify</h1>
			</div>
			<button
				onClick={() => showLibrary(!library)}
				className='navbar__button'>
				<span>Library</span>
				<FontAwesomeIcon icon={faMusic} />
			</button>
		</nav>
	)
}

export default Nav;
