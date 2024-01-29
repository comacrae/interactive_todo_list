import React from "react";

export default function ToDoForm({ onSubmit }) {
  function addTask(e) {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const input = formData.get("input");
    onSubmit(input);
  }
  return (
    <form onSubmit={addTask}>
      <label>
        <input name="input" />
      </label>
      <button type="submit">Add task</button>
    </form>
  );
}
