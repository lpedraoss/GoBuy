
import UseDataProduct from '../../../data/product/use_data_product';

const UseUpdateProduct = () => {
    const { productApi } = UseDataProduct();
    const updateProduct = async (productId, updatedData) => {
        try {
          const response = await fetch(`${productApi}/${productId}`, {
            method: 'PUT',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(updatedData),

          });
          console.log('compra realizada');
          if (!response.ok) {
            throw new Error('Error al actualizar el producto en la API');
          }
        } catch (error) {
          console.error(error);
        }
      };

    return { updateProduct };
}

export default UseUpdateProduct;
