import React from "react";

function togglePopup() {
  let popup = document.getElementById("input-popup");
  popup.classList.toggle("show");
  console.log(popup.classList);
  return;
}

export default function ToDoForm({ onSubmit }) {
  function addTask(e) {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const input = formData.get("input");
    if (input.length) {
      onSubmit(input);
    } else {
      togglePopup();
    }
  }
  return (
    <form onSubmit={addTask}>
      <div className="form">
        <div className="popup" onClick={togglePopup}>
          <p className="popup-text" id="input-popup">
            Empty entry
          </p>
        </div>
        <label className="form-label">
          Task
          <input name="text-input" type="text" className="form-text-input" />
        </label>
        <label className="form-label">
          Difficulty
          <input
            name="difficulty-input"
            type="range"
            className="form-range-input"
          />
        </label>
        <label className="form-label">
          Due Date
          <input name="date-input" type="date" className="form-date-input" />
        </label>
        <button type="form-submit-button">Add task</button>
      </div>
    </form>
  );
}
