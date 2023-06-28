import { FormEvent, useState } from "react";
import { useDispatch } from "react-redux";
import { add } from "../store";

export function AddTodo() {
  const [newTodo, setNewTodo] = useState("");
  const dispatch = useDispatch();

  function handleAddNewTodo(event: FormEvent) {
    event.preventDefault();

    dispatch(add({ newTodo }));

    setNewTodo("");
  }

  return (
    <form onSubmit={handleAddNewTodo}>
      <input
        type="text"
        value={newTodo}
        placeholder="Novo to-do"
        onChange={(e) => setNewTodo(e.target.value)}
      />
      <button type="submit">Adicionar to-do</button>
    </form>
  );
}
