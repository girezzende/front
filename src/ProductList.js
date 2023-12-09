import React, { useState, useEffect } from 'react';
import ProductCard from './ProductCard';
import api from '../services/api';

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Chame a API para obter a lista de produtos
    api.get('/products').then((response) => {
      setProducts(response.data);
    });
  }, []);

  return (
    <div>
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductList;
