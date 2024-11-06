import React from 'react';
import ProductCard from '../molecules/ProductCard';
import Button from '../atoms/Button';

const ProductList = ({ products }) => {
  return (
    <div className='flex-col justify-center p-4'>
      <div className="
        grid grid-cols-2
        sm:grid-cols-3
        md:grid-cols-4
        lg:grid-cols-6
        xl:grid-cols-7
        gap-5 p-5">
        {products.map((product, index) => (
          <ProductCard key={index} product={product} />
        ))}
      </div>
      <Button label={"Ver mas"} className="bg-pink-500 text-white text-xs px-2 py-2 rounded hover:bg-pink-600" />
    </div>
  );
};

export default ProductList;
