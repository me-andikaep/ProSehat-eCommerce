import { Stack } from 'react-bootstrap';
import Icons from '../icons';
import SearchMain from '../Search/SearchMain';

const Header = ({ isAnouncement }) => {
	return (
		<div className={`container-header ${isAnouncement ? 't-30px' : ''}`}>
			<div className='wrapper'>
				<div className='wrapper-left'>eCommerce</div>
				<div className='wrapper-center'>
					<SearchMain />
				</div>
				<div className='wrapper-right'>
					<Stack
						direction='horizontal'
						className='justify-content-center align-items-center wrapper-stack'
					>
						<Icons type='cart' size='24' className='icon' />
						<div className='vr' style={{ margin: '20px 0px' }} />
						<button className='btn-login'>Masuk</button>
						<button className='btn-regis'>Daftar</button>
					</Stack>
				</div>
			</div>
		</div>
	);
};

export default Header;
