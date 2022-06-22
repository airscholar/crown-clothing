import { CartActionTypes } from './cart.types';

export const setToggleCartHidden = () => ({
  type: CartActionTypes.TOGGLE_CART_HIDDEN,
  // payload: cart,
});

export const setAddNewItem = item => ({
  type: CartActionTypes.ADD_NEW_ITEM,
  payload: item,
});
