import React, { useEffect } from 'react'
import Header from '../organisms/Header'
import { useFetchProducts } from '../../hooks/useFetchProducts';

const HomePage   = () => {
  const { products, loading, error } = useFetchProducts();  // Custom Hook

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error loading products</div>;

  return (
    <div>
      <Header />
      <div>
        {/* {products} */}
      </div>
    </div>
  );
}

export default HomePage