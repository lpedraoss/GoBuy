import  { useContext, } from 'react';
import CartContext from '../../../context/cart/cart_context';

const Cart = () => {
  const { cartItems, calculateTotal, removeFromCart, updateQuantity, updateStock } = useContext(CartContext);

  const handleRemoveFromCart = (productId) => {
    removeFromCart(productId);
  };

  const handleQuantityChange = (productId, newQuantity) => {
    updateQuantity(productId, newQuantity);
  };

  const handleBuy = () => {
    cartItems.forEach((item) => {
      updateStock(item.id, item.quantity); // Actualizar stock del producto
      if (item.quantity >= item.stock) {
        removeFromCart(item.id); // Eliminar producto si el stock llega a cero
      }
    });
  };

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
          <label
            type="number"
            value={item.quantity}
            onChange={(e) =>
              handleQuantityChange(item.id, parseInt(e.target.value))
            }
          />
        </div>
      ))}
      <h3>Total: {calculateTotal()}</h3>
      <button onClick={ handleBuy }>Comprar</button>
    </div>
  );
};

export default Cart;
