export default function Board({ task, index, taskList, setTaskList }) {
  function handleDelete() {
    let removeIndex = taskList.indexOf(task);
    taskList.splice(removeIndex, 1);
    setTaskList((currentTasks) =>
      currentTasks.filter((todo) => index === removeIndex)
    );
  }
  return (
    <>
      <div className="task">
        <p>{task}</p>
        <button id="delete" onClick={handleDelete}>
          Delete
        </button>
      </div>
    </>
  );
}
