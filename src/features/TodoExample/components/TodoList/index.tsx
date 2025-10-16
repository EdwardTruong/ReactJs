import React from "react";
import type { TodoItem } from "../TodoItem";

// -> cái khó nhớ nhất là cái này
export interface TodoListProps {
  // Định nghĩa cho nó thành 1 todoList
  todoList: TodoItem[];
}

// function TodoListFeature(props: TodoListProps) {
//   const { todoList } = props;
//   ...
// }
// ============================================================ Định nghĩa method bằng interface
function TodoListFeature({ todoList }: TodoListProps) {
  // Xử lý logic hiển thị lên trong component.

  return (
    <div>
      <h1>TodoListFeature</h1>
      <ul>
        {todoList.map((value) => (
          <li key={value.id}>{value.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default TodoListFeature;
