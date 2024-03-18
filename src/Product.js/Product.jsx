// ProductList.js
import React from 'react';
import { useQuery } from 'react-query';

const fetchProducts = async () => {
  const response = await fetch('https://dummyjson.com/posts');
  const data = await response.json();
  console.log(data,"datacomming")
  return data;
};

const ProductList = () => {
  const { data: products, isLoading, isError } = useQuery('products', fetchProducts);
  console.log(products,"===<prducts")

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error fetching data</div>;

  return (
    <div>
      <h1>Product List</h1>
      <ul>
        {products?.posts.map(product => (
          <li key={product.id}>
            <h3>{product.title}</h3>
            <p>{product.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
