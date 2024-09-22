import { useEffect, useState } from "react";
import "./App.css";
import { useDispatch, UseDispatch, useSelector } from "react-redux";
import Todo, { TodoType } from "./components/Todo/Todo";
import { addToTodos, removeFromTodos } from "./state/slice";
import { BsPlusCircle } from "react-icons/bs";

import { getTodos } from "./service/todoData";

function App() {
  useEffect(() => {
    getTodos().then((res) => {
      console.log(res);
    });
  }, []);

  const dispatch = useDispatch();
  const todos: TodoType[] = useSelector((state: any) => state.todos.todos);
  const [text, setText] = useState("");
  const handleAdd = (): void => {
    if (text === "") {
      return;
    }
    dispatch(
      addToTodos({
        id: Math.floor(Math.random() * 1000),
        text,
        status: "incomplete",
      })
    );
  };
  const handleEdit = (id: number) => {
    const existingTodo: TodoType | undefined = todos.find(
      (todo: TodoType) => todo.id === id
    );
    if (existingTodo === undefined) return;
    setText(existingTodo.text);
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
            onChange={(event) => setText(event.target.value)}
            value={text}
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
