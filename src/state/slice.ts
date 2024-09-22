import { createSlice } from "@reduxjs/toolkit";

type Todo = {
  userId?: number;
  id: number;
  title: string;
  completed: boolean;
};

const initialState: { todos: Todo[] } = {
  todos: [
    // { userId: 1, id: 1, title: "a", completed: false },
    // { userId: 1, id: 2, title: "b", completed: false },
    // { userId: 1, id: 3, title: "c", completed: true },
  ],
};

export const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addNewTodos: (state, action) => {
      const newTodos = action.payload;
      state.todos = [...state.todos, ...newTodos];
    },
    addNewTodo: (state, action) => {
      const newTodo = action.payload;
      state.todos.push(newTodo);
    },
    editTodos: (state, action) => {
      const { id, title } = action.payload;
      const existingTodo: Todo | undefined = state.todos.find(
        (todo) => todo.id === id
      );
      if (existingTodo) {
        existingTodo.title = title;
      }
    },
    removeFromTodos: (state, action) => {
      const id = action.payload;
      state.todos = state.todos.filter((todo) => todo.id !== id);
    },
    changeTodoCompleted: (state, action) => {
      const id = action.payload;
      const existingTodo: Todo | undefined = state.todos.find(
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

export const {
  addNewTodo,
  addNewTodos,
  editTodos,
  removeFromTodos,
  changeTodoCompleted,
} = todoSlice.actions;

export default todoSlice.reducer;
