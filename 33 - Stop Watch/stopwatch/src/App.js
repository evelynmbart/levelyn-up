import './App.css';
import { useState, useEffect } from 'react';

function App() {
  const [time, setTime] = useState(0);
  const [running, setRunning] = useState(false);

  useEffect(() => {
    let interval;
    if (running) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 10);
      }, 10)
    } else if (!running) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [running]);

  return (
    <div className="App">
      <h1>StopWatch</h1>
      <div>
        <span>{("0" + Math.floor((time / 6000) % 60)).slice(-2)}:</span>
        <span>{("0" + Math.floor((time / 1000) % 60)).slice(-2)}:</span>
        <span>{("0" + Math.floor((time / 10) % 60)).slice(-2)}</span>
      </div>
      <div>
        {running ? (
          <button onClick={() => (setRunning(false))}>Stop</button>
        ) : (
          <button onClick={() => (setRunning(true))}>Start</button>
        )
        }
        <button onClick={() => (setTime(0))}>Reset</button>
      </div>

    </div >
  );
}

export default App;
