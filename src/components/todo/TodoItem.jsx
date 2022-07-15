import React, { useContext } from "react";
import PropTypes from "prop-types";

import "./TodoItem.css";
import Context from "../../Context";

function TodoItem({ todo }) {
  const { removeTodo, checkTodo } = useContext(Context);

  return (
    <li className={`todo-item ${todo.checked ? "todo-item--checked" : ""}`}>
      <input type="checkbox" checked={todo.checked} onChange={() => checkTodo(todo.id)}/>
      &nbsp;
      <span>{todo.title}</span>
      &nbsp;
      <button className="delete-button" onClick={() => removeTodo(todo.id)}>
        &times;
      </button>
    </li>
  );
}

TodoItem.propTypes = {
  todo: PropTypes.object.isRequired,
};

export default TodoItem;
