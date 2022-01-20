export const Actions = {
	SET_CART_LIST: 'SET_CART_LIST',
	SET_CART_LIST_BY_ID: 'SET_CART_LIST_BY_ID',
};

const initialState = {
	cartList: [], //list Order
	cartById: [],
};

export function cartReducer(state = initialState, action) {
	if (!action.type) return state;
	switch (action.type) {
		case Actions.SET_CART_LIST:
			return { ...state, cartList: action.cartList };
		case Actions.SET_CART_LIST_BY_ID:
			return { ...state, cartById: action.cartById };

		default:
			return state;
	}
}
