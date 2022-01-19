import { Stack } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import Icons from '../icons';
import SearchMain from '../Search/SearchMain';

const Header = ({ isAnouncement, isLogin, setModalLoginIsOpen }) => {
	const onLogout = () => {
		localStorage.removeItem('eCommerce-user');
		window.location.reload();
	};

	const onClickCart = () => {
		if (isLogin) {
		} else {
			setModalLoginIsOpen();
		}
	};
	let history = useHistory();

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
