import React from "react";
import { useSelector } from "react-redux";
import Todo from "./Todo";

function TodoList() {
  const todos = useSelector((state) => state.todos);

  return (
    <div>
      <ul>
        {todos.map((todo) => (
          <Todo id={todo.id} key={todo.id} title={todo.title} />
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
