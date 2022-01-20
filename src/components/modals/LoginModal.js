import React, { useRef } from 'react';
import { Form, Modal } from 'react-bootstrap';
import { UsersList } from '../../data/Users';
import { CartList } from '../../data/CartList';
import { useDispatch } from 'react-redux';
import { Actions } from '../../redux/reducers/cartReducer';

const LoginModal = ({ ModalLoginHandleShow, handleClose, setIsLogin }) => {
	const emailRef = useRef();
	const passwordRef = useRef();

	const dispatch = useDispatch();

	// console.log('usersList', UsersList);
	// john@gmail.com
	// m38rmF$

	const checkValid = async (email, password) => {
		const cekemail = UsersList.find((dt) => {
			return dt.email === email;
		});

		const cekpass = UsersList.find((dt) => {
			return dt.password === password;
		});

		if (cekemail === undefined) {
			return alert('Email Tidak Ditemukan');
		}

		if (cekpass === undefined) {
			return alert('Password Salah');
		}

		const results = UsersList.find((dt) => {
			return dt.email === email && dt.password === password;
		});

		// console.log('results', results)

		return results;
	};

	const filterCartByUserId = (id) => {
		const filtered = CartList.filter((dt => dt.userId === id))
		// console.log('Filtered', filtered)
		dispatch({ type: Actions.SET_CART_LIST_BY_ID, cartById: filtered });
	}

	const onSubmit = async (e) => {
		e.preventDefault();

		let email = emailRef?.current?.value;
		let password = passwordRef?.current?.value;

		// console.log('email', email);
		// console.log('password', password);
		// console.log('UsersList', UsersList);

		const result = await checkValid(email, password);

		// console.log('result', result);

		if (result) {
			filterCartByUserId(result.id)
			setIsLogin(result);
			handleClose();
		}
	};

	return (
		<Modal
			show={ModalLoginHandleShow}
			onHide={handleClose}
			backdrop='static'
			centered
			className='container-modal-login'
		>
			<Modal.Header>
				<Modal.Title>Login</Modal.Title>
			</Modal.Header>
			<Modal.Body>
				<Form>
					<Form.Group className='mb-3' controlId='formBasicEmail'>
						<Form.Label>Email address</Form.Label>
						<Form.Control
							type='email'
							placeholder='Enter email'
							ref={emailRef}
						/>
					</Form.Group>

					<Form.Group className='mb-4' controlId='formBasicPassword'>
						<Form.Label>Password</Form.Label>
						<Form.Control
							type='password'
							placeholder='Password'
							ref={passwordRef}
						/>
					</Form.Group>

					<div className='action-btn'>
						<button className='btn-login' onClick={(e) => onSubmit(e)}>
							Submit
						</button>
						<button
							className='btn-cancel'
							onClick={(e) => {
								e.preventDefault();
								handleClose();
							}}
						>
							Close
						</button>
					</div>
				</Form>
			</Modal.Body>
		</Modal>
	);
};;

export default LoginModal;
