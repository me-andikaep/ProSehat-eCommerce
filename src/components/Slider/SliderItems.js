import Slider from 'react-slick';
import lodash from 'lodash';
import Icons from '../icons';
import { Stack } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';

const SliderItems = ({ listData, category }) => {
	// console.log(
	// 	'filter',
	// 	listData.filter((dt) => dt.category === category)
	// );

	let history = useHistory();

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
		infinite: false,
		slidesToShow: 3,
		slidesToScroll: 1,
		nextArrow: <SampleNextArrow />,
		prevArrow: <SamplePrevArrow />,
		responsive: [
			{
				breakpoint: 712,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1,
				},
			},
		],
	};

	const randomStart = () => {
		const star = [1, 2, 3, 4, 5];
		const data = lodash.sampleSize(star, 1);
		return data;
	};

	return (
		<div className='container-slider-items'>
			<div className='title'>
				<h5>{lodash.startCase(lodash.toLower(category))}</h5>{' '}
				<span className='more'>Lihat Semua</span>
			</div>
			<div className='wrapper-items'>
				<Slider {...settings}>
					{listData
						.filter((dt) => dt.category === category)
						.map((dt) => (
							<div
								key={dt.id}
								className='items-card'
								onClick={() => history.push(`/detail/${dt.id}`)}
							>
								<div className='wrapper-item-img'>
									<img src={dt.image} alt={dt.id} className='carousel-img' />
								</div>

								<div className='item-info'>
									<Stack>
										<div className='item-name'>{dt.title}</div>
										<div className='item-price'>$ {dt.price}</div>
										<div className='rating'>
											★ <span>{randomStart()}</span>
										</div>
									</Stack>
								</div>
								{/* */}
							</div>
						))}
				</Slider>
			</div>
		</div>
	);
};

export default SliderItems;
