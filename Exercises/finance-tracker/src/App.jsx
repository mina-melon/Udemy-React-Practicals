import { useState } from "react";
import SideBar from "./components/SideBar";
import NoEntrySelected from "./components/NoEntrySelected";
import NewEntry from "./components/NewEntry";

function App() {
  const [entriesState, setEntriesState] = useState({
    selectedEntryId: undefined,
    entries: [],
  });
  function handleStartAddEntry() {
    setEntriesState((prev) => ({
      ...prev,
      selectedEntryId: null,
    }));
  }

  function handleSaveEntry(entryData) {
    const newEntry = {
      ...entryData,
      id: crypto.randomUUID(),
    };
    setEntriesState((prev) => ({
      ...prev,
      entries: [...prev.entries, newEntry],
      selectedEntryId: undefined,
    }));
    console.log(entriesState.entries);
  }

  function handleCancel() {
    setEntriesState((prev) => ({
      ...prev,
      selectedEntryId: undefined,
    }));
  }
  return (
    <>
      <SideBar
        entries={entriesState.entries}
        handleNewEntry={handleStartAddEntry}
      />
      {entriesState.selectedEntryId === undefined ? (
        <NoEntrySelected handleNewEntry={handleStartAddEntry} />
      ) : (
        <NewEntry handleSave={handleSaveEntry} handleCancel={handleCancel} />
      )}
    </>
  );
}

export default App;
