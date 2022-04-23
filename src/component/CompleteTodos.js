import React from 'react'
import Todo from './Todo'
import { useDrop } from 'react-dnd';

const CompleteTodos = (props) => {

    const [{ isOver }, drop] = useDrop(() => ({
        accept: "card",
        drop: (item, monitor) => {
          // console.log(item.id);
          props.setTodoDone(item.id);
          console.log(props.todos);
        },
        collect: (monitor) => ({
          isOver: !!monitor.isOver(),
        }),
      }));

  return (
    <ul
    ref={drop}
    className="bg-gray-600 w-80 text-center rounded-lg flex flex-col items-center p-3"
    style={{ opacity: isOver ? `0.5` : `1` }}
  >
    {props.todos
      .filter((todos) => todos.isDone == true)
      .map((item) => (
        <Todo key={item._id} todo={item.todo} id={item._id}></Todo>
      ))}
  </ul>
  )
}

export default CompleteTodos