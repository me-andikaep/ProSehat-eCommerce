import { useState } from 'react';
import Home from './pages/Home';
import './styles/index.scss';

function App() {
	const [isLogin, setIsLogin] = useState(false);

	return (
		<div className='App'>
			<Home isLogin={isLogin} />
		</div>
	);
}

export default App;
