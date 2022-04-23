import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import Todo from "./component/Todo";
import { useDrop } from "react-dnd";
import Todos from "./component/Todos";
import CompleteTodos from "./component/CompleteTodos";

function App() {
  const [todos, setTodos] = useState([
    { _id: Math.random(), todo: "Learn JS", isDone: true },
    { _id: Math.random(), todo: "Learn React", isDone: false },
    { _id: Math.random(), todo: "Learn Tailwind", isDone: false },
  ]);

  const setTodoDone = (id) => {
    const todo = todos.filter((todos) => (todos._id == id));
    todo[0].isDone = true;
    setTodos([...todos, todo]);
    // console.log(todos);
  }

  const setTodoFalse = (id) => {
    const todo = todos.filter((todos) => (todos._id == id));
    todo[0].isDone = false;
    setTodos([...todos, todo]);
  }

  return (
    <div className="bg-gray-800 text-white h-screen flex justify-top flex-col items-center">
      <h1 className="font-bold text-3xl mt-5">{`Drag & Drop`}</h1>
      <div className="drag__container flex flex-row h-full mt-5 p-5 gap-5">
        <Todos todos={todos} setTodoFalse={setTodoFalse}></Todos>
        <CompleteTodos todos={todos} setTodoDone={setTodoDone}></CompleteTodos>
      </div>
    </div>
  );
}

export default App;
