import  { useState } from 'react';
import CartContext from './carrito_context';
import useCartItems from '../hook/use_cart_items';

const CartProvider = ({ children }) => {

  const { cartItems, addToCart, removeFromCart, updateQuantity, calculateTotal } = useCartItems();

  return (
    <CartContext.Provider  value={{ cartItems, addToCart, removeFromCart, updateQuantity, calculateTotal }}>
      {children}
    </CartContext.Provider>
  );
};
export default CartProvider;