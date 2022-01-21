import React, { useCallback, useEffect, useState } from 'react';
import { Stack } from 'react-bootstrap';

const TotalShopCartCard = ({ listCart }) => {
	const [cartAmount, setCartAmount] = useState(0);
	const [totalPrice, setTotalPrice] = useState(0);

	// console.log('cartState', cartState);
	// console.log('cartAmount', cartAmount);

	const countAmmount = useCallback(() => {
		let length = 0;
		listCart.forEach((ele) => {
			ele.products.forEach((item) => {
				if (item.byItem === true) {
					length += 1;
				}
			});
		});

		return length;
	}, [listCart]);

	useEffect(() => {
		let amount = countAmmount();
		setCartAmount(amount);
		return () => {};
	}, [listCart, countAmmount]);

	const countTotalPrice = useCallback(() => {
		let price = 0;
		listCart.forEach((ele) => {
			ele.products.forEach((items) => {
				if (items.byItem === true) {
					price += items.item.price;
				}
			});
		});

		return price;
	}, [listCart]);

	useEffect(() => {
		let price = countTotalPrice();
		setTotalPrice(price);
		return () => {};
	}, [listCart, countTotalPrice]);

	return (
		<div className='wrapper-summery-order'>
			<Stack gap={2}>
				<h6 className='mb-3'>Ringkasan Belanja</h6>
				<div className='d-flex flex-column'>
					<div>Total Harga ({cartAmount} barang)</div>
					<h6>${totalPrice}</h6>
				</div>
				<hr className='hr hr-lvl-2' />
				<div className='d-flex justify-content-between align-items-center'>
					<div>Total Harga</div>
					<h5>${totalPrice}</h5>
				</div>
				<button className='btn-checkout'>Beli ({cartAmount})</button>
			</Stack>
		</div>
	);
};

export default TotalShopCartCard;
