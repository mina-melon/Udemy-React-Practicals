export default function HabitList({
  habits,
  handleDone,
  handleDelete,
  percent,
  clearCompleted,
}) {
  return (
    <section>
      {habits.map((habit) => {
        return (
          <div key={habit.id} className="habit-list">
            <p>{habit.habit}</p>
            {habit.done ? <p>Done</p> : <p>Not Done</p>}
            <button onClick={() => handleDone(habit.id)}>
              {habit.done ? "Mark Undone" : "Mark Done"}
            </button>
            <button onClick={() => handleDelete(habit)}>Delete</button>
          </div>
        );
      })}
      <p className="percent">Percentage Completed: {percent}%</p>
      <button onClick={clearCompleted}>Clear Completed</button>
    </section>
  );
}
