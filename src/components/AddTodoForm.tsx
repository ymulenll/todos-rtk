import { useDispatch } from "react-redux";
import { addTodo } from "../redux/todo.actions";
import { FormEvent, useState } from "react";

export function AddTodoForm() {
  const dispatch = useDispatch();
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
