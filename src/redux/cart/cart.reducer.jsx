import { CartActionTypes } from './cart.types';
import { addItemToCart } from './cart.utils';

const INITIAL_STATE = {
    cartItems: [],
    toggleCartHidden: true
}

export const cartReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case CartActionTypes.TOGGLE_CART_HIDDEN:
            return {
                ...state,
                toggleCartHidden: !state.toggleCartHidden
            }
        case CartActionTypes.ADD_NEW_ITEM:
            return {
                ...state,
                cartItems: addItemToCart(state.cartItems, action.payload),
            }
        default:
            return state;
    }
}