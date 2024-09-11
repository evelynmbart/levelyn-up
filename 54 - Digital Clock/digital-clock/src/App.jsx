import { useState } from "react";
import "./App.css";

function App() {
  const [name, setName] = useState("");
  const [userInput, setUserInput] = useState("");

  const handleChange = (e) => {
    setUserInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setName(userInput);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>
          Please input first name:
          <input
            type="text"
            name="name"
            value={userInput}
            placeholder="rebecca"
            onChange={handleChange}
          />
        </label>
        <button>Submit</button>
        {name && <h1>Hello {name}!</h1>}
      </form>
    </>
  );
}

export default App;

/*
  
*/
