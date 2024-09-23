import "./App.css";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import Todo from "./components/Todo/Todo";
import { TodoType } from "./types/todo";
import { addNewTodos } from "./state/slice";

import { getTodos, getTodoCount } from "./service/todo";
import { arrayToX } from "./utils";

const LIMITS = [10, 20, 30, 40];

function App() {
  const [page, setPage] = useState(0);
  const [count, setCount] = useState(0);
  const [limit, setLimit] = useState(LIMITS[0]);

  // Get the todos state
  const dispatch = useDispatch();
  const todos: TodoType[] = useSelector((state: any) => state.todos.todos);

  // go get the JSON placeholder data
  useEffect(() => {
    getTodoCount().then((count) => {
      setCount(count);
    });
    getTodos(page * limit, limit).then((res) => {
      dispatch(addNewTodos(res.data));
    });
    //update when user changes item limit or page
  }, [limit, page]);

  const changeLimit = (e: React.FormEvent<HTMLSelectElement>) => {
    setLimit(Number((e.target as HTMLTextAreaElement).value));
    setPage(0);
  };

  const changePage = (e: React.FormEvent<HTMLSelectElement>) => {
    setPage(Number((e.target as HTMLTextAreaElement).value));
  };

  const pageLimit: number = Math.ceil(count / limit);

  return (
    <div className="app">
      <main className="content">
        <h1 className="content__header">Todo List</h1>

        <div className="content__options">
          <label>Viewing </label>
          <select onChange={changeLimit} value={limit}>
            {LIMITS.map((item, index) => (
              <option key={index} value={item}>
                {item}
              </option>
            ))}
          </select>
          <label> items on page </label>
          <select onChange={changePage} value={page}>
            {arrayToX(pageLimit).map((_, index) => {
              return <option value={index}>{index + 1}</option>;
            })}
          </select>
          <span> of {Math.ceil(count / limit)}</span>
        </div>
        <div className="main">
          <table className="todoTable">
            <tbody className="todoTable__body">
              <tr className="todoTable__header">
                <td className="todoTable__text">
                  <h3>Task</h3>
                </td>
                <td className="todoTable__text">
                  <h3>Completed</h3>
                </td>
              </tr>
              {todos.slice(0, limit).map((todo, index) => {
                return <Todo key={index} todo={todo} />;
              })}
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
}

export default App;
