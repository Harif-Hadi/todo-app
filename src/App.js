import { useState, useEffect } from "react";
import AddTodo from "./components/AddTodo";
import Todos from "./components/Todos";

const App = () => {
  const [todos, setTodos] = useState([]);

  const addTodoHandler = (todo) => {
    setTodos([...todos, todo]);
    localStorage.setItem("todos", JSON.stringify([...todos, todo]));
  };

  const deleteTodoHandler = (id) => {
    const newTodos = () => {
      const deletedTodo = todos.filter((todo) => todo.id !== id);
      localStorage.setItem("todos", JSON.stringify(deletedTodo));
      return deletedTodo;
    };
    setTodos(newTodos);
  };

  useEffect(() => {
    if (localStorage.getItem("todos")) {
      const storedTodos = JSON.parse(localStorage.getItem("todos"));
      setTodos(storedTodos);
    }
  }, []);

  return (
    <div>
      <AddTodo onAddTodo={addTodoHandler} />
      <Todos todos_data={todos} onDelete={deleteTodoHandler} />
    </div>
  );
};

export default App;
