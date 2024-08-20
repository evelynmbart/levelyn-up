import { useState } from 'react';
import './App.css';
import { Card } from './components/Card';

const cardImages = [
  { src: '/img/blueberry.png' },
  { src: '/img/cinnamon.png' },
  { src: '/img/chocolate.png' },
  { src: '/img/lemon.png' },
  { src: '/img/strawberry.png' },
  { src: '/img/vanilla.png' }
]

export default function App() {
  const [cards, setCards] = useState([]);
  const [turns, setTurns] = useState(0);

  //shuffle cards
  // 1. duplicate each card once
  // 2. randomize each card in the array
  // 3. give each a random ID
  const shuffleCards = () => {
    const shuffledCards = [...cardImages, ...cardImages] // this creates 12 total cards / duplicates the original cardImages array
      .sort(() => Math.random() - 0.5) // shuffles cards
      .map((card) => ({ ...card, id: Math.random() })) // gives a random Id

    setCards(shuffledCards) // shuffle cards
    setTurns(0); // setting turns to 0
  }
  console.log(cards, turns);


  return (
    <div className='App'>
      <div className="navbar">
        Glazed and Confused
        <div className='sub-title'>Memory Game</div>
      </div>
      <button className='new-game-btn' onClick={shuffleCards}>New Game</button>
      <Card cards={cards} />
    </div>
  )
}

