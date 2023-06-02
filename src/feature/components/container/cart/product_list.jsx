import  { useContext } from 'react';
import CartContext from '../../../context/cart/cart_context';
import { useNavigate } from 'react-router-dom';
import Cart from './cart';

const ProductList = () => {
  const { addToCart } = useContext(CartContext);

  // Esto es un ejemplo de cuando traigo del API
  const jsonProduct =
    '[{"id": 1, "name": "Producto 1", "price": 10, "image": "/src/assets/img/sombrero.webp", "quantity": 5}, {"id": 2, "name": "Producto 2", "price": 20, "image": "/src/assets/img/carro.jpeg", "quantity": 10}, {"id": 3, "name": "Producto 3", "price": 30, "image": "/src/assets/img/cicla.webp", "quantity": 3}]';

  // Lo transformo en un array de objetos
  const products = JSON.parse(jsonProduct);

  const handleAddToCart = (productSelected) => {
    addToCart(productSelected);
  };

  const route = useNavigate();
  const handleGoCart = () => {
    route('/cart');
  };

  return (
    <>
      <article>
        <button onClick={handleGoCart}>Ir al carrito</button>
        {products.map((product) => (
          <section key={product.id}>
            <h3>{product.name}</h3>
            <p>Precio: {product.price}</p>
            <img src={product.image} alt={product.name} />
            <button onClick={() => handleAddToCart(product)}>
              Agregar al carrito
            </button>
          </section>
        ))}
        <h2>--------------------- Carrito de compras ---------------------</h2>
        <Cart />
      </article>
    </>
  );
};
export default ProductList;
