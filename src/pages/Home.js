import { useEffect, useState } from 'react';
import { Stack } from 'react-bootstrap';
import Announcement from '../components/announcements/Announcement';
import Header from '../components/header/Header';
import SliderBig from '../components/Slider/SliderBig';
import SliderItems from '../components/Slider/SliderItems';
import { DataProduct } from '../data/Products';

const Home = ({ isLogin }) => {
	const [isAnouncement, setIsAnouncement] = useState(true);
	const [listProduct, setListProduct] = useState([]);

	useEffect(() => {
		setListProduct(DataProduct);
	}, []);

	return (
		<div>
			<Announcement isAnouncement={isAnouncement} />
			<Header isAnouncement={isAnouncement} isLogin={isLogin} />
			<main
				className={`container container-main ${
					isAnouncement ? 'isAnounce' : ''
				}`}
			>
				<Stack gap={2}>
					<SliderBig listData={listProduct} />
					<SliderItems listData={listProduct} category='electronics' />
					<SliderItems listData={listProduct} category='jewelery' />
					<SliderItems listData={listProduct} category="men's clothing" />
					<SliderItems listData={listProduct} category="women's clothing" />
				</Stack>
			</main>
		</div>
	);
};

export default Home;
