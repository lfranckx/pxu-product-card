import React, { useEffect, useState } from 'react';
import './App.scss';
import data from './data';
import { GrStar } from 'react-icons/gr';

function App() {
  // create an array of objects for ratings
  const [ratings, setRatings] = useState([]);
  // set array of ratings from the data
  useEffect(() => {
    setRatings(data);
  }, []);

  // update the ratings object when star button is clicked
  const updateRatings = (newRating, i) => {
    let newRatings = [...ratings];
    newRatings[i].rating = newRating;
    setRatings(newRatings);
  }

  const productCards = data.map((product, i) => {
    // save object index to use in star map
    const objIndex = i;

    if (ratings.length > 0) {
      return (
        <li className='card' key={i}>
          <div className='image-wrap'>
            <img src={product.img} alt='t-shirt' />
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
                      onClick={() => updateRatings(starRating, objIndex)}
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
