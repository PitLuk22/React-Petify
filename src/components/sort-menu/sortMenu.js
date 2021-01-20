import React from 'react';

const SortMenu = ({ genre, showSongsOfCurrentGenre }) => {

	const setClassName = (selectedGenre) => {
		return genre === selectedGenre ? 'sort-menu__item active' : 'sort-menu__item';
	}

	return (
		<div className='sort-menu'>
			<div className="sort-menu__block">
				<div onClick={() => showSongsOfCurrentGenre('all')} className={setClassName('all')}><span>All</span></div>
				<div onClick={() => showSongsOfCurrentGenre('rock')} className={setClassName('rock')}><span>Rock</span></div>
			</div>
			<div className="sort-menu__block">
				<div onClick={() => showSongsOfCurrentGenre('trap')} className={setClassName('trap')}><span>Trap</span></div>
				<div onClick={() => showSongsOfCurrentGenre('rap')} className={setClassName('rap')}><span>Rap</span></div>
			</div>
			<div className="sort-menu__block sort-menu__block-liked">
				<div onClick={() => showSongsOfCurrentGenre('liked')} className={setClassName('liked')}><span>Liked</span></div>
			</div>
		</div>
	)
}

export default SortMenu;
