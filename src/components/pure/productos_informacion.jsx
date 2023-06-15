
import React, { useContext, useEffect, useState } from "react";

import Cart from './carrito';

import CartContext from "../../feature/cart/context/carrito_context";
import UseDataProduct from "../../data/product/use_data_product";


const Informacion_producto = () => {

  const { addToCart } = useContext(CartContext);
  const { productos } = UseDataProduct();

  const [productosActualizados, setProductosActualizados] = useState([]);

  useEffect(() => {
    setProductosActualizados(productos);
  }, [productos]);

  if (productosActualizados.length === 0) {
    return <h1>NO HAY DATOS</h1>;
  }

  const handleAddToCart = (productSelected) => {
    const updatedProduct = { ...productSelected, quantityToBuy: 1 };
    addToCart(updatedProduct);
  };

  return (
    <article id="contenedor_producto">
      <ul id="productos">
        {productosActualizados.map((dato) => (
          <li key={dato.id}>
            <h2>{dato.nombre}</h2>
            <img className="img-producto" src={dato.imagen} alt={dato.nombre} />
            <p className="descripcion">{dato.descripcion}</p>
            <span className="precio"> $ {dato.precio}</span>
            <button className="agregar-carrito" onClick={() => handleAddToCart(dato)}>Agregar al carrito</button>
          </li>
        ))}
      </ul>
      <Cart />
    </article>
  );
};

export default Informacion_producto;
