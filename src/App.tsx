import { useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import "./App.css";
import reactLogo from "./assets/react.svg";
import BlackButton from "./components/oldButton/BlackButton";
import Album from "./features/Album_propsExample/pages/index";
import ShowButton from "./features/ShowButton";
import ShowInfoExample from "./features/ShowInfoExample";
import StateTodoPractice from "./features/State_example/First/pages/exIndex";
import StateTodoPractice2 from "./features/State_example/First/pages/exIndex2";
import StateRemakeTodo from "./features/State_example/First/pages/Form/pages";
import State from "./features/State_example/First/pages/index";
import StateTodoList from "./features/State_example/Second/pages/index";
import StateTodoListFilter from "./features/State_example/Third/pages/index_useEffect";
import Structure from "./features/Structure";
import TodoList from "./features/TodoExample/pages/index";
import viteLogo from "/vite.svg";
function HomePage() {
  const [count, setCount] = useState(0);
  const navigate = useNavigate(); // Hook giúp chuyển trang

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <BlackButton onClick={() => navigate("/props")}>
        Props Example
      </BlackButton>{" "}
      <BlackButton onClick={() => navigate("/object")}>
        Object Example
      </BlackButton>
      <BlackButton onClick={() => navigate("/structure")}>
        Structure React - Not for Node js
      </BlackButton>
      <BlackButton onClick={() => navigate("/todo")}>
        Ví dụ về 1 cái Cấu trúc. Xem cái features/TodoExample/...
      </BlackButton>
      <BlackButton onClick={() => navigate("/albums")}>
        Ví dụ về 1 cái Cấu trúc. Xem cái features/TodoExample/...
      </BlackButton>
      <BlackButton onClick={() => navigate("/state")}>
        Ví dụ cơ bản về state
      </BlackButton>
      <BlackButton onClick={() => navigate("/stateTodo")}>
        Ví dụ cơ bản về state với cái todoList
      </BlackButton>
      <BlackButton onClick={() => navigate("/stateTodo3")}>
        Ví dụ cơ bản về state với cái todoList
      </BlackButton>
      <BlackButton onClick={() => navigate("/statePr2")}>
        Ví dụ cơ bản về state với cái List
      </BlackButton>
      <BlackButton onClick={() => navigate("/stateRemakeTodo")}>
        Remake List
      </BlackButton>
      <BlackButton onClick={() => navigate("/stateForm")}>
        Remake List
      </BlackButton>
    </>
  );
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} /> {/* 👈 Trang mặc định */}
      <Route path="/props" element={<ShowButton />} />
      <Route path="/object" element={<ShowInfoExample />} />
      <Route path="/structure" element={<Structure />} />
      <Route path="/todo" element={<TodoList />} />
      <Route path="/albums" element={<Album />} />
      <Route path="/state" element={<State />} />
      <Route path="/stateTodo" element={<StateTodoList />} />
      <Route path="/stateTodo3" element={<StateTodoListFilter />} />
      <Route path="/statePr1" element={<StateTodoPractice />} />
      <Route path="/statePr2" element={<StateTodoPractice2 />} />
      <Route path="/stateRemakeTodo" element={<StateRemakeTodo />} />
      {/* <Route path="/stateForm" element={<StateTodoForm />} /> */}
    </Routes>
  );
}
