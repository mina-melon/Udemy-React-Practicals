import Button from "../styling/Button";
import NoEntry from "./../assets/no-projects.png";

export default function NoEntrySelected({ handleNewEntry }) {
  return (
    <main className="noentry">
      <img src={NoEntry} />
      <p>No entries selected. Click an entry to get started.</p>
      <Button secondary onClick={handleNewEntry}>
        Create New Entry
      </Button>
    </main>
  );
}
