export const addItemToCart = (cartItems, itemToAdd) => {
  //   cartItems = Array.from(cartItems);
  const existingItem = cartItems.find(cartItem => cartItem.id === itemToAdd.id);
  //   console.log({ existingItem, cartItems });
  if (existingItem) {
    return cartItems.map(item =>
      item.id === itemToAdd.id ? { ...item, quantity: item.quantity + 1 } : item
    );
  }

  return [...cartItems, { ...itemToAdd, quantity: 1 }];
};
