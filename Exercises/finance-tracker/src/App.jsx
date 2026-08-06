import { useState } from "react";
import SideBar from "./components/SideBar";
import NoEntrySelected from "./components/NoEntrySelected";
import NewEntry from "./components/NewEntry";
import EntrySelected from "./components/EntrySelected";

function App() {
  // entries state
  const [entriesState, setEntriesState] = useState({
    selectedEntryId: undefined,
    entries: [],
    savings: [],
  });

  // make the create new entry button functional
  function handleStartAddEntry() {
    setEntriesState((prev) => ({
      ...prev,
      selectedEntryId: null,
    }));
  }

  // make the save button functional
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
  }

  // make the cancel button functional
  function handleCancel() {
    setEntriesState((prev) => ({
      ...prev,
      selectedEntryId: undefined,
    }));
  }

  // make the sidebar entries clickable and open to show the entry details
  function handleSelectEntry(id) {
    setEntriesState((prev) => ({
      ...prev,
      selectedEntryId: id,
    }));
  }

  // get the selected entry id
  const selectedEntry = entriesState.entries.find(
    (entry) => entry.id === entriesState.selectedEntryId,
  );

  // make delete button functional
  function handleDelete() {
    setEntriesState((prev) => ({
      ...prev,
      selectedEntryId: undefined,
      entries: prev.entries.filter(
        (entry) => entry.id !== prev.selectedEntryId,
      ),
    }));
  }

  // add new savings to entry
  function handleAddSavings(text) {
    const today = new Date();
    setEntriesState((prev) => {
      const newSavings = {
        savings: text,
        date: today,
        id: crypto.randomUUID(),
        entryId: prev.selectedEntryId,
      };
      return {
        ...prev,
        savings: [newSavings, ...prev.savings],
      };
    });
  }

  // get savings for current entry
  const currentSavings = entriesState.savings.filter(
    (saving) => saving.entryId === entriesState.selectedEntryId,
  );

  // remove savings from entry
  function handleDeleteSavings(id) {
    setEntriesState((prev) => ({
      ...prev,
      savings: prev.savings.filter((saving) => saving.id !== id),
    }));
  }

  // display dynamic content
  let content = (
    <EntrySelected
      entry={selectedEntry}
      onDelete={handleDelete}
      onAddSavings={handleAddSavings}
      onDeleteSavings={handleDeleteSavings}
      savings={currentSavings}
    />
  );
  if (entriesState.selectedEntryId === undefined) {
    content = <NoEntrySelected handleNewEntry={handleStartAddEntry} />;
  } else if (entriesState.selectedEntryId === null) {
    content = (
      <NewEntry handleSave={handleSaveEntry} handleCancel={handleCancel} />
    );
  }
  return (
    <>
      <SideBar
        entries={entriesState.entries}
        handleNewEntry={handleStartAddEntry}
        onSelectEntry={handleSelectEntry}
        selectedId={entriesState.selectedEntryId}
      />
      {content}
    </>
  );
}

export default App;
