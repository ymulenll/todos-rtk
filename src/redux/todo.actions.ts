import {
  ADD_TODO,
  CHECK_TODO,
  DELETE_TODO,
  FETCH_TODOS_START,
  FETCH_TODOS_ERROR,
  FETCH_TODOS_SUCCESS,
  Todo,
} from "./todo.types";
import { ThunkActionDispatch } from "redux-thunk";
import { fetchTodos } from "../api/todos";

export const addTodo = (text: string) => ({
  type: ADD_TODO,
  payload: text,
});

export const deleteTodo = (id: number) => ({
  type: DELETE_TODO,
  payload: id,
});

export const checkTodo = (id: number) => ({
  type: CHECK_TODO,
  payload: id,
});

const fetchTodosStart = () => ({
  type: FETCH_TODOS_START,
});

const fetchTodosSuccess = (todos: Todo[]) => ({
  type: FETCH_TODOS_SUCCESS,
  payload: todos,
});

const fetchTodosError = (error: Error) => ({
  type: FETCH_TODOS_ERROR,
  payload: error,
});

export const getTodos = () => {
  return async (dispatch: ThunkActionDispatch<any>) => {
    dispatch(fetchTodosStart());
    try {
      const response = await fetchTodos();
      dispatch(fetchTodosSuccess(response.data));
    } catch (error) {
      dispatch(fetchTodosError(error as Error));
    }
  };
};
