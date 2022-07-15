import React, { useContext, useState } from "react";

import "./TodoForm.css";
import Context from "../../Context";

function TodoForm() {
  const [value, setValue] = useState("");
  const { addTodo } = useContext(Context);

  return (
    <form className="form wrapper" onSubmit={handleSubmit}>
      <input
        type="text"
        className="add-input"
        placeholder="Write your todo..."
        value={value}
        onChange={(event) => setValue(event.target.value)}
      />
      <button type="submit" className="add-button">
        Add
      </button>
    </form>
  );

  function handleSubmit(event) {
    event.preventDefault();
    addTodo({
      id: Date.now(),
      title: value,
      checked: false,
    });
    setValue("");
  }
}

export default TodoForm;
