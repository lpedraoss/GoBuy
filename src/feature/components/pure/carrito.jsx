import  { useContext, } from 'react';
import CartContext from '../../context/carrito/carrito_context';

const Cart = () => {
  const { cartItems, calculateTotal, removeFromCart, updateQuantity,} = useContext(CartContext);

  const handleRemoveFromCart = (productId) => {
    removeFromCart(productId);
  };



  const handleBuy = () => {
    cartItems.forEach((item) => {
      updateQuantity(item.id, item.quantity); // Actualizar la cantidad del producto
    });
    cartItems.forEach((item) => {
      if (item.quantity <= 0) {
        removeFromCart(item.id); // Eliminar producto si la cantidad llega a cero
      }
    });
  };
  return (
  
      <ul id="carrito">

        
      
      {cartItems.map((item) => (

        <li key={item.id}>

          <h2>{item.nombre}</h2>
          <img className="img-producto" src={item.imagen} alt={item.nombre} />
          <span className="precio">Precio: {item.precio}</span>
          <span className="cantidad">Cantidad: {item.quantity}</span>
          <button className="agregar-carrito" onClick={() => handleRemoveFromCart(item.id)}> Quitar del carrito </button>
          
        </li>
      ))}
      <h3>Total: {calculateTotal()}</h3>

      <button className="agregar-carrito" onClick={ handleBuy }>Comprar</button>
</ul>
  );
};

export default Cart;
