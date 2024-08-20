import { useEffect, useState } from 'react';
import './App.css';
import './components/Card.css'
import { Card } from './components/Card';

const cardImages = [
  { src: '/img/blueberry.png', matched: false },
  { src: '/img/cinnamon.png', matched: false },
  { src: '/img/chocolate.png', matched: false },
  { src: '/img/lemon.png', matched: false },
  { src: '/img/strawberry.png', matched: false },
  { src: '/img/vanilla.png', matched: false }
]

export default function App() {
  const [cards, setCards] = useState([]);
  const [turns, setTurns] = useState(0);
  const [choiceOne, setChoiceOne] = useState(null); // these update the user's choice of card. 
  const [choiceTwo, setChoiceTwo] = useState(null); //first is set to choiceOne, second pick is set to choiceTwo
  const [disabled, setDisabled] = useState(false);


  //shuffle cards
  // 1. duplicate each card once
  // 2. randomize each card in the array
  // 3. give each a random ID
  const shuffleCards = () => {
    const shuffledCards = [...cardImages, ...cardImages] // this creates 12 total cards / duplicates the original cardImages array
      .sort(() => Math.random() - 0.5) // shuffles cards
      .map((card) => ({ ...card, id: Math.random() })) // gives a random Id

    setChoiceOne(null)
    setChoiceTwo(null)
    setCards(shuffledCards) // shuffle cards
    setTurns(0); // setting turns to 0
  }

  // handle a choice
  const handleChoice = (card) => { // if choiceOne doesn't have a value, setChoiceOne. if choiceOne does have a value, setChoiceTwo!
/* ternary */ choiceOne ? setChoiceTwo(card) : setChoiceOne(card)
  }

  // compare 2 selected cards
  useEffect(() => {

    if (choiceOne && choiceTwo) { // run the useEffect and do a comparison only when both choices are selected
      setDisabled(true)

      if (choiceOne.src === choiceTwo.src) {
        setCards(prevCards => {
          return prevCards.map((card) => {
            if (card.src === choiceOne.src) {
              return { ...card, matched: true }
            } else {
              return card
            }
          })
        })
        resetTurn();
      } else {
        setTimeout(() => resetTurn(), 1000)
      }
    }
  }, [choiceOne, choiceTwo])

  // reset choices and increase turns
  const resetTurn = () => {
    setChoiceOne(null)
    setChoiceTwo(null)
    setTurns(prevTurns => prevTurns + 1)
    setDisabled(false)
  }

  // start a new game automatically
  useEffect(() => {
    shuffleCards()
  }, [])

  return (
    <div className='App'>
      <div className="navbar">
        Glazed and Confused
        <div className='sub-title'>Memory Game</div>
      </div>
      <button className='new-game-btn' onClick={shuffleCards}>New Game</button>
      <div className='card-grid'>
        {/*mapping through each card instead of copying and having messy code. 
        this will return each card + image of donut and display them on the screen (after css) */}
        {cards.map((card) => (
          <Card
            key={card.id}
            card={card}
            handleChoice={handleChoice}
            flipped={card === choiceOne || card === choiceTwo || card.matched}
            disabled={disabled}
          />
        ))}
      </div>
      <div className='turns'>
        Turns: {turns}
      </div>
    </div>
  )
}

