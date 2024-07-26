import './App.css';
import { useState } from 'react';


export default function App() {
  const [isHexCode, setIsHexCode] = useState(false)
  const [colorText, setColorText] = useState('')

  function handleSwitch() {
    /* this is the function that should switch the text in the button to either 'hexcode' or 'rgb' 
    AND it will display on the screen text to show the hexcode or rgb values */
    if (isHexCode) {
      setIsHexCode(false)
    } else {
      setIsHexCode(true)
    }

    generateRandomColor(!isHexCode)
  }


  function generateRandomColor(localIsHexCode) {
    // this is the function that should contain the if statement that either does the math for hexcode values or rgb randomizers

    if (localIsHexCode) {
      const hexValue = '#' + Math.floor(Math.random() * 16777215).toString(16);
      //document.getElementsByClassName("App")[0].style.backgroundColor = `${hexValue}`
      //document.getElementById('code').innerText = `${hexValue}`
      setColorText(hexValue)
    } else {
      const red = Math.floor(Math.random() * 255);
      const green = Math.floor(Math.random() * 255);
      const blue = Math.floor(Math.random() * 255);

      setColorText(`rgb(${red},${green},${blue})`)
    }

  }

  return (
    <div className="App" style={{ backgroundColor: colorText }}>
      <button onClick={() => generateRandomColor(isHexCode)}>Generate a Random Color</button>
      <button id='alter' onClick={handleSwitch}>Switch to {isHexCode ? 'RGB' : 'Hexcode'}</button>
      <h3 id="code">{colorText}</h3>
    </div>
  );
}

// random color math

// Math.floor(Math.random() * 255)

// when button is clicked, javascript should display a random number for each r b g value 

// have a div that the text changes dynamically 
// either to show the hex code, or to show the rgb


/* 
  when 'Generate a random color' button is clicked, this is where the logic & math should be done. --> in function uponClick()

  when 'switch to hexcode' button is clicked, this is where it should setHexcode
*/