import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { TodosState } from "../redux/todo.types";
import { getTodos } from "../redux/todo.actions";
import { TodoItem } from "./TodoItem";

export function TodoList() {
  const loading = useSelector(
    (state: { todos: TodosState }) => state.todos.loading
  );
  const todos = useSelector(
    (state: { todos: TodosState }) => state.todos.items
  );

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getTodos() as any);
  }, [dispatch]);

  if (loading) {
    return (
      <div className="spinner">
        <i className="fa fa-spinner fa-spin fa-4x"></i>
      </div>
    );
  }

  return (
    <ul className="todo-list">
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </ul>
  );
}
