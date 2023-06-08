import { useState } from 'react';

const useCartItems = () => {

    const [cartItems, setCartItems] = useState([]);
    let updatedCartItems;
    const addToCart = (product) => {
        //revisa la cantidad existente del producto
        if (product.quantity > 0) {
        //confirma la existencia de este producto en el carrito
        let existingProduct = cartItems.find((item) => 
        item.id === product.id);

        if (existingProduct) {
            // Esta parte del código verifica si el producto ya existe en el carrito (existingProduct). 
            // Si existe, se realiza una comprobación adicional para determinar si se pueden agregar más 
            // unidades de ese producto al carrito.
            if (existingProduct.quantity < product.quantity) {
                // Si existingProduct.quantity (la cantidad del producto existente en el carrito) 
                // es menor que product.quantity (la cantidad del producto que se está intentando agregar), 
                // significa que aún hay espacio para agregar más unidades de ese producto al carrito.
            setCartItems((prevItems) =>
            prevItems.map((item) =>
                item.id === product.id
                ? { ...item, quantity: item.quantity + 1 }
                : item
            )
            );
        } else {
            console.log("No se pueden agregar más unidades de este producto al carrito");
        }
        } else {
        setCartItems((prevItems) => [...prevItems, { ...product, quantity: 1 }]);
        }
    } else {
        console.log("No hay stock disponible de este producto");
    }
    };

    const removeFromCart = (productId) => {
        //En esta parte del código, la función removeFromCart se encarga de eliminar un producto del carrito de compras.
        updatedCartItems = cartItems.filter((item) => item.id !== productId);
        setCartItems(updatedCartItems);
    };

    const updateQuantity = (productId, newQuantity) => {
        
        //En este código, la función updateQuantity se encarga de actualizar la cantidad de un producto en el carrito de compras.
        updatedCartItems = cartItems.map((item) => {
            if (item.id === productId) {
            if (newQuantity <= item.quantity) {
            return {
                // Si es menor o igual, se crea un nuevo objeto utilizando la sintaxis de propagación (...item) 
                // para copiar todas las propiedades del objeto original. 
                // Luego, se actualiza la propiedad quantity con el valor de newQuantity. 
                // Esto crea un nuevo objeto con la cantidad actualizada.
                ...item,
                // Cuando se utiliza ...item, se crea una copia superficial (shallow copy) 
                // del objeto item, lo que significa que se copian todas las propiedades y valores del objeto original en el nuevo objeto. 
                // Esto permite modificar únicamente la propiedad quantity mientras se mantiene intacto el resto de las propiedades.
                quantity: newQuantity,
            };
            } else {
            console.log("No se pueden pedir más unidades de este producto de las disponibles");
            return item;
            }
        }
        return item;
        });
        setCartItems(updatedCartItems);
    };


    const calculateTotal = () => {
    // La función calculateTotal se utiliza para calcular el total de la compra en el carrito. 
    // Recorre todos los elementos del carrito (cartItems) y multiplica el precio de cada elemento por su 
    // cantidad (item.precio * item.quantity). 
    // Luego, suma estos subtotales de cada elemento para obtener el total acumulado.
    let total = 0;
    cartItems.forEach((item) => {
        total += item.precio * item.quantity;
    });
    return total;
    };


    return { cartItems, addToCart, removeFromCart, updateQuantity, calculateTotal };
};

export default useCartItems;