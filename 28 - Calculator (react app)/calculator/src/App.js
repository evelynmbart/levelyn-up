import './App.css';
import { useState } from 'react';


function Screen({ screenNumber }) {
  // this should display the NumberButton button that was clicked
  return (
    <p>{screenNumber}</p>
  )
}

function NumberButton({ num, screenNumber, setScreenNumber, isExpectingNewNumber, setIsExpectingNewNumber, setInvisibleNumber }) {

  function handleClick() {
    if (isExpectingNewNumber) {
      setInvisibleNumber(screenNumber)
      setScreenNumber(num)
      setIsExpectingNewNumber(false)
    } else {
      setScreenNumber(Number(String(screenNumber) + String(num)));
    }
  }

  return (
    <button className="button" onClick={handleClick}><div className='text'>{num}</div></button>
  )

}

function Operators({ operator, setSelectedOperator, selectedOperator, setInvisibleNumber, invisibleNumber, screenNumber, setScreenNumber, setIsExpectingNewNumber }) {
  function handleClick() {
    setSelectedOperator(operator)

    if (selectedOperator === null) {
      setInvisibleNumber(screenNumber)
      setIsExpectingNewNumber(true)
    } else {
      setInvisibleNumber(0)
      switch (selectedOperator) {
        case "+":
          setScreenNumber(invisibleNumber + screenNumber)
          break;
        case "-":
          setScreenNumber(invisibleNumber - screenNumber)
          break;
        case "*":
          setScreenNumber(invisibleNumber * screenNumber)
          break;
        case "/":
          setScreenNumber(invisibleNumber / screenNumber)
          break;
      }
      setIsExpectingNewNumber(true)
    }



  }
  return (
    <button className='operator' onClick={handleClick}>{operator}</button>
  )
}

function SpaceBar({ selectedOperator, invisibleNumber, setScreenNumber, setIsExpectingNewNumber, screenNumber, setInvisibleNumber }) {
  function handleClick() {
    setInvisibleNumber(0)
    switch (selectedOperator) {
      case "+":
        setScreenNumber(invisibleNumber + screenNumber)
        break;
      case "-":
        setScreenNumber(invisibleNumber - screenNumber)
        break;
      case "*":
        setScreenNumber(invisibleNumber * screenNumber)
        break;
      case "/":
        setScreenNumber(invisibleNumber / screenNumber)
        break;
    }
    console.log(invisibleNumber)
    console.log(screenNumber)


  }
  return (
    <button id='spaceBar' onClick={handleClick}>=</button>
  )
}

function App() {
  const [screenNumber, setScreenNumber] = useState(0);
  const [selectedOperator, setSelectedOperator] = useState(null);
  const [invisibleNumber, setInvisibleNumber] = useState(0);
  const [isExpectingNewNumber, setIsExpectingNewNumber] = useState(true);
  return (
    <div className="App">
      <div id='perimeter'>
        <div id='border'>
          <div id='window'><Screen screenNumber={screenNumber} /></div>
          <div id="solarCatiga"></div>
          <div className='action'>
            <div className='row'>
              <NumberButton num={7} screenNumber={screenNumber} setScreenNumber={setScreenNumber} isExpectingNewNumber={isExpectingNewNumber} setIsExpectingNewNumber={setIsExpectingNewNumber} setInvisibleNumber={setInvisibleNumber} />
              <NumberButton num={8} screenNumber={screenNumber} setScreenNumber={setScreenNumber} isExpectingNewNumber={isExpectingNewNumber} setIsExpectingNewNumber={setIsExpectingNewNumber} setInvisibleNumber={setInvisibleNumber} />
              <NumberButton num={9} screenNumber={screenNumber} setScreenNumber={setScreenNumber} isExpectingNewNumber={isExpectingNewNumber} setIsExpectingNewNumber={setIsExpectingNewNumber} setInvisibleNumber={setInvisibleNumber} />
              <Operators operator={"/"} setSelectedOperator={setSelectedOperator} setInvisibleNumber={setInvisibleNumber} setScreenNumber={setScreenNumber} screenNumber={screenNumber} invisibleNumber={invisibleNumber} selectedOperator={selectedOperator} setIsExpectingNewNumber={setIsExpectingNewNumber} />
            </div>
            <div className='row'>
              <NumberButton num={4} screenNumber={screenNumber} setScreenNumber={setScreenNumber} isExpectingNewNumber={isExpectingNewNumber} setIsExpectingNewNumber={setIsExpectingNewNumber} setInvisibleNumber={setInvisibleNumber} />
              <NumberButton num={5} screenNumber={screenNumber} setScreenNumber={setScreenNumber} isExpectingNewNumber={isExpectingNewNumber} setIsExpectingNewNumber={setIsExpectingNewNumber} setInvisibleNumber={setInvisibleNumber} />
              <NumberButton num={6} screenNumber={screenNumber} setScreenNumber={setScreenNumber} isExpectingNewNumber={isExpectingNewNumber} setIsExpectingNewNumber={setIsExpectingNewNumber} setInvisibleNumber={setInvisibleNumber} />
              <Operators operator={"*"} setSelectedOperator={setSelectedOperator} setInvisibleNumber={setInvisibleNumber} setScreenNumber={setScreenNumber} screenNumber={screenNumber} invisibleNumber={invisibleNumber} selectedOperator={selectedOperator} setIsExpectingNewNumber={setIsExpectingNewNumber} />
            </div>
            <div className='row'>
              <NumberButton num={1} screenNumber={screenNumber} setScreenNumber={setScreenNumber} isExpectingNewNumber={isExpectingNewNumber} setIsExpectingNewNumber={setIsExpectingNewNumber} setInvisibleNumber={setInvisibleNumber} />
              <NumberButton num={2} screenNumber={screenNumber} setScreenNumber={setScreenNumber} isExpectingNewNumber={isExpectingNewNumber} setIsExpectingNewNumber={setIsExpectingNewNumber} setInvisibleNumber={setInvisibleNumber} />
              <NumberButton num={3} screenNumber={screenNumber} setScreenNumber={setScreenNumber} isExpectingNewNumber={isExpectingNewNumber} setIsExpectingNewNumber={setIsExpectingNewNumber} setInvisibleNumber={setInvisibleNumber} />
              <Operators operator={"-"} setSelectedOperator={setSelectedOperator} setInvisibleNumber={setInvisibleNumber} setScreenNumber={setScreenNumber} screenNumber={screenNumber} invisibleNumber={invisibleNumber} selectedOperator={selectedOperator} setIsExpectingNewNumber={setIsExpectingNewNumber} />
            </div>
            <div className='row'>
              <NumberButton num={0} screenNumber={screenNumber} setScreenNumber={setScreenNumber} isExpectingNewNumber={isExpectingNewNumber} setIsExpectingNewNumber={setIsExpectingNewNumber} setInvisibleNumber={setInvisibleNumber} />
              <Operators operator={"+"} setSelectedOperator={setSelectedOperator} setInvisibleNumber={setInvisibleNumber} setScreenNumber={setScreenNumber} screenNumber={screenNumber} invisibleNumber={invisibleNumber} selectedOperator={selectedOperator} setIsExpectingNewNumber={setIsExpectingNewNumber} />
            </div>

          </div>
          <SpaceBar setScreenNumber={setScreenNumber} screenNumber={screenNumber} setInvisibleNumber={setInvisibleNumber} setIsExpectingNewNumber={setIsExpectingNewNumber} selectedOperator={selectedOperator} />
        </div>

      </div>
    </div>
  );
}

export default App;
