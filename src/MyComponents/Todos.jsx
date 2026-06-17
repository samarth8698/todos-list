import React from "react";
import TodoItem from "./TodoItem";

export const Todos = (props) => {
  let myStyle = {
    minHeight: "70vh",
  };

  return (
    <div className="container" style={myStyle}>
      <h3 className="my-3">Todos List</h3>

      {props.todos.length === 0
        ? "No Todos to display"
        : props.todos.map((todo) => (
            <TodoItem
              key={todo.sno}
              todo={todo}
              onDelete={props.onDelete}
              onUpdate={props.onUpdate}
            />
          ))}
    </div>
  );
};

export default Todos;