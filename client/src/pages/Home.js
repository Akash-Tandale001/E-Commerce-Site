import React from 'react';
import BrandCarausel from '../components/BrandCarausel';
import HeroCarausel from '../components/HeroCarausel';

const Home = () => {
  return( 
  <div>
      <HeroCarausel />
      <div className='text-4xl p-4 mb-3 font-bold text-gray-800 text-center shadow-md rounded-md'>Ours Brands</div>
      <BrandCarausel />
  </div>
  )
};

export default Home;
