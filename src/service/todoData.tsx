import axios from "axios";

const JSON_PLACEHOLDER_URL = "https://jsonplaceholder.typicode.com/";
const JSON_PLACEHOLDER_TODO_URL = "https://jsonplaceholder.typicode.com/todos";

export async function getTodos() {
  return await axios(JSON_PLACEHOLDER_TODO_URL);
}
