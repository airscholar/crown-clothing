import { CartActionTypes } from './cart.types';

const INITIAL_STATE = {
    cartItems: [],
    itemCount: 0,
    toggleCartHidden: true
}

export const cartReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case CartActionTypes.TOGGLE_CART_HIDDEN:
            return {
                ...state,
                toggleCartHidden: !state.toggleCartHidden
            }
        default:
            return state;
    }
}