import './App.css';
import { Card } from './components/Card';
import './components/Card.css'
import { useEffect, useState } from 'react'

const cardImages = [
  { src: '/img/blueberry.png', matched: false, },
  { src: '/img/chocolate.png', matched: false },
  { src: '/img/vanilla.png', matched: false },
  { src: '/img/strawberry.png', matched: false },
  { src: '/img/cinnamon.png', matched: false },
  { src: '/img/lemon.png', matched: false },
];

function App() {
  const [cards, setCards] = useState([]);
  const [turns, setTurns] = useState(0);
  const [choiceOne, setChoiceOne] = useState(null);
  const [choiceTwo, setChoiceTwo] = useState(null);
  const [disabled, setDisabled] = useState(false);
  // shuffle & duplicate cards 
  const shuffleCards = () => {
    const shuffledCards = [...cardImages, ...cardImages] // this creates the duplicate! so 6 pairs now!
      .sort(() => Math.random() - 0.5)// this sorts them to be randomized!
      .map((card) => ({ ...card, id: Math.random() })) // this assigns a random id between 0 and 1 ** did NOT remember this

    setCards(shuffledCards)
    setTurns(0)
  }

  const handleChoice = (card) => {
    // if choice one has a value, set the card to choiceTwo, if not then set it to choiceOne
    choiceOne ? setChoiceTwo(card) : setChoiceOne(card)
  }


  // the useEffect handles the comparing of card choices
  useEffect(() => {
    if (choiceOne && choiceTwo) { // need to have both choice one and two to even start the comparison
      setDisabled(true)
      if (choiceOne.src === choiceTwo.src) {
        setCards(prevCards => { // updating the card state. 
          return prevCards.map((card) => { // return new array of cards, with previousCards
            if (card.src === choiceOne.src) { // fire a function for each card and return the object we want to place in the new array 
              return { ...card, matched: true } // new object, with the appropriate change
            } else {
              return card
            }

          })
        })
        resetTurns() // reset the turn because the turn is over
      } else {
        setTimeout(() => resetTurns(), 1000) // reset the turn because the turn is over
        // need to add a timeout or else the second card doesn't show if they don't match
      }
    }
  }, [choiceOne, choiceTwo]) // this allows the useEffect to run when choices are updated. 
  // useEffect runs on mount and everytime the dependencies are changed


  // reset turns
  const resetTurns = () => {
    setChoiceOne(null)
    setChoiceTwo(null)
    setTurns(prevTurns => prevTurns + 1)
    setDisabled(false)
  }

  // start a game automatically 
  // isn't in other useEffect becuase we don't want to start a new game everytime a card choice is made!(the dependencies for other useEffect)
  useEffect(() => {
    shuffleCards()
    setChoiceOne(null) // reset for each new game just in case something was still selected!
    setChoiceTwo(null)
  }, [])


  return (
    <div className="App">
      <div className='navbar'>
        Hole in One
        <div className='sub-title'>Memory Game</div>
      </div>
      <button className='new-game-btn' onClick={shuffleCards}>New Game</button>
      <div className='card-grid'>
        {cards.map((card) => (
          <Card
            key={card.id}
            card={card}
            handleChoice={handleChoice}
            // three scenarios for flipped to be true
            // 1. if card is equal to choiceOne
            // 2. if card is equal to choiceTwo
            // 3. if the card is matched
            flipped={card === choiceOne || card === choiceTwo || card.matched}
            disabled={disabled}
          />
        ))}
      </div>
      <div className='turns'>Turns: {turns}</div>
    </div>
  );
}

export default App;


// eventually add the winning credits
/* and add a leveling up logic, where every game you win, the next round is harder (ie has more cards) 
  - include the level count below "new game" button*/