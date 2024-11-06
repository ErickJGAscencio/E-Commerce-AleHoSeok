import React from 'react';

function ProductNameLabel({ name }) {
  return (
    <div className='text-gray-700 text-sm font-small truncate' style={{ maxWidth: '100%' }}>
      {name}
    </div>
  );
}

export default ProductNameLabel;
