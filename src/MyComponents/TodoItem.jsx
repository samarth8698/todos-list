import React from "react";

const TodoItem = ({ todo, onDelete, onUpdate }) => {
  return (
    <>
      <div>
        <h4>{todo.title}</h4>
        <p>{todo.desc}</p>

        <button
          className="btn btn-sm btn-danger"
          onClick={() => onDelete(todo)}
        >
          Delete
        </button>

        <button
          className="btn btn-sm btn-primary mx-2"
          onClick={() => onUpdate(todo)}
        >
          Update
        </button>
      </div>
      <hr />
    </>
  );
};

export default TodoItem;