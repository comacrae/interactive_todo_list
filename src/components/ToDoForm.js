import React from "react";
import { useState } from "react";
import RangeSlider from "./RangeSlider";

function togglePopup() {
  let popup = document.getElementById("input-popup");
  popup.classList.toggle("show");
  console.log(popup.classList);
  return;
}

export default function ToDoForm({ onSubmit }) {
  const [rangeVal, setRangeVal] = useState(3);
  function addTask(e) {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const textInput = formData.get("text-input");
    const difficultyInput = formData.get("difficulty-input");
    const dueDateInput = formData.get("date-input");
    onSubmit(textInput, difficultyInput, dueDateInput);
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
        <RangeSlider rangeVal={rangeVal} setRangeVal={setRangeVal} />
        <label className="form-label">
          Due Date
          <input name="date-input" type="date" className="form-date-input" />
        </label>
        <button type="form-submit-button">Add task</button>
      </div>
    </form>
  );
}
