
import React, { useContext } from "react";

import Cart from './carrito';

import CartContext from "../../feature/cart/context/carrito_context";
import UseDataProduct from "../../data/product/use_data_product";

const Informacion_producto = () => {
  

  const { addToCart } = useContext(CartContext);
  const { productos } = UseDataProduct();
  
  if (productos.length === 0) {
    return <h1>NO HAY DATOS</h1>;
  }

  const handleAddToCart = (productSelected) => {
    addToCart(productSelected);
  };

  return (
  <article id="contenedor_producto">
    <ul id="productos">
      {productos.map((dato) => (
        <li key={dato.id}>
          <h2>{dato.nombre}</h2>
          <img className="img-producto" src={dato.imagen} alt={dato.nombre} />
          <p className="descripcion">{dato.descripcion}</p>
          <span className="precio"> $ {dato.precio}</span>
          <button className="agregar-carrito" onClick={() => handleAddToCart(dato)} > Agregar al carrito </button>
        </li>
      ))}
    </ul>

<Cart/>

</article>
  );
};

export default Informacion_producto;
