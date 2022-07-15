import React from "react";
import PropTypes from "prop-types";

import "./TodoList.css";
import TodoItem from "./TodoItem.jsx";

function TodoList({ todos }) {
  return (
    <ul className="todo-list wrapper">
      {todos.map((todo) => {
        return (
          <TodoItem key={todo.id} todo={todo}>
            {todo.title}
          </TodoItem>
        );
      })}
    </ul>
  );
}

TodoList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default TodoList;
