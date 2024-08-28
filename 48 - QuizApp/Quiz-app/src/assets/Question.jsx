export function Question({ question, index }) {
  return (
    <fieldset>
      <legend>{question.question}</legend>
      <div>
        <input type="radio" id="answer1" name={index} value="optionA" />
        <label for="answer1">{question.optionA}</label>
        <input type="radio" id="answer2" name={index} value="optionA" />
        <label for="answer2">{question.optionB}</label>
        <input type="radio" id="answer3" name={index} value="optionC" />
        <label for="answer3">{question.optionC}</label>
        <input type="radio" id="answer4" name={index} value="optionD" />
        <label for="answer4">{question.optionD}</label>
      </div>
    </fieldset>
  );
}
