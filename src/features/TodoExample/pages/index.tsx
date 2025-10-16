import React from "react";
import TodoListFeature from "../components/TodoList";
import type { TodoItem } from "../components/TodoItem";

function TodoExample() {
  const todoList: TodoItem[] = [
    { id: 1, title: "Eat" },
    { id: 2, title: "Sleep" },
    { id: 3, title: "Code" },
  ];
  return (
    <div>
      <TodoListFeature todoList={todoList}></TodoListFeature>
    </div>
  );
}

export default TodoExample;
