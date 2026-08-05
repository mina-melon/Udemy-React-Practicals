import Button from "../styling.Button";

export default function SideBar({ entries }) {
  return (
    <div className="sidebar">
      <h2>Finance Tracker</h2>
      <Button primary>New Entry</Button>
      <div>
        {entries.map((entry) => (
          <button key={entry.id}>{entry.name}</button>
        ))}
      </div>
    </div>
  );
}
