export function Question({ question, id, handleDelete }) {
  return (
    <div className="question">
      Question {id}:
      <input type="text" />
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
}
