import "./Todo.css";
import { useDispatch } from "react-redux";
import { BsCheckCircle } from "react-icons/bs";
import { changeTodoCompleted } from "../../state/slice";
import { TodoProps } from "../../types/todo";

const Todo = ({ todo }: TodoProps) => {
  const dispatch = useDispatch();

  const handleStatus = (): void => {
    dispatch(changeTodoCompleted(todo.id));
  };

  const todoClassName: string = `Todo__text${
    todo.completed ? "--complete" : ""
  }`;
  const todoCheckClassName: string = `Todo__checkmark${
    todo.completed ? "--complete" : ""
  }`;

  return (
    <tr className="Todo">
      <td className="Todo__data">
        <span className={todoClassName}>{todo.title}</span>
      </td>
      <td onClick={handleStatus} className={todoCheckClassName}>
        <BsCheckCircle />
      </td>
    </tr>
  );
};

export default Todo;
