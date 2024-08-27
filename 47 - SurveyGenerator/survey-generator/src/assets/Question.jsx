export function Question({ question, id, handleDelete }) {
  return (
    <div className="question">
      Question {id}:
      <input />
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
}
