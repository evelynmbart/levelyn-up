import './App.css';
import { useEffect, useMemo, useState } from 'react'
import './components/Card.css'
import { Card } from './components/Card';

const cardImages = [
  { src: '/img/blueberry.png', matched: false },
  { src: '/img/chocolate.png', matched: false },
  { src: '/img/purples.png', matched: false },
  { src: '/img/lemon.png', matched: false },
  { src: '/img/strawberry.png', matched: false },
  { src: '/img/vanilla.png', matched: false }
]

function App() {
  const [cards, setCards] = useState([]);
  const [turns, setTurns] = useState(0);
  const [choiceOne, setChoiceOne] = useState(null);
  const [choiceTwo, setChoiceTwo] = useState(null);
  const [disabled, setDisabled] = useState(false);
  /* disabled should be set to false initally. 
  it gets switched to true when a choiceONE and choiceTWO are both valid.
  it gets switched back to false in reset Turns
  */

  //duplicate cards
  const shuffleCards = () => {
    const shuffledCards = [...cardImages, ...cardImages]
      .sort(() => Math.random() - 0.5)
      .map((card) => ({ ...card, id: Math.random() }))



    setCards(shuffledCards)
    setCards((prev) => {
      return shuffledCards
    })
    setTurns(0)
  }
  console.log(cards)

  const handleChoice = (card) => { // if choiceOne value is null, set choice one to (chosen) card. if choiceone value isn't null, setChoice TWo to (chosen) card
    choiceOne ? setChoiceTwo(card) : setChoiceOne(card)
  }


  //compare the cards
  // create a new match property set to false, that when the card.src matches, it changes it to true
  useEffect(() => {
    if (choiceOne && choiceTwo) {
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
        resetTurns();
      } else {
        setTimeout(() => resetTurns(), 1000)
      }
    }
  }, [choiceOne, choiceTwo]) // so it fires on each choice change

  const resetTurns = () => {
    setChoiceOne(null)
    setChoiceTwo(null)
    //setTurns(prevTurns => prevTurns + 1)
    setTurns(turns + 1)
    setDisabled(false)
  }

  // start a game automatically

  return (
    <div className="App">
      <div className="navbar">
        Hole in One
        <div className="sub-title">Memory Game</div>
      </div>
      <button className='new-game-btn' onClick={shuffleCards}>New Game</button>
      <div className="card-grid">
        {cards.map((card) => {
          return <Card
            key={card.id}
            card={card}
            handleChoice={handleChoice}
            flipped={card === choiceOne || card === choiceTwo || card.matched}
            // ask when should the cards be flipped? - choice one, two and if they are matched!
            disabled={disabled}
          />
        })}
      </div>
      <div className='turns'>Turns: {turns}</div>
    </div>
  );
}

export default App;