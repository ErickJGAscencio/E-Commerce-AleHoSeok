import React from 'react';
import ProductCard from '../molecules/ProductCard';

const ProductList = ({ products }) => {
  return (
    <div className="grid grid-cols-7 gap-10 p-5">
      {products.map((product, index) => (
        <ProductCard key={index} product={product} />
      ))}
    </div>
  );
};

export default ProductList;
