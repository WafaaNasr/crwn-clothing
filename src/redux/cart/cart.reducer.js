import { CartActionTypes } from './cart.types';

const INITIALSTATE = {
    hidden: true
}
const CartReducer = (state = INITIALSTATE, action) => {
    switch (action.type) {
        case CartActionTypes.TOGGLE_CART_DROPDOWN:
            return { ...state, hidden: !state.hidden };
        default:
            return state;
    }
};

export default CartReducer;