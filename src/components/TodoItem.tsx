import { useAppDispatch } from "../hooks/redux";
import { deleteTodo, checkTodo } from "../redux/todo.slice";
import { Todo } from "../redux/todo.types";

interface Props {
  todo: Todo;
}

export function TodoItem({ todo }: Props) {
  const dispatch = useAppDispatch();
  return (
    <li className={todo.completed ? "completed" : ""}>
      <input
        className="toggle-todo"
        type="checkbox"
        checked={todo.completed}
        onChange={() => dispatch(checkTodo(todo.id))}
      />
      <span className="todo-text">{todo.text}</span>
      <button
        className="delete-todo"
        onClick={() => dispatch(deleteTodo(todo.id))}
      />
    </li>
  );
}
