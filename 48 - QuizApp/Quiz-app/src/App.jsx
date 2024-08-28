import { useState } from "react";
import "./App.css";
import { Question } from "./assets/Question";

const quizQuestions = [
  {
    question: "1. What is the capital of France?",
    optionA: "Berlin",
    optionB: "Madrid",
    optionC: "Paris",
    optionD: "Rome",
    answer: "C",
  },
  {
    question: "2. Which planet is known as the Red Planet?",
    optionA: "Earth",
    optionB: "Mars",
    optionC: "Jupiter",
    optionD: "Venus",
    answer: "B",
  },
  {
    question: "3. What is the periodic symbol for water?",
    optionA: "H2",
    optionB: "O2",
    optionC: "CO2",
    optionD: "H2O",
    answer: "D",
  },
  {
    question: "4. Which language is primarily spoken in Brazil?",
    optionA: "Spanish",
    optionB: "Portuguese",
    optionC: "French",
    optionD: "Italian",
    answer: "B",
  },
  {
    question: "5. Which animal is known as the King of the Jungle?",
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
        <form>
          {quizQuestions.map((question, index) => {
            return <Question key={index} question={question} index={index++} />;
          })}
          <button>Submit</button>
        </form>
      </div>
    </>
  );
}

export default App;
