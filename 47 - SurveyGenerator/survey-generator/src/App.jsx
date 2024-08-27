import { useState } from "react";
import "./App.css";
import "./assets/Answers.css";
import { Question } from "./assets/Question";
import { Answers } from "./assets/Answers";

function App() {
  const [questions, setQuestions] = useState([]);
  const [isInSurveyMode, setIsInSurveyMode] = useState(false);
  const [answers, setAnswers] = useState([]);

  const handleAddQuestion = () => {
    setQuestions([...questions, ""]);
  };

  const handleDelete = (indexToDelete) => {
    setQuestions(questions.filter((_, index) => index !== indexToDelete));
  };

  const handleSurveyMode = () => {
    // Create an array of questions length but all empty strings
    // Set answers to that array
    let newAnswers = [];
    for (let i = 0; i < questions.length; i++) {
      newAnswers.push("");
    }
    setAnswers(newAnswers);
    setIsInSurveyMode(true);
  };

  const handleQuestionChange = (e, indexToChange) => {
    setQuestions(
      questions.map((question, curIndex) => {
        if (curIndex !== indexToChange) {
          return question;
        } else {
          return e.target.value;
        }
      })
    );
  };

  const resetMode = () => {
    setIsInSurveyMode(false);
    setQuestions([]);
  };

  const handleAnswerChange = (e, indexToChange) => {
    setAnswers(
      answers.map((answer, curIndex) => {
        if (curIndex !== indexToChange) {
          return answer;
        } else {
          return e.target.value;
        }
      })
    );
  };

  console.log(answers);
  const handleSubmit = () => {
    alert("Thanks for your time! Your answers are valued.");
    resetMode();
  };

  console.log("questions", questions);

  return (
    <div className="screen">
      <h1>Survey Generator</h1>
      <h4>Build your survey then click "Take Survey" down below.</h4>
      {!isInSurveyMode ? (
        <div>
          {questions.map((question, index) => {
            return (
              <Question
                key={index}
                id={index + 1}
                question={question}
                handleDelete={() => handleDelete(index)}
                handleQuestionChange={(e) => handleQuestionChange(e, index)}
              />
            );
          })}

          <button onClick={handleAddQuestion}>Add a question</button>
          <br />
          <button onClick={handleSurveyMode}>Take Survey</button>
        </div>
      ) : (
        <div>
          {questions.map((question, index) => {
            return (
              <Answers
                key={index}
                id={index + 1}
                question={question}
                answer={answers[index]}
                handleAnswerChange={(e) => handleAnswerChange(e, index)}
              />
            );
          })}
          <button onClick={handleSubmit}>Submit</button>
          <br />
          <br />
          <button onClick={resetMode}>Reset Build</button>
        </div>
      )}
    </div>
  );
}

export default App;
