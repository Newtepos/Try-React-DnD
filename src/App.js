import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import Todo from "./component/Todo";
import { useDrop } from "react-dnd";

function App() {
  const [todos, setTodos] = useState([
    { _id: Math.random(), todo: "Learn JS", isDone: true },
    { _id: Math.random(), todo: "Learn React", isDone: false },
    { _id: Math.random(), todo: "Learn Tailwind", isDone: false },
  ]);

  const setTodoDone = (id) => {
    const todo = todos.filter((todos) => (todos._id == id));
    todo[0].isDone = true;
    console.log(todos);
  }

  const [{ isOver }, drop] = useDrop(() => ({
    accept: "card",
    drop: (item, monitor) => {
      // console.log(item.id);
      setTodoDone(item.id);
    },
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  }));

  return (
    <div className="bg-gray-800 text-white h-screen flex justify-top flex-col items-center">
      <h1 className="font-bold text-3xl mt-5">{`Drag & Drop`}</h1>
      <div className="drag__container flex flex-row h-full mt-5 p-5 gap-5">
        <ul className="bg-gray-600 w-80 text-center rounded-lg flex flex-col items-center p-3">
          {todos
            .filter((todos) => todos.isDone == false)
            .map((item) => (
              <Todo key={item._id} todo={item.todo} id={item._id}></Todo>
            ))}
        </ul>
        <ul
          ref={drop}
          className="bg-gray-600 w-80 text-center rounded-lg flex flex-col items-center p-3"
          style={{ opacity: isOver ? `0.5` : `1` }}
        >
          {todos
            .filter((todos) => todos.isDone == true)
            .map((item) => (
              <Todo key={item._id} todo={item.todo} id={item._id}></Todo>
            ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
