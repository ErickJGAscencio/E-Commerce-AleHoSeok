import React from 'react'

function ProductPricture({imageUrl}) {
  return <img src={imageUrl} alt="Product"
          style={{ width: 'auto', height: '150px' }}
          className='w-auto h-40 object-cover max-w-full' />;
}

export default ProductPricture