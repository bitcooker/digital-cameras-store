import React from 'react';

import { Product, FooterBanner, HeroBanner } from '../components';

const Home = () => {
  return (
    <>
      <HeroBanner />

      <div className='products-heading'>
        <h2>Best Selling Products</h2>
        <p>Cameras of many vriations</p>
      </div>

      <div className='products-container'>
        {['Prod 1', 'Prod2'].map((product) => product)}
      </div>

      <FooterBanner />
    </>
  )
}

export default Home
