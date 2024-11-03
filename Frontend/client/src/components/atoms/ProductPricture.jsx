import React from 'react'

function ProductPricture({imageUrl}) {
  return <img src={imageUrl} alt="Product" style={{ width: '150px', height: '150px' }} />;
}

export default ProductPricture