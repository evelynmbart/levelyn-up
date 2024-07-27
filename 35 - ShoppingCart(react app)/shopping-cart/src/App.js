import './App.css';
import Card from './components/Card/Card';
import { useState } from 'react';
import { formatNumberAsMoney } from './utils/formatters';

const ITEMS = [
  {
    name: 'Banana',
    cost: 5,
    image: 'https://www.kroger.com/product/images/xlarge/back/0000000004011'
  },
  {
    name: 'Apple',
    cost: 2.30,
    image: "https://www.shutterstock.com/image-photo/funny-shaped-red-apple-butt-260nw-987210.jpg"
  }
]

function App() {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cart, setCart] = useState([]);
  const handleCartButtonClick = () => {
    setIsCartOpen(!isCartOpen);
  }
  return (
    <div>
      <div className='navbar'>
        <h1>Mr. Kiwi&apos;s Frutta</h1>
        <button className='cart-button' onClick={handleCartButtonClick}>{isCartOpen ? "Hide" : "View"} Shopping Cart</button>
      </div>
      {isCartOpen && <div className='cart'>
        {cart.map((element) => {
          return (
            <div className='cart-item'>
              <span>{element.name}</span>
              <span>{formatNumberAsMoney(element.cost)}</span>
            </div>
          )
        })}
      </div>}
      <div className='card-container'>
        {ITEMS.map((element) => {
          return <Card card={element} cart={cart} setCart={setCart} />
        })}
      </div>
    </div >
  );
}

export default App;
