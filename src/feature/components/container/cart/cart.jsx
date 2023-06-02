import  { useContext } from 'react';
import CartContext from '../../../context/cart/cart_context';

const Cart = () => {
    const { cartItems, 
            calculateTotal, 
            removeFromCart, 
            updateQuantity } = useContext(CartContext);
    const handleRemoveFromCart = (productId)=>{
        removeFromCart(productId);
    }
    const handleQuantityChange = ( productId, newQuantity ) => {
        updateQuantity( productId, newQuantity );
    }
    return (
        <div>
            {cartItems.map((item) => (
            <div key={item.id}>
                <h3>{item.name}</h3>
                <p>Precio: {item.price}</p>
                <img src={item.image} alt={item.name} />
                <p>Cantidad: {item.quantity}</p>
                <button onClick={() => handleRemoveFromCart(item.id)}>
                Quitar del carrito
                </button>
                <input
                type="number"
                value={item.quantity}
                onChange={(e) =>
                    handleQuantityChange(item.id, parseInt(e.target.value))
                }
                />
            </div>
            ))}
            <h3>Total: {calculateTotal()}</h3>
        </div>
    );
}

export default Cart;
