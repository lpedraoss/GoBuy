import  { useState } from 'react';
import CarritoContext from './carrito_context';
import useCartItems from '../hook/use_cart_items';

const CartProvider = ({ children }) => {

  const actionProducts = useCartItems();

  return (
    <CarritoContext.Provider  value={actionProducts}>
      {children}
    </CarritoContext.Provider>
  );
};
export default CartProvider;