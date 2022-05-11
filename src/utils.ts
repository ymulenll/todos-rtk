import { Todo } from "./redux/todo.types";

export const getMaxTodoId = (todos: Todo[]) => {
  return todos.reduce((maxId, todo) => {
    return Math.max(maxId, todo.id);
  }, 0);
};
