import './App.css';
import './components/Card/Card.css'
import { Card } from './components/Card/Card';
import { useState } from 'react';
import { formatNumberAsMoney } from './utils/formatter';

const ITEMS = [
  {
    name: 'grapes',
    image: 'https://www.kroger.com/product/images/xlarge/front/0000000004023',
    cost: 3.99
  },
  {
    name: 'plum',
    image: 'https://www.collinsdictionary.com/images/full/plum_119083816.jpg',
    cost: 1.99
  },
  {
    name: 'pear',
    image: 'https://cdn.mos.cms.futurecdn.net/jpbi7xXH22fAxKvrF4bzzd-1200-80.jpg',
    cost: 2.50
  }
]



// sum is the item.cost added up
// itemAmount = item.cost
//  sum += itemAmount


function App() {
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const openCart = () => {
    setIsCartOpen(!isCartOpen);
  }

  const addToCart = (item) => {
    setCart([...cart, item])
  }

  return (
    <>
      <div className='navbar'>
        Mr. Kiwi's Frutteria
        <button className='cart-button' onClick={openCart} >{isCartOpen ? "Hide" : "View"} Shopping Cart</button>
      </div>
      {isCartOpen &&
        <div className='cart'>
          {
            cart.map((item) => {
              return (
                <div className='cart-item'>
                  <span>{item.name}</span>
                  <span>{formatNumberAsMoney(item.cost)}</span>
                </div>
              )
            })

          }
          <hr />
          <div className='cart-item'>
            <span>TOTAL</span>
            {/* <span>{formatNumberAsMoney()}</span> */}
          </div>
        </div>
      }
      <div className='card-container'>
        {ITEMS.map((element) => { // i want the name, image, and cost to appear
          return (
            <Card item={element} addToCart={addToCart} />
          )
        })}
      </div>
    </>
  );
}

export default App;
