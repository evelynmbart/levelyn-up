import { useState } from "react";
import "./App.css";

function App() {
  const [characterCount, setCharacterCount] = useState("");

  const handleChange = (e) => {
    setCharacterCount(e.target.value);
  };
  const maxCharacter = 200;

  const greaterThan = characterCount.length >= maxCharacter;

  const maxCount = () => {
    const error = "too many characters!";
    if (greaterThan) {
      alert(error);
    }
  };

  console.log(characterCount);
  return (
    <>
      <div>Character Counter</div>
      <form>
        <label>Please write your comments here:</label>
        <textarea onChange={handleChange}></textarea>
      </form>
      <div
        style={{
          color: greaterThan ? "red" : "white",
        }}
      >
        {maxCount()}
        {characterCount.length} / {maxCharacter}
      </div>
    </>
  );
}

export default App;
