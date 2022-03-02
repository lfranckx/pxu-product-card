import React, { useState } from 'react';
import './App.scss';
import data from './data';
import { GrStar } from 'react-icons/gr';

function App() {
  
  const productCards = data.map((product, i) => {
    const index = i;
    return (
      <li className='card' key={i}>
        <div className='image-wrap'>
          <img src='images/tshirt.png' alt='black t-shirt' />
        </div>

        <div className='content-wrap'>
          <h3>{product.name}</h3>
          <p>{product.price}</p>
          <div className='star-wrap'>
            {[...Array(5)].map((star, i) => {
              return (
                <label key={i} >
                  <input 
                    type={"radio"} 
                    name='rating' 
                    value={i} 
                  />
                  <GrStar 
                    className='star' 
                    color={i < product.rating ? "#000" : "#cbcbcb"} 
                  />
                </label>
              )
            })}
          </div>
        </div>

        <div className='btn-wrap'>
          <button>Add to cart</button>
        </div>

        <div className='overlay'></div>
      </li>
    )
  }); 

  return (
    <>
      <ul className='products'>
        {productCards}
      </ul>
    </>
  );
}

export default App;
