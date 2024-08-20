import './App.css';
import { Card } from './components/Card';
import './components/Card.css'
import { useState } from 'react'

const cardImages = [
  { src: '/img/blueberry.png' },
  { src: '/img/chocolate.png' },
  { src: '/img/vanilla.png' },
  { src: '/img/strawberry.png' },
  { src: '/img/cinnamon.png' },
  { src: '/img/lemon.png' },
];

function App() {
  const [cards, setCards] = useState([]);
  const [turns, setTurns] = useState(0);

  // shuffle & duplicate cards 
  const shuffleCards = () => {
    const shuffledCards = [...cardImages, ...cardImages] // this creates the duplicate! so 6 pairs now!
      .sort(() => Math.random() - 0.5)// this sorts them to be randomized!
      .map((card) => ({ ...card, id: Math.random() })) // this assigns a random id between 0 and 1 ** did NOT remember this

    setCards(shuffledCards)
    setTurns(0)
  }
  console.log(cards, turns)

  return (
    <div className="App">
      <div className='navbar'>
        Glazed and Confused
        <div className='sub-title'>Memory Game</div>
      </div>
      <button className='new-game-btn' onClick={shuffleCards}>New Game</button>
      <div className='card-grid'>
        {cards.map((card) => (
          <Card key={card.id} card={card} />
        ))}
      </div>
    </div>
  );
}

export default App;
