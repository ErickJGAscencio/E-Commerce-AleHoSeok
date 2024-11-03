import React from 'react'
import ProductPricture from '../atoms/ProductPricture'
import ProductNameLabel from '../atoms/ProductNameLabel'
import ProductPriceLabel from '../atoms/ProductPriceLabel'
import Button from '../atoms/Button'

function ProductCard({ product }) {
  return (
    <div className="bg-white shadow-md rounded-xl overflow-hidden mx-auto my-4">
      <div className="max-w-xs p-2 flex flex-col justify-between">
        <ProductPricture imageUrl={'https://th.bing.com/th/id/R.e3734412b2059289c2705e9b9db2e740?rik=47GhGbLOKGuLyQ&pid=ImgRaw&r=0'} />{/* CAMBIAR IMAGEN */}
        <ProductNameLabel name={product.nombre_producto} />
        <ProductPriceLabel price={product.precio} />
        <div className="mt-2 flex justify-between">
          <Button label="Buy" className="bg-blue-500 text-white text-xs px-2 py-2 rounded hover:bg-blue-600" />
          <Button label="Add to cart" className="bg-green-500 text-white text-xs px-2 py-2 rounded hover:bg-green-600" />
        </div>
      </div>
    </div>
  );
}

export default ProductCard