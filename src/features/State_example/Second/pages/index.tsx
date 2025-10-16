// import React, { useState } from "react";
import { useCallback, useState } from "react";
import type { Item } from "../component/TodoItem";
import TodoList from "../component/TodoList";

const initTodoList: Item[] = [
  { id: 1, title: "Yolo", status: "check" },
  { id: 2, title: "Zalo", status: "unCheck" },
  { id: 3, title: "Yilo", status: "unCheck" },
];

function TodoListNew() {
  /**
   * Đây là cha
   * const [listTodoCurrent, setListTodoCurrent] = useState(initTodoList);
   *
   * Có những vấn đề sau :
   * useCallback để tránh re-render con không cần thiết. memo cho TodoList.
   */
  const [listTodoCurrent, setListTodoCurrent] = useState<Item[]>(initTodoList);

  /**
   * Tốt cho hiệu năng hơn khi sử dụng callback :
   *
   */
  const changeStatus = useCallback((item: Item) => {
    setListTodoCurrent((prev) =>
      prev.map((todo) =>
        todo.id === item.id
          ? { ...todo, status: todo.status === "check" ? "uncheck" : "check" }
          : todo
      )
    );
  }, []);
  return (
    <>
      <h3>TodoListNew</h3>
      <TodoList items={listTodoCurrent} clickAItem={changeStatus}></TodoList>
    </>
  );
}

export default TodoListNew;
/**
 *   const handleTodoList = (item: Item) => {
    console.log(`Calling handleTodoList with: ${item.title}`);

    const update = listTodoCurrent.map((todo) =>
      todo.id === item.id
        ? { ...todo, status: todo.status === "check" ? "uncheck" : "check" }
        : todo
    );
    setListTodoCurrent(update);
  };

    const handleTodoList = (item: Item) => {
    console.log(`Calling handleTodoList with: ${item.id} - ${item.status} `);
  };
 */
