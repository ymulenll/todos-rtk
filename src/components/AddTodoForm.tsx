import { addTodo } from "../redux/todo.slice";
import { FormEvent, useState } from "react";
import { useAppDispatch } from "../hooks/redux";

export function AddTodoForm() {
  const dispatch = useAppDispatch();
  const [text, setText] = useState("");

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (text) {
      dispatch(addTodo(text));
      setText("");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        className={"todo-input"}
        type="text"
        placeholder="Agrega una tarea..."
        autoFocus={true}
        value={text}
        onChange={(e) => setText(e.currentTarget.value)}
      />
    </form>
  );
}
