import React, { Suspense } from 'react';
import BrandCarausel from '../../components/HeroSection/BrandCarausel';
import HeroCarausel from '../../components/HeroSection/HeroCarausel';
import ProductCard from '../../components/Cards/ProductCard';
import Loader from '../../helper/Loader';


const Home = () => {
  return( 
  <div>
      <HeroCarausel />
      <div className='text-4xl p-4 mb-3 font-bold text-gray-800 text-center shadow-md rounded-md'>Ours Brands</div>
      <BrandCarausel />
      <div className='text-4xl p-4 mb-3 font-bold text-gray-800 text-center shadow-md rounded-md'>Top Products</div>
      <ProductCard />
     
      
  </div>
  )
};

export default Home;
