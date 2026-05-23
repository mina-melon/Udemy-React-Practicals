import { useState } from "react";

export default function Input({ handleChange }) {
  const [inputValue, setInputValue] = useState("New Habit");

  return (
    <section>
      <input
        className="todo-input"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button onClick={() => handleChange(inputValue)}>Add Habit</button>
    </section>
  );
}
