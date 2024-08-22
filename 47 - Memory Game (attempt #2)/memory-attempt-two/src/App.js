import './App.css';
import { useState } from 'react'
import './components/Card.css'
import { Card } from './components/Card';

const cardImages = [
  { src: '/img/blueberry.png' },
  { src: '/img/chocolate.png' },
  { src: '/img/cinnamon.png' },
  { src: '/img/lemon.png' },
  { src: '/img/strawberry.png' },
  { src: '/img/vanilla.png' }
]

function App() {
  const [cards, setCards] = useState([])
  const [turns, setTurns] = useState(0)

  //duplicate cards
  const shuffleCards = () => {
    const shuffledCards = [...cardImages, ...cardImages]
      .sort(() => Math.random() - 0.5)
      .map((card) => ({ ...card, id: Math.random() }))

    setCards(shuffledCards)
    setTurns(0)
  }

  return (
    <div className="App">
      <div className="navbar">
        Hole in One
        <div className="sub-title">Memory Game</div>
      </div>
      <button className='new-game-btn' onClick={shuffleCards}>New Game</button>
      <div className="card-grid">
        {cards.map((card) => {
          <Card
            key={card.id}
            card={card}
          />
        })}
      </div>
      <div className='turns'>Turns: {turns}</div>
    </div>
  );
}

export default App;
