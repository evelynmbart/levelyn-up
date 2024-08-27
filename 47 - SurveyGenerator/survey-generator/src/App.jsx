import { useState } from "react";
import "./App.css";
import { Question } from "./assets/Question";

function App() {
  const [question, setQuestion] = useState("");
  const [questions, setQuestions] = useState([]);

  const handleAddQuestion = () => {
    setQuestions([...questions, <Question />]);
  };

  const handleDelete = (indexToDelete) => {
    setQuestions(questions.filter((_, index) => index !== indexToDelete));
  };

  return (
    <div className="screen">
      <h1>Survey Generator</h1>
      <h4>Build your survey then click "Take Survey" down below.</h4>
      {questions.map((question, index) => {
        return (
          <Question
            key={index}
            id={index + 1}
            question={question}
            handleDelete={() => handleDelete(index)}
          />
        );
      })}

      <button onClick={handleAddQuestion}>Add a question</button>
      <br />
      <button>Take Survey</button>
    </div>
  );
}

export default App;
