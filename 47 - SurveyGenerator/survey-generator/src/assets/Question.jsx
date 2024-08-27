export function Question({ id, handleDelete, question, handleQuestionChange }) {
  return (
    <div className="question">
      Question {id}:
      <input type="text" value={question} onChange={handleQuestionChange} />
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
}
