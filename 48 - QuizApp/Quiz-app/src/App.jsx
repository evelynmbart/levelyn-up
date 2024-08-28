import { useState } from "react";
import "./App.css";

const questions = [
  {
    question: "What is the capital of France?",
    optionA: "Berlin",
    optionB: "Madrid",
    optionC: "Paris",
    optionD: "Rome",
    answer: "C",
  },
  {
    question: "Which planet is known as the Red Planet?",
    optionA: "Earth",
    optionB: "Mars",
    optionC: "Jupiter",
    optionD: "Venus",
    answer: "B",
  },
  {
    question: "What is the periodic symbol for water?",
    optionA: "H2",
    optionB: "O2",
    optionC: "CO2",
    optionD: "H2O",
    answer: "D",
  },
  {
    question: "Which language is primarily spoken in Brazil?",
    optionA: "Spanish",
    optionB: "Portuguese",
    optionC: "French",
    optionD: "Italian",
    answer: "B",
  },
  {
    question: "Which animal is known as the King of the Jungle?",
    optionA: "Elephant",
    optionB: "Lion",
    optionC: "Tiger",
    optionD: "Bear",
    answer: "B",
  },
];

function App() {
  return (
    <>
      <div className="navbar">Pop Quiz!</div>
      <button>Start Quiz</button>
      <div className="question-container">
        <h3>Question #</h3>
        <form>
          <fieldset>
            <legend></legend>
          </fieldset>
        </form>
      </div>
    </>
  );
}

export default App;
