import { useState } from 'react';
import LoginModal from './components/modals/LoginModal';
import useLocalStorage from './hooks/useLocalStorage';
import Home from './pages/Home';
import './styles/index.scss';
import { Switch, Route, Link } from 'react-router-dom';
import Detail from './pages/Detail';
import Announcement from './components/announcements/Announcement';
import Header from './components/header/Header';

function App() {
	// const [isLogin, setIsLogin] = useState(false);
	const [isLogin, setIsLogin] = useLocalStorage('user', null);
	const [modalLoginIsOpen, setModalLoginIsOpen] = useState(false);
	const [isAnouncement, setIsAnouncement] = useState(true);

	console.log('isLogin', isLogin);

	const handleModalLogin = (modal) => {
		setModalLoginIsOpen(!modalLoginIsOpen);
	};

	return (
		<div className='App'>
			<Announcement isAnouncement={isAnouncement} />
			<Header
				isAnouncement={isAnouncement}
				isLogin={isLogin}
				setModalLoginIsOpen={setModalLoginIsOpen}
			/>
			<Switch>
				<Route path='/' exact>
					<Home
						isAnouncement={isAnouncement}
						isLogin={isLogin}
						setModalLoginIsOpen={() => handleModalLogin()}
					/>
				</Route>
				<Route path='/detail/:id' exact>
					<Detail
						isAnouncement={isAnouncement}
						isLogin={isLogin}
						setModalLoginIsOpen={() => handleModalLogin()}
					/>
				</Route>
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
