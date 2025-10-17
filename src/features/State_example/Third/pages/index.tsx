// import React, { useState } from "react";
import { useCallback, useState } from "react";
import TodoList from "../../Second/component/TodoList";
import type { Item } from "../../Second/component/TodoItem";
import { Link, NavLink } from "react-router-dom";

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
  const [filterTodoList, setFilterTodoList] = useState<Item[]>(listTodoCurrent);

  /**
   * Tốt cho hiệu năng hơn khi sử dụng callback :
   *
   */
  const changeStatus = useCallback(
    (item: Item) => {
      const updateList = listTodoCurrent.map((todo) =>
        todo.id === item.id
          ? { ...todo, status: todo.status === "check" ? "uncheck" : "check" }
          : todo
      );
      setListTodoCurrent(updateList);
      setFilterTodoList(updateList); // Giải thuật
    },
    [listTodoCurrent]
  );

  function handleShowAll() {
    return setFilterTodoList(listTodoCurrent);
  }

  const handleShowCheck = () => {
    const listUpdate = listTodoCurrent.filter(
      (item) => item.status === "check"
    );
    setFilterTodoList(listUpdate);
  };

  function handleShowUnCheck() {
    const updateList = filterTodoList.filter(
      (value) => value.status === "unCheck"
    );
    return setFilterTodoList(updateList);
  }

  return (
    <>
      <h3>TodoListNew</h3>
      <TodoList items={filterTodoList} clickAItem={changeStatus}></TodoList>
      <br></br>
      {/* Ví dụ về Link và NavLink */}
      <Link to="/stateRemakeTodo">Remake Todo </Link>
      <br></br>
      <Link to="/state">State </Link>
      <br></br>
      <Link to="/albums">Album </Link>
      <br></br>
      {/* Ví dụ về NavLink */}
      <NavLink to="/albums">
        AlBum - active mặc định. click vào nó sẽ hiển thị ra class ="active" F12
        lên xem
      </NavLink>
      <br></br>
      <NavLink
        to="/state"
        className={({ isActive }) => (isActive ? "active-menu" : "")}
      >
        State - active custom. click vào nó sẽ hiển thị ra class ="active-menu"
        F12 lên xem . Đặc biệt cái này là của typeScript và react v6
      </NavLink>
      <br></br>

      <button onClick={handleShowAll}>Show All</button>
      <button onClick={handleShowCheck}>Show Checked</button>
      <button onClick={handleShowUnCheck}>Show Unchecked</button>
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
