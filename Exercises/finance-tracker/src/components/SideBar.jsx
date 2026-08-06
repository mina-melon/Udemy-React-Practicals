import Button from "../styling/Button";

export default function SideBar({ entries, handleNewEntry }) {
  return (
    <div className="sidebar">
      <h3>Finance Tracker</h3>
      <Button primary onClick={handleNewEntry}>
        New Entry
      </Button>
      <div>
        {entries.map((entry) => (
          <li className="list-none" key={entry.id}>
            <Button secondary>{entry.title}</Button>
          </li>
        ))}
      </div>
    </div>
  );
}
