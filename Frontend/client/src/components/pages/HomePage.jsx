import React from 'react'
import Header from '../organisms/Header'
import { useFetchProducts } from '../../hooks/useFetchProducts';
import ProductList from '../organisms/ProductList';

const HomePage   = () => {
  const { products, loading, error } = useFetchProducts();  // Custom Hook

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error loading products</div>;

  return (
    <div>
      <Header />
      <ProductList products={ products } />
    </div>
  );
}

export default HomePage