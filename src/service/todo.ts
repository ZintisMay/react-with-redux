import axios from "axios";

const JSON_PLACEHOLDER_TODO_URL = "https://jsonplaceholder.typicode.com/todos";
const JSON_PLACEHOLDER_COUNT_URL =
  "http://jsonplaceholder.typicode.com/posts?_start=0&_end=1";

export async function getTodos(start: number = 0, limit: number = 100) {
  return await axios.get(JSON_PLACEHOLDER_TODO_URL, {
    params: {
      _limit: limit,
      _start: start,
    },
  });
}

export async function getTodoCount() {
  const res = await axios.get(JSON_PLACEHOLDER_COUNT_URL);
  const count: number = Number(res.headers["x-total-count"]);
  return count;
}
