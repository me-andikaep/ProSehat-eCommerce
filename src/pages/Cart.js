import React, { useEffect, useState } from 'react';
import { Col, Row, Stack } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { DataProduct } from '../data/Products';

const Cart = ({ isAnouncement }) => {
	const [listCart, setListCart] = useState([]);

	const cartState = useSelector((state) => state?.cart);

	useEffect(() => {
		let newArr = [];
		cartState.cartById.map((cart) => {
			let arr = [];
			cart.products.map((dt) => {
				let aarr = {
					...dt,
					byItem: false,
				};
				return arr.push(aarr);
			});

			let item = {
				...cart,
				products: arr,
				byDate: false,
			};

			return newArr.push(item);
		});

		setListCart(newArr);
		return () => {};
	}, [cartState]);

	console.log('listCart', listCart);

	const findTitle = (id) => {
		const result = DataProduct.find((dt) => dt.id === id);
		return result.title;
	};

	return (
		<main
			className={`container container-main ${isAnouncement ? 'isAnounce' : ''}`}
		>
			<Row>
				<Col xs={12} md={8}>
					<h5>Keranjang Anda</h5>
					{cartState.cartById &&
						cartState.cartById.map((dt, i) => (
							<Stack key={dt.id} className=''>
								<div className='m-1 '>
									<input type='checkbox' value={dt.byDate} className='me-2' />
									{dt.date}
								</div>
								{dt.products.map((item, idx) => (
									<Stack className='ms-4' key={idx}>
										<div>
											<input
												type='checkbox'
												value={item.byItem}
												className='me-2'
											/>
											{findTitle(item.productId)}
										</div>
										{idx !== dt.products.length - 1 && (
											<hr className='hr primary' />
										)}
									</Stack>
								))}

								{i !== cartState?.cartById.length - 1 && <hr className='hr' />}
							</Stack>
						))}
				</Col>
				<Col xs={12} md={4}>
					asdasd
				</Col>
			</Row>
		</main>
	);
};

export default Cart;
