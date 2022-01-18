import Icons from '../icons';
import Slider from 'react-slick';
import { DataProduct } from '../../data/Products';
import { useEffect, useState } from 'react';
import lodash from 'lodash';

const SliderBig = () => {
	const [data, setData] = useState([]);

	const randomArray = () => {
		const data = lodash.sampleSize(DataProduct, 5);
		setData(data);
	};

	useEffect(() => {
		randomArray();
		return () => {};
	}, []);

	console.log('DataProduct', DataProduct);
	console.log('data', data);

	const settings = {
		// dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
		nextArrow: <SampleNextArrow />,
		prevArrow: <SamplePrevArrow />,
	};

	function SamplePrevArrow(props) {
		const { className, style, onClick } = props;
		return (
			<Icons
				type='arrowLeft1'
				size='20'
				className={className + ' icon'}
				onClick={onClick}
			/>
		);
	}

	function SampleNextArrow(props) {
		const { className, style, onClick } = props;
		return (
			<Icons
				type='arrowRight1'
				size='20'
				className={className + ' icon'}
				onClick={onClick}
			/>
		);
	}

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
