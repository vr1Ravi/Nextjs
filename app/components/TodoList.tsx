import React from "react";
import Todo from "./Todo";
import { todoType } from "./Todo";

const TodoList = ({ todos }: { todos: todoType[] }) => {
  return (
    <div>
      {todos.map((todo) => (
        <Todo key={todo.id} todo={todo} />
      ))}
    </div>
  );
};

export default TodoList;
