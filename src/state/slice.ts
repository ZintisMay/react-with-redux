import { createSlice } from "@reduxjs/toolkit";
import { TodoType } from "../types/todo";

const initialState: { todos: TodoType[] } = {
  todos: [],
};

export const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addNewTodos: (state, action) => {
      const newTodos = action.payload;
      state.todos = newTodos;
    },
    addNewTodo: (state, action) => {
      const newTodo = action.payload;
      state.todos.push(newTodo);
    },
    removeFromTodos: (state, action) => {
      const id = action.payload;
      state.todos = state.todos.filter((todo) => todo.id !== id);
    },
    changeTodoCompleted: (state, action) => {
      const id = action.payload;
      const existingTodo: TodoType | undefined = state.todos.find(
        (todo) => todo.id === id
      );
      if (existingTodo?.completed === true) {
        existingTodo.completed = false;
      } else if (existingTodo?.completed === false) {
        existingTodo.completed = true;
      }
    },
  },
});

export const { addNewTodo, addNewTodos, removeFromTodos, changeTodoCompleted } =
  todoSlice.actions;

export default todoSlice.reducer;
