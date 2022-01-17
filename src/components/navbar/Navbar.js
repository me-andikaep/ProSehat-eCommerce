import SearchMain from '../Search/SearchMain';

const Navbar = () => {
	return (
		<div className='container-header'>
			<div className='wrapper'>
				<div className='wrapper-left'>eCommerce</div>
				<div className='wrapper-center'>
					<SearchMain />
				</div>
				<div className='wrapper-right'>right</div>
			</div>
		</div>
	);
};

export default Navbar;
