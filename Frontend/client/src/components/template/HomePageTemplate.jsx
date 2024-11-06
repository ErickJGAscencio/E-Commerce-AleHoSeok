import React from 'react'
import { useFetchProducts } from '../../hooks/useFetchProducts';
import ProductList from '../organisms/ProductList';
import Footer from '../organisms/Footer';
import Carrousel from '../organisms/Carrousel';
import Header from '../organisms/Header';

const HomePageTemplate = () => {
  const { products, loading, error } = useFetchProducts();  // Custom Hook

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error loading products</div>;

  return (
    <div>
      <Header />
      <Carrousel />
      <h1 className='flex justify-center text-5xl p-5 text-purple-500'>Nuestros productos son ¡UNICOS!</h1>
      <ProductList products={products} />
      <Footer />
    </div>
  );
}

export default HomePageTemplate