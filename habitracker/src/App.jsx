import { useState } from "react";
import "./App.css";
import Input from "./components/Input";
import HabitList from "./components/HabitList";

const HabitListList = [
  { id: 0, habit: "read", done: false },
  { id: 1, habit: "sleep", done: false },
];

function App() {
  const [habit, setHabit] = useState([...HabitListList]);

  function handleChange(newHabit) {
    setHabit((prevHabits) => [
      ...prevHabits,
      {
        id: Math.random(),
        habit: newHabit,
        done: false,
      },
    ]);
  }

  function handleDone(id) {
    setHabit((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, done: !item.done } : item,
      ),
    );
  }

  function handleDelete(habit) {
    setHabit((prev) => prev.filter((item) => item !== habit));
  }

  const completedCount = habit.filter((h) => h.done === true).length;
  const total = habit.length;
  const percent = total === 0 ? 0 : (completedCount / total) * 100;

  function clearCompleted() {
    setHabit((prev) => prev.filter((item) => item.done === false));
  }

  console.log(habit);
  return (
    <>
      <section>
        <h1>Habit Tracker</h1>
        <Input handleChange={handleChange} />
        <HabitList
          habits={habit}
          handleDone={handleDone}
          handleDelete={handleDelete}
          percent={percent}
          clearCompleted={clearCompleted}
        />
      </section>
    </>
  );
}

export default App;
