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
  const [question, setQuestion] = useState();
  return (
    <>
      <div className="navbar">Pop Quiz!</div>
      <button>Start Quiz</button>
      <div className="question-container">
        <h3>Question #</h3>
        <form>
          <fieldset>
            <legend>{questions[0].question}</legend>
            <div>
              <input type="radio" id="answer1" name="answer" value="berlin" />
              <label for="answer1">Berlin</label>
              <input type="radio" id="answer2" name="answer" value="madrid" />
              <label for="answer2">Madrid</label>
              <input type="radio" id="answer3" name="answer" value="paris" />
              <label for="answer3">Paris</label>
              <input type="radio" id="answer4" name="answer" value="rome" />
              <label for="answer4">Rome</label>
            </div>
          </fieldset>
          <fieldset>
            <legend>{questions[1].question}</legend>
            <div>
              <input type="radio" id="answer1" name="answer" value="earth" />
              <label for="answer1">Earth</label>
              <input type="radio" id="answer2" name="answer" value="mars" />
              <label for="answer2">Mars</label>
              <input type="radio" id="answer3" name="answer" value="jupiter" />
              <label for="answer3">Jupiter</label>
              <input type="radio" id="answer4" name="answer" value="venus" />
              <label for="answer4">Venus</label>
            </div>
          </fieldset>
          <fieldset>
            <legend>{questions[2].question}</legend>
            <div>
              <input type="radio" id="answer1" name="answer" value="H2" />
              <label for="answer1">H2</label>
              <input type="radio" id="answer2" name="answer" value="O2" />
              <label for="answer2">O2</label>
              <input type="radio" id="answer3" name="answer" value="CO2" />
              <label for="answer3">CO2</label>
              <input type="radio" id="answer4" name="answer" value="H2O" />
              <label for="answer4">H2O</label>
            </div>
          </fieldset>
          <fieldset>
            <legend>{questions[3].question}</legend>
            <div>
              <input type="radio" id="answer1" name="answer" value="spanish" />
              <label for="answer1">Spanish</label>
              <input
                type="radio"
                id="answer2"
                name="answer"
                value="portuguese"
              />
              <label for="answer2">Portuguese</label>
              <input type="radio" id="answer3" name="answer" value="french" />
              <label for="answer3">French</label>
              <input type="radio" id="answer4" name="answer" value="italian" />
              <label for="answer4">Italian</label>
            </div>
          </fieldset>
          <fieldset>
            <legend>{questions[4].question}</legend>
            <div>
              <input type="radio" id="answer1" name="answer" value="elephant" />
              <label for="answer1">Elephant</label>
              <input type="radio" id="answer2" name="answer" value="lion" />
              <label for="answer2">Lion</label>
              <input type="radio" id="answer3" name="answer" value="tiger" />
              <label for="answer3">Tiger</label>
              <input type="radio" id="answer4" name="answer" value="bear" />
              <label for="answer4">Bear</label>
            </div>
          </fieldset>
        </form>
      </div>
    </>
  );
}

export default App;
