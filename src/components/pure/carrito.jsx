import  { useContext, useEffect, useState, } from 'react';
import CartContext from '../../feature/cart/context/carrito_context';
import UseUpdateProduct from '../../feature/product/hook/use_update_product';
import UseDataProduct from '../../data/product/use_data_product';


const Cart = () => {
  const { cartItems, calculateTotal, removeFromCart, updateQuantity } = useContext(CartContext);
 
  const { updateProduct } = UseUpdateProduct();
  const [isLoading, setIsLoading] = useState(false); 
  
  const handleRemoveFromCart = (productId) => {
    removeFromCart(productId);
  };

  const handleBuy = async () => {
    try {
      setIsLoading(true);
      await Promise.all(
        cartItems.map(async (item) => {
          await updateProduct(item.id, { quantity: item.quantity }); // Actualizar la cantidad del producto en el API
          removeFromCart(item.id);
        })
      );
     
      setIsLoading(false);
    } catch (error) {
      console.error('Error al comprar:', error);
      setIsLoading(false);
    }
  };

  return (
    <>
      <ul id="carrito">
        {cartItems.map((item) => (
          <li key={item.id}>
            <h2>{item.nombre}</h2>
            <img className="img-producto" src={item.imagen} alt={item.nombre} />
            <span className="precio">Precio: {item.precio}</span>
            <span className="cantidad">Cantidad: {item.quantity}</span>
            <button className="agregar-carrito" onClick={() => handleRemoveFromCart(item.id)}>
              Quitar del carrito
            </button>
          </li>
        ))}
        <h3>Total: {calculateTotal()}</h3>
        <button className="agregar-carrito" onClick={ handleBuy }>
          Comprar
        </button>
      </ul>
    </>
  );
};


export default Cart;
