import { useState } from "react";

export function Item({ item, handleDelete }) {
  const [isCompleted, setIsCompleted] = useState(false);

  return (
    <div className="item">
      <button onClick={() => setIsCompleted(!isCompleted)}>Completed?</button>
      {isCompleted ? (
        <p>
          <s>{item}</s>
        </p>
      ) : (
        <p>{item}</p>
      )}
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
}
