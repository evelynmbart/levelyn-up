import { useState } from "react";
import "./App.css";
import { Item } from "./assets/Item";

function App() {
  const [item, setItem] = useState("");
  const [items, setItems] = useState([]);

  const addItem = (item) => {
    setItems((items) => [...items, item]);
    setItem("");
  };

  const handleChange = (e) => {
    setItem(e.target.value);
  };
  console.log(items);

  const handleCompleted = (index) => {
    setItems(items.filter((_, i) => i !== index));
  };

  return (
    <div>
      <h1>Todo List</h1>
      <p>Enter a todo:</p>
      <input
        type="text"
        placeholder="Laundry"
        onChange={handleChange}
        value={item}
      />
      <button onClick={() => addItem(item)}>Submit</button>
      <hr />
      {items.map((task, index) => {
        return (
          <Item
            key={index}
            task={task}
            handleCompleted={() => handleCompleted(index)}
          />
        );
      })}
    </div>
  );
}

export default App;
