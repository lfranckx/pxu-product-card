import './App.scss';
import data from './data';

function App() {
  const productCards = data.map((product, i) => {
    return (
      <li className='card' key={i}>
        <div className='image-wrap'>
          <img src='images/tshirt.png' alt='black t-shirt' />
        </div>

        <div className='content-wrap'>
          <h3>{product.name}</h3>
          <p>{product.price}</p>
          <p>{product.rating}</p>
        </div>
        
        <div className='btn-wrap'>
          <button>Add to cart</button>
        </div>
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
