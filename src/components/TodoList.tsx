import { useEffect } from "react";
import { getTodos } from "../redux/todo.slice";
import { TodoItem } from "./TodoItem";
import { useAppDispatch, useAppSelector } from "../hooks/redux";

export function TodoList() {
  const loading = useAppSelector((state) => state.todos.loading);
  const todos = useAppSelector((state) => state.todos.items);

  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getTodos());
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
