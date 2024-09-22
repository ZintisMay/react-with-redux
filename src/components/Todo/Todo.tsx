import "./Todo.css";
import { useDispatch, UseDispatch } from "react-redux";
import { BsCheckCircle, BsPencil, BsTrash } from "react-icons/bs";

import { changeTodoStatus, removeFromTodos } from "../../state/slice";

export type TodoType = {
  id: number;
  text: string;
  status: string;
};
type TodoProps = {
  todo: TodoType;
  handleEdit: Function;
};

const Todo = ({ todo, handleEdit }: TodoProps) => {
  const dispatch = useDispatch();

  const handleStatus = () => {
    dispatch(changeTodoStatus(todo.id));
  };

  const handleDelete = () => {
    dispatch(removeFromTodos(todo.id));
  };

  const todoClassName: string = todo.status === "complete" ? "complete" : "";

  return (
    <div className="todo">
      <div className="text">
        <span className={todoClassName}>{todo.text}</span>
      </div>
      <div className="edit">
        <div onClick={() => handleEdit(todo.id)}>
          <BsPencil />
        </div>
        <div onClick={handleStatus}>
          <BsCheckCircle />
        </div>
        <div onClick={handleDelete}>
          <BsTrash />
        </div>
      </div>
    </div>
  );
};

export default Todo;
