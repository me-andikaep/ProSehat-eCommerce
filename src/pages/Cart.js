import React, { useEffect, useState } from 'react';
import { Col, Row, Stack } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { DataProduct } from '../data/Products';
import moment from 'moment';
import Icons from '../components/icons';
import TotalShopCartCard from '../components/card/TotalShopCartCard';

const Cart = ({ isAnouncement }) => {
	const [listCart, setListCart] = useState([]);

	const cartState = useSelector((state) => state?.cart);
	const dispatch = useDispatch();

	const findProduct = (id) => {
		const result = DataProduct.find((dt) => dt.id === id);
		return result;
	};

	useEffect(() => {
		let newArr = [];
		cartState.cartById.map((cart) => {
			let arr = [];
			cart.products.map((dt) => {
				const findDt = findProduct(dt.productId);

				let aarr = {
					...dt,
					item: findDt,
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

	// console.log('listCart', listCart);

	const onChangeAmount = (idxList, idxItem, operator) => {
		let newArr = [...listCart];
		if (operator === 'add') {
			newArr[idxList].products[idxItem].quantity += 1;
		}

		if (operator === 'substrack') {
			newArr[idxList].products[idxItem].quantity -= 1;
		}

		dispatch({ type: 'SET_CART_LIST_BY_ID', cartById: newArr });
	};

	const onCheckCartList = (idxList) => {
		let newArr = [...listCart];

		if (idxList !== undefined) {
			newArr[idxList].byDate = !newArr[idxList].byDate;
		}

		newArr.forEach((ele) => {
			if (ele.byDate === true) {
				ele.products.forEach((item) => {
					item.byItem = true;
				});
			}

			if (ele.byDate === false) {
				ele.products.forEach((item) => {
					item.byItem = false;
				});
			}
		});

		setListCart(newArr);
	};

	const onCheckItemList = (idxList, idxItem) => {
		let newArr = [...listCart];

		if (idxList !== undefined && idxItem !== undefined) {
			newArr[idxList].products[idxItem].byItem =
				!newArr[idxList].products[idxItem].byItem;
		}

		if (newArr[idxList].products.every((v) => v.byItem === true)) {
			newArr[idxList].byDate = true;
		} else {
			newArr[idxList].byDate = false;
		}

		setListCart(newArr);
	};

	return (
		<main
			className={`container container-main container-cart ${
				isAnouncement ? 'isAnounce' : ''
			}`}
		>
			<Row>
				<Col xs={12} md={8} className='mb-3'>
					<h5 className='mb-2'>Keranjang Anda</h5>
					{listCart &&
						listCart.map((dt, i) => (
							<Stack key={dt.id} className='container-cart-list'>
								<div className='mx-1 my-2 d-flex flex-row align-items-center'>
									<input
										type='checkbox'
										value={dt.byDate}
										checked={dt.byDate}
										className='me-2'
										onChange={() => onCheckCartList(i)}
									/>
									<h6 className='m-0'>
										Ditambahkan pada {moment(dt.date).format('DD-MMMM-yyyy')}
									</h6>
								</div>
								{dt.products.map((product, idx) => (
									<Stack className='ms-4' key={idx}>
										<div className='d-flex flex-row align-items-center'>
											<input
												type='checkbox'
												value={product.byItem}
												checked={product.byItem}
												className='me-2'
												onChange={() => onCheckItemList(i, idx)}
											/>
											<div className='wrapper-item-desc'>
												<div className='wrapper-img'>
													<img alt='' src={product.item?.image} />
												</div>
												<div className='item-desc'>
													<h6>{product.item?.title}</h6>
													<div className='price'>$ {product.item?.price}</div>
												</div>
											</div>
										</div>
										<div className='wrapper-item-action'>
											<Icons type='removeBin' className='icon-remove' />
											<div className='vr' />
											<div className='amount-action'>
												<Icons
													type='remove'
													className={`icon ${
														product.quantity === 1 ? 'disabled' : ''
													}`}
													size={22}
													onClick={() => onChangeAmount(i, idx, 'substrack')}
												/>
												<span className='amount'>{product.quantity}</span>
												<Icons
													type='add'
													className='icon'
													size={22}
													onClick={() => onChangeAmount(i, idx, 'add')}
												/>
											</div>
										</div>

										{idx !== dt.products.length - 1 && (
											<hr className='hr hr-lvl-2' />
										)}
									</Stack>
								))}

								{i !== listCart.length - 1 && <hr className='hr hr-lvl-1' />}
							</Stack>
						))}
				</Col>
				<Col xs={12} md={4}>
					<TotalShopCartCard listCart={listCart} />
				</Col>
			</Row>
		</main>
	);
};

export default Cart;
