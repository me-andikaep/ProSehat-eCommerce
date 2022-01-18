/* eslint-disable react-hooks/exhaustive-deps */
import { useCallback, useEffect, useRef, useState } from 'react';
import Icons from '../icons';
import { DataCategories } from '../../data/Categories';

const SearchMain = () => {
	const refInput = useRef();
	const [open, setOpen] = useState(true);

	useEffect(() => {
		['click', 'touchend'].forEach((e) => {
			document.addEventListener(e, toggleClose);
		});

		return () =>
			['click', 'touchend'].forEach((e) => {
				document.removeEventListener('click', toggleClose);
			});
	}, []);

	const toggleClose = useCallback((e) => {
		setOpen(e && e.target === refInput.current);
	}, []);

	return (
		<div className='container-search-main'>
			<div className={`controller-search ${open ? 'focused' : ''}`}>
				<input className='input-main' ref={refInput} />
				<button className='btn-src'>
					<Icons type='search' size='20' className='icon' />
				</button>
			</div>
			<div className={`controller-options ${open ? 'open' : ''}`}>
				<div className='wrapper-items mb-2'>
					<h6 className='title'>Kategori</h6>
					{DataCategories &&
						DataCategories.map((dt, i) => (
							<div className='item' key={i}>
								{dt}
							</div>
						))}
				</div>
				<div className='wrapper-items mb-2'>
					<h6 className='title'>Pencarian Populer</h6>
					<div className='item'>Colokan Listrik</div>
					<div className='item'>Bawang Goreng</div>
					<div className='item'>Rak Dinding</div>
					<div className='item'>Karpet</div>
					<div className='item'>Lemari</div>
				</div>
			</div>
		</div>
	);
};

export default SearchMain;
