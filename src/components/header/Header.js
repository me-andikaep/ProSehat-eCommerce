import { useCallback, useEffect, useState } from 'react';
import { Badge, Stack } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import Icons from '../icons';
import SearchMain from '../Search/SearchMain';
import lodash from 'lodash';

const Header = ({ isAnouncement, isLogin, setModalLoginIsOpen }) => {
	let history = useHistory();

	const [cartAmount, setCartAmount] = useState(null);

	const cartState = useSelector((state) => state?.cart);
	console.log('cartState', cartState);
	console.log('cartAmount', cartAmount);

	const countAmmount = useCallback(() => {
		var length = 0;

		lodash.forEach(
			cartState?.cartById,
			(arr) => (length += arr.products.length)
		);
		return length;
	}, [cartState?.cartById]);

	useEffect(() => {
		let amount = countAmmount();

		setCartAmount(amount);

		return () => {};
	}, [cartState.cartById, countAmmount]);

	const onLogout = () => {
		localStorage.removeItem('eCommerce-user');
		history.replace('/');
		window.location.reload();
	};

	const onClickCart = () => {
		if (isLogin) {
		} else {
			return setModalLoginIsOpen();
		}
	};

	return (
		<div className={`container-header ${isAnouncement ? 't-30px' : ''}`}>
			<div className='wrapper'>
				<div className='wrapper-left' onClick={() => history.push('/')}>
					eCommerce
				</div>
				<div className='wrapper-center'>
					<SearchMain />
				</div>
				<div className='wrapper-right'>
					<Stack
						direction='horizontal'
						className='justify-content-center align-items-center wrapper-stack'
					>
						<div className='cart-controller' onClick={() => onClickCart()}>
							<Icons type='cart' size='24' className='icon' />
							{cartAmount && <Badge className='badge'>{cartAmount}</Badge>}
						</div>
						<div className='vr' style={{ margin: '20px 0px' }} />
						{isLogin ? (
							<>
								<div>{isLogin && isLogin?.name?.firstname}</div>
								<button className='btn-logout' onClick={() => onLogout()}>
									Keluar
								</button>
							</>
						) : (
							<>
								<button className='btn-login' onClick={setModalLoginIsOpen}>
									Masuk
								</button>
								<button
									className='btn-regis'
									onClick={() => alert('Coming Soon!')}
								>
									Daftar
								</button>
							</>
						)}
					</Stack>
				</div>
			</div>
		</div>
	);
};

export default Header;
