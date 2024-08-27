export function Answers({ id, question, answer, handleAnswerChange }) {
  return (
    <div className="answers">
      <div className="survey-question">
        Question {id}: <span>{question}</span>
      </div>
      <div>
        <input type="text" onChange={handleAnswerChange} value={answer} />
      </div>
    </div>
  );
}
