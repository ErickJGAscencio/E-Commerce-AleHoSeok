import React from 'react'
import { useFetchProducts } from '../../hooks/useFetchProducts';
import ProductList from '../organisms/ProductList';
import HomePageTemplate from '../template/HomePageTemplate';

const HomePage = () => {
  return (
    <div>
      <HomePageTemplate />
    </div>
  );
}

export default HomePage