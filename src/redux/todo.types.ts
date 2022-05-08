export const ADD_TODO = "ADD_TODO";
export const DELETE_TODO = "DELETE_TODO";
export const CHECK_TODO = "CHECK_TODO";
export const FETCH_TODOS_START = "FETCH_TODOS_START";
export const FETCH_TODOS_SUCCESS = "FETCH_TODOS_SUCCESS";
export const FETCH_TODOS_ERROR = "FETCH_TODOS_ERROR";

export interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

export interface TodosState {
  items: Todo[];
  loading: boolean;
  error: Error | null;
}
