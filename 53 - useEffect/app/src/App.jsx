import { useEffect, useState } from "react";
import axios from "axios";

import "./App.css";

const URL = "http://localhost:8000/cat-fact";

function App() {
  const [fact, setFact] = useState("");

  useEffect(() => {
    const func = async () => {
      const resp = await axios.get(URL);
      const otherCode = await response.wait();
    };
  }, []);

  return (
    <>
      <div>Hello world!</div>
      <h1>{fact}</h1>
      <button onClick={getAndSetFact}>Get new fact</button>
    </>
  );
}

export default App;
