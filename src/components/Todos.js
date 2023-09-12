import Card from "./Card";

import "../styles/Todos.css";
import Todo from "./Todo";

const Todos = ({ todos_data, onDelete }) => {
  return (
    <Card className="todos__container">
      {todos_data.length === 0 ? (
        <h2 className="no_todos">No todos found!</h2>
      ) : (
        <div>
          {todos_data.map((data) => (
            <Todo
              id={data.id}
              key={data.id}
              todoText={data.todoText}
              onDelete={onDelete}
            />
          ))}
        </div>
      )}
    </Card>
  );
};

export default Todos;
