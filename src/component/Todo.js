import React from "react";
import { useDrag } from "react-dnd";

const Todo = (props) => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: "card",
    item: { id: props.id, todo: props.todo },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));

  return (
    <li
      ref={drag}
      key={props.id}
      className="bg-green-900 w-3/4 my-2 rounded-xl p-2"
      style={{opacity: isDragging ? `0.5` : `1`}}
    >
      {props.todo}
    </li>
  );
};

export default Todo;
