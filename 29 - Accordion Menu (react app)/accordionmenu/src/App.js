import './App.css';
import { useState } from 'react';



function MenuBar({ title, id }) {
  return (
    <div className="main" id={id}>{title}</div>
  )
}


// if menubar is clicked clicked, one more menu bar should display.
// this should toggle a isFoldedUp
// if isFoldedUp == true then change display to 'block'
// if isFoldedUp == false then change display to 'none'


export default function App() {
  return (
    <div className="App">
      <MenuBar title={"DOGS"} id={"dogs"} />
      <MenuBar title={"CATS"} id={"cats"} />
      <MenuBar title={"DUCKS"} id={"ducks"} />
      <MenuBar title={"TURTLES"} id={"turtles"} />
    </div>
  );
}

