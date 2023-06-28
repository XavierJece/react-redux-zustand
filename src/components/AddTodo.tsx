import { FormEvent, useState } from "react";

export function AddTodo() {
  const [newTodo, setNewTodo] = useState("");

  function handleAddNewTodo(event: FormEvent) {
    event.preventDefault();

    console.log(newTodo);
  }

  return (
    <form onSubmit={handleAddNewTodo}>
      <input
        type="text"
        placeholder="Novo to-do"
        onChange={(e) => setNewTodo(e.target.value)}
      />
      <button type="submit">Adicionar to-do</button>
    </form>
  );
}
