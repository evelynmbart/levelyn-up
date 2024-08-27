export function Item({ task, handleCompleted }) {
  return (
    <ul className="todo-list">
      <li className="single-task">{task}</li>
      <button onClick={handleCompleted}>Completed</button>
    </ul>
  );
}
