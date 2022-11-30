import React from 'react'

const Home = () => {
  return (
    <>
      {/* Herobanner */}

      <div className='products-heading'>
        <h2>Best Selling Products</h2>
        <p>Cameras of many vriations</p>
      </div>

      <div className='products-container'>
        {['Prod 1', 'Prod2'].map((product) => product)}
      </div>

      {/* Footer */}
    </>
  )
}

export default Home
