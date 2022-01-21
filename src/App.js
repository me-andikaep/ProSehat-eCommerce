/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react';
import LoginModal from './components/modals/LoginModal';
import useLocalStorage from './hooks/useLocalStorage';
import Home from './pages/Home';
import './styles/index.scss';
import { Switch, Route } from 'react-router-dom';
import Detail from './pages/Detail';
import Announcement from './components/announcements/Announcement';
import Header from './components/header/Header';
import { useDispatch } from 'react-redux';
import { Actions } from './redux/reducers/cartReducer';
import { CartList } from './data/CartList';
import Cart from './pages/Cart';

function App() {
	// const [isLogin, setIsLogin] = useState(false);
	const dispatch = useDispatch();
	const [isLogin, setIsLogin] = useLocalStorage('user', null);
	const [modalLoginIsOpen, setModalLoginIsOpen] = useState(false);
	const [isAnouncement, setIsAnouncement] = useState(true);

	// console.log('isLogin', isLogin);

	const handleModalLogin = (modal) => {
		setModalLoginIsOpen(!modalLoginIsOpen);
	};

	const filterCartByUserId = (id) => {
		const filtered = CartList.filter((dt) => dt.userId === id);
		// console.log('Filtered', filtered)
		dispatch({ type: Actions.SET_CART_LIST_BY_ID, cartById: filtered });
	};

	useEffect(() => {
		if (isLogin) {
			filterCartByUserId(isLogin.id);
		}
	}, [isLogin]);

	return (
		<div className='App'>
			<Announcement isAnouncement={isAnouncement} />
			<Header
				isAnouncement={isAnouncement}
				isLogin={isLogin}
				setModalLoginIsOpen={() => handleModalLogin()}
			/>
			<Switch>
				<Route
					path='/'
					exact
					render={(props) => (
						<Home
							isAnouncement={isAnouncement}
							isLogin={isLogin}
							setModalLoginIsOpen={() => handleModalLogin()}
							{...props}
						/>
					)}
				/>
				<Route
					path='/detail/:id'
					exact
					render={(props) => (
						<Detail
							isAnouncement={isAnouncement}
							isLogin={isLogin}
							setModalLoginIsOpen={() => handleModalLogin()}
							{...props}
						/>
					)}
				/>
				<Route
					path='/cart'
					exact
					render={(props) => (
						<Cart isAnouncement={isAnouncement} isLogin={isLogin} {...props} />
					)}
				/>
			</Switch>
			{/* <Home isLogin={isLogin} setModalLoginIsOpen={() => handleModalLogin()} /> */}
			<LoginModal
				ModalLoginHandleShow={modalLoginIsOpen}
				handleClose={handleModalLogin}
				setIsLogin={setIsLogin}
			/>
		</div>
	);
}

export default App;
