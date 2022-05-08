import axios from "axios";

export const fetchTodos = () => axios("http://localhost:3006/todos");
