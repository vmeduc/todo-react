import React, { useEffect, useState } from "react";

import Context from "./Context";
import Header from "./components/Header.jsx";
import TodoForm from "./components/todo/TodoForm.jsx";
import TodoList from "./components/todo/TodoList.jsx";
import Footer from "./components/Footer.jsx";

import "./App.css";

function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    setTodos(JSON.parse(localStorage.getItem("todos")) || []);
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  });

  return (
    <Context.Provider value={{ addTodo, removeTodo, checkTodo }}>
      <div className="app">
        <main className="main">
          <Header />
          <TodoForm />
          <TodoList todos={todos} />
        </main>
        <Footer />
      </div>
    </Context.Provider>
  );

  function addTodo(todo) {
    setTodos(todos.concat(todo));
  }

  function removeTodo(id) {
    setTodos(todos.filter((todo) => todo.id !== id));
  }

  function checkTodo(id) {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) todo.checked = !todo.checked;
        return todo;
      })
    );
  }
}

export default App;
