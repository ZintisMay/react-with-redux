import { createSlice } from "@reduxjs/toolkit";

type Todo = { id: number; text: string; status: string };

const initialState: { todos: Todo[] } = {
  todos: [
    { id: 1, text: "a", status: "incomplete" },
    { id: 2, text: "b", status: "incomplete" },
    { id: 3, text: "c", status: "complete" },
  ],
};

export const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addToTodos: (state, action) => {
      const newTodo = action.payload;
      state.todos.push(newTodo);
    },
    editTodos: (state, action) => {
      const { id, text } = action.payload;
      const existingTodo: Todo | undefined = state.todos.find(
        (todo) => todo.id === id
      );
      if (existingTodo) {
        existingTodo.text = text;
      }
    },
    removeFromTodos: (state, action) => {
      const id = action.payload;
      state.todos = state.todos.filter((todo) => todo.id !== id);
    },
    changeTodoStatus: (state, action) => {
      const id = action.payload;
      const existingTodo: Todo | undefined = state.todos.find(
        (todo) => todo.id === id
      );
      if (existingTodo?.status === "incomplete") {
        existingTodo.status = "complete";
      } else if (existingTodo?.status === "complete") {
        existingTodo.status = "incomplete";
      }
    },
  },
});

export const { addToTodos, editTodos, removeFromTodos, changeTodoStatus } =
  todoSlice.actions;

export default todoSlice.reducer;
