import "./Todo.css";
import { useDispatch, UseDispatch } from "react-redux";
import { BsCheckCircle, BsPencil, BsTrash } from "react-icons/bs";

import { changeTodoCompleted, removeFromTodos } from "../../state/slice";

export type TodoType = {
  id: number;
  title: string;
  completed: boolean;
};
type TodoProps = {
  todo: TodoType;
  handleEdit: Function;
};

const Todo = ({ todo, handleEdit }: TodoProps) => {
  const dispatch = useDispatch();

  const handleStatus = () => {
    dispatch(changeTodoCompleted(todo.id));
  };

  const handleDelete = () => {
    dispatch(removeFromTodos(todo.id));
  };

  const todoClassName: string = todo.completed === true ? "complete" : "";

  return (
    <div className="todo">
      <span>{todo.id}:</span>
      <div className="text">
        <span className={todoClassName}>{todo.title}</span>
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
