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
      <div className="form">
        <input name="input" className="form-input" />
        <button type="form-submit-button">Add task</button>
      </div>
    </form>
  );
}
