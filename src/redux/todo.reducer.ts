import {
  ADD_TODO,
  CHECK_TODO,
  DELETE_TODO,
  FETCH_TODOS_START,
  FETCH_TODOS_ERROR,
  FETCH_TODOS_SUCCESS,
  TodosState,
} from "./todo.types";
import { getMaxTodoId } from "../utils";

const initialState: TodosState = {
  items: [],
  loading: false,
  error: null,
};

export default function todoReducer(state = initialState, action: any) {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        items: [
          ...state.items,
          {
            text: action.payload,
            completed: false,
            id: getMaxTodoId(state.items) + 1,
          },
        ],
      };
    case DELETE_TODO:
      return {
        ...state,
        items: state.items.filter((item) => item.id !== action.payload),
      };
    case CHECK_TODO:
      return {
        ...state,
        items: state.items.map((todo) =>
          todo.id === action.payload
            ? { ...todo, completed: !todo.completed }
            : todo
        ),
      };
    case FETCH_TODOS_START:
      return {
        ...state,
        loading: true,
        error: null,
        items: [],
      };
    case FETCH_TODOS_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        items: action.payload,
      };
    case FETCH_TODOS_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
        items: [],
      };

    default:
      return state;
  }
}
