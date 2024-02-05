import React from "react";
import { useState } from "react";

export default function RangeSlider({ rangeVal, setRangeVal }) {
  function updateValue() {
    const rangeInput = document.getElementById("difficulty-range");
    setRangeVal(rangeInput.value);
  }
  return (
    <label className="form-label">
      Difficulty: {rangeVal}
      <input
        id="difficulty-range"
        name="difficulty-input"
        type="range"
        className="form-range-input"
        min={1}
        max={5}
        step={1}
        value={rangeVal}
        onChange={updateValue}
      />
    </label>
  );
}
