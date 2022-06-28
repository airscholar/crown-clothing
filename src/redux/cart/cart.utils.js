export const addItemToCart = (cartItems, itemToAdd) => {
  const existingItem = cartItems.find(cartItem => cartItem.id === itemToAdd.id);
  if (existingItem) {
    return cartItems.map(item =>
      item.id === itemToAdd.id ? { ...item, quantity: item.quantity + 1 } : item
    );
  }

  return [...cartItems, { ...itemToAdd, quantity: 1 }];
};

export const IncDecCartItemQuantity = (cartItems, item, type) => {
  console.log({ cartItems, item });
  const existingItem = cartItems.find(cartItem => cartItem.id === item.id);

  switch (type) {
    case 'inc':
      existingItem.quantity += 1;
      break;
    case 'dec':
      if (existingItem.quantity <= 1) {
        cartItems = removeItemFromCart(cartItems, existingItem);
      }
      existingItem.quantity = existingItem.quantity - 1;
      break;
    default:
      break;
  }

  return cartItems.map(cartItem =>
    cartItem.id === existingItem.id ? { ...existingItem } : cartItem
  );
};

export const removeItemFromCart = (cartItems, item) =>
  cartItems.filter(cartItem => cartItem.id !== item.id);
