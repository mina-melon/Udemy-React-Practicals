import Button from "../styling/Button";

export default function SideBar({
  entries,
  handleNewEntry,
  onSelectEntry,
  selectedId,
}) {
  const generalClass =
    "mb-2 px-4 py-2 rounded-md cursor-pointer hover:bg-black/15 text-black/50 text-sm w-full text-left truncate";
  const notSelectedClass = "bg-black/20";
  const selectedClass = "bg-black/30";
  return (
    <aside className="sidebar">
      <h3>Finance Tracker</h3>
      <Button primary onClick={handleNewEntry}>
        New Entry
      </Button>
      <div className="w-full">
        {entries.map((entry) => (
          <li className="list-none w-full " key={entry.id}>
            <Button
              className={`${generalClass} ${selectedId === entry.id ? selectedClass : notSelectedClass} `}
              onClick={() => onSelectEntry(entry.id)}
            >
              {entry.title}
            </Button>
          </li>
        ))}
      </div>
    </aside>
  );
}
