import { useState } from "react";
import Card from "./Card";
import "../styles/AddTodo.css";
import Button from "./Button";

const AddTodo = ({ onAddTodo }) => {
  const [showTodoForm, setShowTodoForm] = useState(false);
  const [enteredTodo, setEnteredTodo] = useState("");

  const showTodoFormHandler = () => {
    setShowTodoForm(true);
  };
  const hideTodoFormHandler = () => {
    setShowTodoForm(false);
  };

  const submitTodoHandler = (event) => {
    event.preventDefault();
    if (enteredTodo.trim().length === 0) alert("Please enter a todo");
    else onAddTodo({ id: Math.random() * 6, todoText: enteredTodo });

    setEnteredTodo("");
  };

  return (
    <Card className="add-todo_container">
      {!showTodoForm && (
        <div className="add-todo_btn">
          <button onClick={showTodoFormHandler}>Add New Todo</button>
        </div>
      )}
      {showTodoForm && (
        <div>
          <form className="add_todo-form" onSubmit={submitTodoHandler}>
            <div className="todo_inputs">
              <div className="todo_input">
                <label htmlFor="task">Enter Todo</label>
                <input
                  type="input"
                  id="task"
                  value={enteredTodo}
                  onChange={(event) => setEnteredTodo(event.target.value)}
                />
              </div>
            </div>
          </form>
          <div className="todo__actions">
            <Button onClick={hideTodoFormHandler} btnText="Cancel" />
            <Button btnText="Add Todo" onClick={submitTodoHandler} />
          </div>
        </div>
      )}
    </Card>
  );
};

export default AddTodo;
