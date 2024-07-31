import './App.css';
import './components/Card/Card.css'
import { formatNumberAsMoney } from './utils/formatter';
import { Card } from './components/Card/Card';
import { useState } from 'react';

const ITEMS = [
  {
    name: 'kittens',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMkGE0FSXnrEgNvgpGfkFjDJCus71ygcfJFA&s',
    cost: 11
  },
  {
    name: 'cat',
    image: 'https://www.alleycat.org/wp-content/uploads/2019/03/FELV-cat.jpg',
    cost: 15
  }
]

function App() {
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const addToCart = (item) => {
    console.log('iwasclicked')
  }

  return (
    <div>
      <div className='navbar'>
        Mr. Kiwi's Frutteria
        <button>View Shopping Cart</button>
      </div>
      <div className='cart-container'>
        <div className='cart'>
          <span className='item'></span>
          <span className='cost'></span>
        </div>
      </div>
      <div className='card-container'>
        {
          ITEMS.map((element) => {
            return <Card card={element} addtoCart={addToCart} />
          })
        }
      </div>
    </div>
  );
}

export default App;
