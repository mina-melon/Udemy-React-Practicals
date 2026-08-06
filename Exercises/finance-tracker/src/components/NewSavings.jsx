import { useState } from "react";
import Button from "../styling/Button";

export default function NewSavings({ onAdd }) {
  const [enteredSavings, setEnteredSavings] = useState("");
  function getEnteredSavings(e) {
    setEnteredSavings(e.target.value);
  }

  function handleAdd() {
    onAdd(enteredSavings);
    setEnteredSavings("");
  }
  return (
    <div className="mb-2">
      <input
        type="number"
        className="px-2 py-4 border-b-3 border-olive-700/50 bg-olive-200 w-[60%] h-4 hover:outline-0 hover:border-olive-700 text-xs"
        onChange={getEnteredSavings}
        value={enteredSavings}
      />
      <Button disappearing onClick={handleAdd}>
        Add Savings
      </Button>
    </div>
  );
}
