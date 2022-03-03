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
  // update the ratings array when star button is clicked
  const updateRatings = (newRating, i) => {
    let newRatings = [...ratings];
    newRatings[i].rating = newRating;
    setRatings(newRatings);
  }

  // create an array for the cart
  const [cart, setCart] = useState([]);
  // update cart when add to cart is clicked
  const updateCart = (product) => {
    let newCart = [...cart];
    newCart.push(product);
    setCart(newCart);
  }

  const deleteCartItem = (i) => {
    let newCart = [...cart];
    newCart.splice(i, 1);
    setCart(newCart);
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
            <button onClick={() => updateCart(product)}>Add to cart</button>
          </div>
  
          <div className='overlay'></div>
        </li>
      )
    }
    
  });
  
  const cartItems = cart.map((product, i) => {
    return (
      <li key={i}>
        <h3>{product.name}</h3>
        <p>{product.price}</p>
        <button onClick={() => deleteCartItem(i)} >Delete</button>
      </li>
    )
  })

  return (
    <>
      <ul className='products'>
        {productCards}
      </ul>

      {cart.length > 0 && <div className='cart-wrap'>
        <h2>Cart</h2>
        <ul className='cart'>
          {cartItems}
        </ul>
      </div>}
    </>
  );
}

export default App;
