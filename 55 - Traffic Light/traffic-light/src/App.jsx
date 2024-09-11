import { useState, useEffect } from "react";
import "./App.css";

/*
  a program that changes color from green to yellow to red on intervaled timeouts.

  it should include if statements
     if green is displaying, wait 3 seconds and change display to yellow
     if yellow is displaying, wait 3 seconds and change display to red
     if red is displaying, wait 5 seconds and change display to green

  this means there should be state for the current color and the useEffect will switch between the three colors.


*/

function App() {
  const [currentLight, setCurrentLight] = useState("red");

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentLight((prevLight) => {
        if (prevLight === "red") return "yellow";
        if (prevLight === "yellow") return "green";
        return "red";
      });
    }, 3000);

    return () => clearInterval(interval);
  }, []);
  return (
    <>
      <div className="light-box">
        <div
          className={`light red ${currentLight === "red" ? "active" : ""}`}
        ></div>
        <div
          className={`light yellow ${
            currentLight === "yellow" ? "active" : ""
          }`}
        ></div>
        <div
          className={`light green ${currentLight === "green" ? "active" : ""}`}
        ></div>
      </div>
    </>
  );
}

export default App;
