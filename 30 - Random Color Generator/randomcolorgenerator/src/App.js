import './App.css';
import { useState } from 'react';


export default function App() {
  const [randomColor, setRandomColor] = useState(null);
  function uponClick() {
    const red = Math.floor(Math.random() * 255);
    const blue = Math.floor(Math.random() * 255);
    const green = Math.floor(Math.random() * 255);

    //setRandomColor(`rgb(${red} ${blue} ${green})`)
    document.getElementsByClassName("App")[0].style.backgroundColor = `rgb(${red} ${blue} ${green})`
  }
  return (
    <div className="App">
      <button onClick={uponClick}>Generate a Random Color</button>
    </div>
  );
}

// random color math
// Math.floor(Math.random() * 255)

// when button is clicked, javascript should display a random number for each r b g value 