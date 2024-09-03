export function Question({ question, index, selectedAnswer, onSelectAnswer }) {
  // Use these!
  return (
    <fieldset>
      <legend>{question.question}</legend>
      <div>
        <input
          type="radio"
          id="answer1"
          name={index}
          value="optionA"
          checked={selectedAnswer === question.optionA}
          onClick={onSelectAnswer}
        />
        <label htmlFor="answer1">{question.optionA}</label>
        <input type="radio" id="answer2" name={index} value="optionA" />
        <label htmlFor="answer2">{question.optionB}</label>
        <input type="radio" id="answer3" name={index} value="optionC" />
        <label htmlFor="answer3">{question.optionC}</label>
        <input type="radio" id="answer4" name={index} value="optionD" />
        <label htmlFor="answer4">{question.optionD}</label>
      </div>
    </fieldset>
  );
}
