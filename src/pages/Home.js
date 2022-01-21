import { useEffect, useState } from 'react';
import { Stack } from 'react-bootstrap';
import Announcement from '../components/announcements/Announcement';
import Header from '../components/header/Header';
import SliderBig from '../components/Slider/SliderBig';
import SliderItems from '../components/Slider/SliderItems';
import { DataProduct } from '../data/Products';
import { CartList } from '../data/CartList';

const Home = ({ isAnouncement }) => {
	const [listProduct, setListProduct] = useState([]);

	// console.log('CartList', CartList);

	useEffect(() => {
		setListProduct(DataProduct);
	}, []);

	return (
		// <div>
		<main
			className={`container container-main ${isAnouncement ? 'isAnounce' : ''}`}
		>
			<Stack gap={3}>
				<SliderBig listData={listProduct} />
				<SliderItems listData={listProduct} category="men's clothing" />
				<SliderItems listData={listProduct} category="women's clothing" />
				<SliderItems listData={listProduct} category='electronics' />
				<SliderItems listData={listProduct} category='jewelery' />
			</Stack>
		</main>
		// </div>
	);
};

export default Home;
