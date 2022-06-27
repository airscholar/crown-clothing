import { CartActionTypes } from './cart.types';

export const setToggleCartHidden = () => ({
  type: CartActionTypes.TOGGLE_CART_HIDDEN,
  // payload: cart,
});

export const setAddNewItem = item => ({
  type: CartActionTypes.ADD_NEW_ITEM,
  payload: item,
});

export const setDecreaseItemQuantity = item => ({
  type: CartActionTypes.DECREASE_CART_ITEM_QUANTITY,
  payload: item,
});

export const setIncreaseItemQuantity = item => ({
  type: CartActionTypes.INCREASE_CART_ITEM_QUANTITY,
  payload: item,
});

export const setRemoveItemFromCart = item => ({
  type: CartActionTypes.REMOVE_ITEM_FROM_CART,
  payload: item,
});
