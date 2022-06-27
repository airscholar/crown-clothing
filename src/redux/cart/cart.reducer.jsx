import { CartActionTypes } from './cart.types';
import { addItemToCart, IncDecCartItemQuantity, removeItemFromCart } from './cart.utils';

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
        case CartActionTypes.INCREASE_CART_ITEM_QUANTITY: {
            return {
                ...state,
                cartItems: IncDecCartItemQuantity(state.cartItems, action.payload, 'inc')
            }
        }
        case CartActionTypes.DECREASE_CART_ITEM_QUANTITY: {
            return {
                ...state,
                cartItems: IncDecCartItemQuantity(state.cartItems, action.payload, 'dec')
            }
        }
        case CartActionTypes.REMOVE_ITEM_FROM_CART: {
            return {
                ...state,
                cartItems: removeItemFromCart(state.cartItems, action.payload)
            }
        }
        default:
            return state;
    }
}