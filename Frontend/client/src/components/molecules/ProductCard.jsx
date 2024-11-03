import React from 'react'
import ProductPricture from '../atoms/ProductPricture'
import ProductNameLabel from '../atoms/ProductNameLabel'
import ProductPriceLabel from '../atoms/ProductPriceLabel'
import Button from '../atoms/Button'

function ProductCard({key, product}) {
  return (
    <div key={key}>
      <ProductPricture />
      <ProductNameLabel name={product.nombre_producto} />
      <ProductPriceLabel price={product.precio} />
      <Button />
    </div>
  )
}

export default ProductCard