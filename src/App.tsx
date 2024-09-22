import { useEffect, useState } from "react";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import Todo, { TodoType } from "./components/Todo/Todo";
import { addNewTodo, addNewTodos, removeFromTodos } from "./state/slice";
import { BsPlusCircle } from "react-icons/bs";

import { getTodos } from "./service/todoData";

function App() {
  const dispatch = useDispatch();
  const todos: TodoType[] = useSelector((state: any) => state.todos.todos);
  // go get the JSON placeholder data
  useEffect(() => {
    getTodos().then((res) => {
      console.log(res.data);
      dispatch(addNewTodos(res.data));
    });
  }, []);

  const [title, setTitle] = useState("");
  const handleAdd = (): void => {
    if (title === "") {
      return;
    }
    dispatch(
      addNewTodo({
        id: todos[todos.length - 1].id + 1,
        title,
        completed: "incomplete",
      })
    );
  };
  const handleEdit = (id: number) => {
    const existingTodo: TodoType | undefined = todos.find(
      (todo: TodoType) => todo.id === id
    );
    if (existingTodo === undefined) return;
    setTitle(existingTodo.title);
    dispatch(removeFromTodos(id));
  };

  return (
    <div className="app">
      <div className="content">
        <div className="header">
          <span className="title">Todo List</span>
        </div>
        <div className="add">
          <input
            type="text"
            onChange={(event) => setTitle(event.target.value)}
            value={title}
          />
          <button onClick={handleAdd}>
            <BsPlusCircle />
            <span>Add</span>
          </button>
        </div>
        <div className="main">
          {todos.map((todo, index) => {
            return <Todo key={index} todo={todo} handleEdit={handleEdit} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
