import { createSelector } from 'reselect';

export const selectCart = state => state.cart;

export const selectCartItems = createSelector([selectCart], cart => cart.cartItems);

export const selectCartHidden = createSelector([selectCart], cart => cart.toggleCartHidden);

export const selectCartItemsCount = createSelector([selectCartItems], cartItems =>
  cartItems.reduce((acc, item) => acc + item.quantity, 0)
);
