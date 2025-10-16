import React, { useState } from "react";
import type { Todo } from "../Todo";

interface TodoFormProps {
  onAdd: (todo: Todo) => void;
}

function TodoForm(prop: Readonly<TodoFormProps>) {
  const { onAdd } = prop;
  const [context, setContext] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!context.trim()) return;

    const newTodo: Todo = {
      id: Date.now(), // tạo id tạm thời
      value: context.trim(),
    };
    onAdd(newTodo);
    setContext(""); // <- 3. rest lại
  };

  return (
    <div>
      <h2>TodoForm</h2>
      <form action="" onSubmit={handleSubmit}>
        <input
          type="text"
          value={context} // <- 2. truyền lên đây để lấy cái value truyền lên handleSubmit
          placeholder="Nhập màu mới..."
          onChange={(e) => setContext(e.target.value)} // <- 1. lấy giá trị của form
        />
        <button type="submit">Thêm</button>
      </form>
    </div>
  );
}

export default TodoForm;
