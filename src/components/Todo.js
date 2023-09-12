import Button from "./Button";

const Todo = ({ todoText, id, onDelete }) => {
  return (
    <div className="todo">
      <h2>{todoText}</h2>
      <Button btnText="Delete" onClick={() => onDelete(id)} />
    </div>
  );
};

export default Todo;
