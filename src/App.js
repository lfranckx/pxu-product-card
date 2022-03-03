import React, { useEffect, useState } from 'react';
import './App.scss';
import data from './data';
import { GrStar } from 'react-icons/gr';

function App() {
  // create array for ratings
  const [ratings, setRatings] = useState([]);

  useEffect(() => {
    setRatings(data);
  }, [])

  // update ratings when star is clicked
  const updateRatings = (newRating, index) => {
    let newRatings = [...ratings];
    newRatings[index].rating = newRating;
    setRatings(newRatings);
  }

  // create array for cart 
  const [cart, setCart] = useState([]);

  // add item to cart when button is clicked
  const addToCart = (product) => {
    let newCart = [...cart];
    newCart.push(product);
    setCart(newCart);
  }

  const deleteFromCart = (i) => {
    let newCart = [...cart];
    newCart.splice(i, 1);
    setCart(newCart);
  }

  const productCards = data.map((product, i) => {
    // save product index to use for star rating
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
            <button onClick={() => addToCart(product)}>Add to cart</button>
          </div>
  
          <div className='overlay'></div>
        </li>
      )
    }
  });

  const cartItems = cart.map((product, i) => {
    return (
      <li className='item' key={i}>
        <h3>{product.name}</h3>
        <p>{product.price}</p>
        <button onClick={() => deleteFromCart(i)}>Delete</button>
      </li>
    )
  })

  return (
    <>
      <ul className='products'>
        {productCards}
      </ul>

      {cartItems.length > 0 && <ul className='cart'>
        {cartItems}
      </ul>}
    </>
  );
}

export default App;