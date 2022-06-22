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
        case CartActionTypes.ADD_NEW_ITEM:
            return {
                ...state,
                itemCount: state.cartItems.push(action.payload),
            }
        default:
            return state;
    }
}