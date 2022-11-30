import React from 'react'

const Home = () => {
  return (
    <>
      {/* Herobanner */}

      <div>
        <h2>Best Selling Products</h2>
        <p>Cameras of many vriations</p>
      </div>

      <div>
        {['Prod 1', 'Prod2'].map((product) => product)}
      </div>

      {/* Footer */}
    </>
  )
}

export default Home
