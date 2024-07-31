import { useState } from "react";

export function TodoItem({ item, handleDelete }) {
  const [isChecked, setIsChecked] = useState(false);

  const handleChange = (e) => {
    setIsChecked(e.target.checked);
  };

  return (
    <div className="item">
      <input
        type="checkbox"
        className="checkbox"
        value={isChecked}
        onChange={handleChange}
      />
      <h2
        className="title"
        style={{ textDecoration: isChecked ? "line-through" : "none" }}
      >
        {item}
      </h2>
      <button className="deleteButton" onClick={handleDelete}>
        Delete
      </button>
    </div>
  );
}
