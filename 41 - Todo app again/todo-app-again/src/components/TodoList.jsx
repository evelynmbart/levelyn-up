import React from "react";
import { TodoCard } from "./TodoCard";

export function TodoList() {
  let todos = ["go to the gym", "eat more fruits and vege", "walk the dog"];

  return (
    <ul>
      {todos.map((todo, todoIndex) => {
        return (
          <TodoCard key={todoIndex}>
            <p>{todo}</p>
          </TodoCard>
        );
      })}
    </ul>
  );
}
