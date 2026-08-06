import Button from "../styling/Button";

export default function EntrySelected({ entry, onDelete }) {
  const formattedDate = new Date(entry.date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "2-digit",
  });
  return (
    <div className="selected-entry">
      <header>
        <div className="heading">
          <h1>{entry.title}</h1>
          <Button tertiary onClick={onDelete}>
            Delete
          </Button>
        </div>
      </header>
      <p className="whitespace-pre-wrap">{entry.description}</p>
      <p>Entry Creation Date: {formattedDate}</p>
      <div>
        <hr className="my-6 border-zinc-300 mb-2" />
        <h3>SAVINGS</h3>
      </div>
    </div>
  );
}
