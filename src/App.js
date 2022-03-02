import React, { useEffect, useState } from 'react';
import './App.scss';
import data from './data';
import { GrStar } from 'react-icons/gr';

function App() {
  const [ratings, setRatings] = useState({});

  useEffect(() => {
    setRatings(data.map((product, i) => {
      return { rating: product.rating };
    }))
  }, [])

  const updateRatings = (i, rating) => {
    console.log(`index: ${i}`, `rating: ${rating}`);
    let newRatings = [...ratings];
    newRatings[i] = {rating: rating};
    setRatings(newRatings);
  }

  const productCards = data.map((product, i) => {
    // save object index of product to update rating
    const objIndex = i;

    if (ratings.length > 0) {
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
                const starRating = i + 1;
                return (
                  <label key={i} >
                    <input 
                      type="radio" 
                      name='rating' 
                      value={starRating} 
                      onClick={() => updateRatings(objIndex, starRating)}
                    />
                    <GrStar 
                      className='star' 
                      color={starRating <= ratings[objIndex].rating ? "#000" : "#cbcbcb"} 
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
    }
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
