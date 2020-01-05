import { CartActionTypes } from './cart.types';
import { addItemToCart } from './cart.utilities';

const INITIALSTATE = {
    hidden: true,
    cartItems: []
}
const CartReducer = (state = INITIALSTATE, action) => {
    switch (action.type) {
        case CartActionTypes.TOGGLE_CART_DROPDOWN:
            return { ...state, hidden: !state.hidden };
        case CartActionTypes.ADD_ITEM:
            return { ...state, cartItems: addItemToCart(state.cartItems, action.payload) };
        default:
            return state;
    }
};

export default CartReducer;