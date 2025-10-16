import React from "react";
import type { Todo } from "../Todo";

interface TodoListProp {
  listTodo: Todo[];
  isClick: (object: Todo) => void;
}
function TodoListRemake(prop: Readonly<TodoListProp>) {
  const { listTodo, isClick } = prop;

  const doClick = (object: Todo) => {
    isClick?.(object);
  };

  return (
    <div>
      <h2>TodoList</h2>
      <ul>
        {listTodo.map((value) => (
          <li key={value.id}>
            <button onClick={() => doClick(value)}>{value.value}</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoListRemake;
