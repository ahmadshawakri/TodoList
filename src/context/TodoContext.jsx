import React, { createContext, useState } from "react";

export const TodoContext = createContext();

export const TodoProvider = ({ children }) => {
  const [todos, setTodos] = useState([]);
  const [message, setMessage] = useState("");

  const addTodo = (item) => {
    if (!todos.find((todo) => todo.text === item.text)) {
      setTodos([...todos, item]);
      setMessage("Todo was Added Successfully");
    } else {
      setMessage("Todo is Already Exist");
    }
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
    setMessage("Todo was Deleted Successfully");
  };

  return (
    <TodoContext.Provider value={{ todos, message, setMessage, addTodo, deleteTodo }}>
      {children}
    </TodoContext.Provider>
  );
};
