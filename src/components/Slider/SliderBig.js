/* eslint-disable react-hooks/exhaustive-deps */
import Icons from '../icons';
import Slider from 'react-slick';

import { useEffect, useState } from 'react';
import lodash from 'lodash';

const SliderBig = ({ listData }) => {
	const [data, setData] = useState([]);

	const randomArray = () => {
		const data = lodash.sampleSize(listData, 5);
		setData(data);
	};

	useEffect(() => {
		if (listData) {
			randomArray();
		}
		return () => {};
	}, [listData]);

	// console.log('DataProduct', DataProduct);
	// console.log('data data', data);

	function SamplePrevArrow(props) {
		const { className, onClick } = props;
		return (
			<div className={className + ' prev-arrow-slider'} onClick={onClick}>
				<Icons type='arrowLeft1' size='20' color='white' />
			</div>
		);
	}

	function SampleNextArrow(props) {
		const { className, onClick } = props;
		return (
			<div className={className + ' next-arrow-slider'} onClick={onClick}>
				<Icons type='arrowRight1' size='20' color='white' />
			</div>
		);
	}

	const settings = {
		dots: true,
		infinite: true,
		speed: 2000,
		autoplay: true,
		autoplaySpeed: 5000,
		cssEase: 'linear',
		slidesToShow: 1,
		slidesToScroll: 1,
		nextArrow: <SampleNextArrow />,
		prevArrow: <SamplePrevArrow />,
	};

	return (
		<div className='container-slider-big'>
			<Slider {...settings}>
				{data.map((dt) => (
					<div key={dt.id} className='wrapper-carousel'>
						<img src={dt.image} alt={dt.id} className='carousel-img' />
					</div>
				))}
			</Slider>
			{/* <div className='arrow left'>
				<Icons type='arrowLeft1' size='20' className='icon' />
			</div>
			<div className='arrow right'>
				<Icons type='arrowRight1' size='20' className='icon' />
			</div> */}
		</div>
	);
};

export default SliderBig;
