import  { useContext } from 'react';
import CartContext from '../../../context/cart/cart_context';
import { useNavigate } from 'react-router-dom';
import Cart from './cart';


const ProductList = () => {
    const { addToCart } = useContext(CartContext);

    // esto es un ejemplo de cuando traigo del api
    const jsonProduct = '[{"id": 1, "name": "Producto 1", "price": 10, "image": "/src/assets/img/sombrero.webp"}, {"id": 2, "name": "Producto 2", "price": 20, "image": "/src/assets/img/carro.jpeg"}, {"id": 3, "name": "Producto 3", "price": 30, "image": "/src/assets/img/cicla.webp"}]';

    //lo transformo en un array de objetos
    const products = JSON.parse(jsonProduct);

    const handleAddToCart = (productSelected) => {
        addToCart(productSelected);
    }
    const route = useNavigate();
    const handleGoCart = () => {
      route('/cart');
    }
    return (

      <>
        
        <article>
          <button onClick={handleGoCart} > ir a carrito</button>
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
          <h2>---------------------carrito de compras ---------------------</h2>
          <Cart></Cart>
        </article>
      </>
        

    );
}

export default ProductList;
