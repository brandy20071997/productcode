// AddProduct.js
import React, { useState } from 'react';
import { useMutation, useQueryClient } from 'react-query';

const AddProduct = () => {
  const [product, setProduct] = useState({ title: '', body: '' });
  const queryClient = useQueryClient();
  console.log(product,"productdetail")

  console.log(product)

  const addNewProduct = async () => {
    try {
      await fetch('https://dummyjson.com/products/add', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(product),
      });

      queryClient.invalidateQueries('products');
      setProduct({ title: '', body: '' });
      console.log("Product added successfully");
    } catch (error) {
      console.error("Error adding product:", error);
    }
  };

  return (
    <div>
      <h2>Add New Product</h2>
      <input
        type="text"
        placeholder="Product Title"
        value={product.title}
        onChange={e => setProduct({ ...product, title: e.target.value })}
      />
      <textarea
        placeholder="Product Description"
        value={product.body}
        onChange={e => setProduct({ ...product, body: e.target.value })}
      />
      <button onClick={addNewProduct}>Add Product</button>
    </div>
  );
};

export default AddProduct;
