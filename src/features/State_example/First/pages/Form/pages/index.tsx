import React, { useCallback, useState } from "react";
import type { Todo } from "../component/Todo";
import TodoListRemake from "../component/TodoList/TodoList";
import TodoForm from "../component/TodoForm";

const listTodo: Todo[] = [
  { id: 1, value: "red" },
  { id: 2, value: "blue" },
  // { id: 3, value: "green" },
  // { id: 4, value: "yellow" },
  // { id: 5, value: "orange" },
  // { id: 6, value: "purple" },
  // { id: 7, value: "pink" },
  // { id: 8, value: "black" },
  // { id: 9, value: "white" },
  // { id: 10, value: "gray" },
];

const handlerClick = (todo: Todo) => {
  console.log(`Chạy thử ${todo.id} -- ${todo.value} `);
};

function List() {
  const [currentListTodo, setCurrentListTodo] = useState<Todo[]>(listTodo);

  const handleAdd = useCallback((newTodo: Todo) => {
    setCurrentListTodo((prev) => [...prev, newTodo]);
  }, []);

  return (
    <>
      <TodoForm onAdd={handleAdd} />
      <TodoListRemake
        listTodo={currentListTodo}
        isClick={handlerClick}
      ></TodoListRemake>
    </>
  );
}

export default List;
/**
 * old school
 * const handleAdd = (newTodo: Todo) => {
 * const update = [...currentListTodo];
 * update.push(newTodo);
 * setCurrentListTodo(update);
 * };
 */
