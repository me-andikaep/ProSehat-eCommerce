import React, { useEffect, useState } from 'react';
import { Col, Row, Stack } from 'react-bootstrap';
import Icons from '../components/icons';
import { DataProduct } from '../data/Products';

const Detail = ({ isAnouncement, match, isLogin, setModalLoginIsOpen }) => {
	const paramsId = match?.params && match?.params?.id;
	const [listProduct, setListProduct] = useState([]);
	const [data, setData] = useState(null);
	const [amount, setAmount] = useState(1);

	console.log(data);

	useEffect(() => {
		setListProduct(DataProduct);
	}, []);

	useEffect(() => {
		if (listProduct && paramsId) {
			const dt = listProduct.find((item) => item.id === parseInt(paramsId));
			setData(dt);
		}
	}, [paramsId, listProduct]);

	const onSubtract = () => {
		if (amount === 1) {
			return 1;
		}

		let result = amount - 1;
		setAmount(result);
	};

	const onAdd = () => {
		let result = amount + 1;
		setAmount(result);
	};

	const onClickAddCart = () => {
		if (!isLogin) {
			return setModalLoginIsOpen();
		}

		alert('Berhasil ditambahkan ke keranjang');
	};

	return (
		<main
			className={`container container-main detail-item ${
				isAnouncement ? 'isAnounce' : ''
			}`}
		>
			<Row>
				<Col md={12} lg={6}>
					<div className='wrapper-img'>
						<img alt='' src={data?.image} />
					</div>
				</Col>
				<Col md={12} lg={6}>
					<Stack className='wrapper-info' gap={3}>
						<h4>{data?.title}</h4>
						<div className='desc'>{data?.description}</div>
						<div className='price'>{data?.price ? '$' + data.price : ''}</div>
						<div className='add-wrapper'>
							<div className='amount-container'>
								<Icons
									type='remove'
									size={36}
									// className='icon'
									className={`icon ${amount === 1 ? 'disabled' : null}`}
									onClick={() => onSubtract()}
								/>
								<span className='amount'>{amount}</span>
								<Icons
									type='add'
									size={36}
									className='icon'
									onClick={() => onAdd()}
								/>
							</div>
							<div className='sub-total'>
								<span>Total: </span>
								<span className='bold'>
									{data?.price ? '$' + (data.price * amount).toFixed(2) : ''}
								</span>
							</div>
						</div>
						<button className='btn-add-cart' onClick={() => onClickAddCart()}>
							+ Keranjang
						</button>
					</Stack>
				</Col>
			</Row>
		</main>
	);
};

export default Detail;
