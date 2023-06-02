import  { useState } from 'react';
import CartContext from './cart_context';

const CartProvider = ({children}) => {
    const [cartItems,setCartItems] = useState([]);
     // Agrega un producto al carrito
    const addToCart = ( product ) => {
        setCartItems([...cartItems, product]);
    }
    const removeFromCart = ( productId ) => {
        //filtra los elementos del carrito para eliminar el producto con el productId 
        const updatedCartItems = cartItems.filter(
            (item) => item.id !== productId
        );
        setCartItems(updatedCartItems);
    }
    //actualiza la cantidad de un producto en el carrito
    const updateQuantity = (productId, newQuantity) => {
        const updatedCartItems = cartItems.map(
            (item) => {
                if(item.id === productId){
                    return {
                        ...item, quantity: newQuantity
                    }
                }
                return item;
            }
        )
        setCartItems(updatedCartItems);
    }
    // Calcula el total de la compra
    const calculateTotal = () => {
        let total = 0;
        cartItems.forEach((item)=>{
            total += item.price * item.quantity; 
        });
        return total;
    }
    return (
        <CartContext.Provider value={{cartItems, addToCart, removeFromCart, updateQuantity, calculateTotal}} >
            {children}
        </CartContext.Provider>
    );
}

export default CartProvider;
