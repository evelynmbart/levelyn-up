import { useState } from "react";

export default function Input({ taskList, setTaskList }) {
  const [input, setInput] = useState("");

  function handleAddTask(e) {
    e.preventDefault();
    setTaskList([...taskList, input]);
    setInput("");
  }

  return (
    <>
      <form>
        <input
          type="text"
          placeholder="Add a task"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button id="add" onClick={handleAddTask}>
          Add
        </button>
      </form>
    </>
  );
}
