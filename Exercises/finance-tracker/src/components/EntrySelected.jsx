import Button from "../styling/Button";
import Savings from "./Savings";

export default function EntrySelected({
  entry,
  onDelete,
  onAddSavings,
  onDeleteSavings,
  savings,
}) {
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
      <p>Entry Due Date: {formattedDate}</p>
      <Savings
        onAdd={onAddSavings}
        onDelete={onDeleteSavings}
        savings={savings}
      />
    </div>
  );
}
