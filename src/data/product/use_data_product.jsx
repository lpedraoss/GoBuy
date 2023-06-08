import  { useEffect, useState } from 'react';
const UseDataProduct = () => {
    const [productos, setProductos] = useState([]);
    const productApi = "https://646d4d739c677e232189e51a.mockapi.io/product";
    //const productApi = "/src/common/datos_producto.json"
    useEffect(() => {
      fetchData(productApi);
    }, []);
  
    const fetchData = async (url) => {
      try {
        const response = await fetch(url);
        const jsonData = await response.json();
        const product = jsonData;
        setProductos(product);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
  
    return { productos };
  };
  

export default UseDataProduct;
