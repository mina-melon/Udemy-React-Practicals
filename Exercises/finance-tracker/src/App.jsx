import { useState } from "react";
import SideBar from "./components/SideBar";

function App() {
  const [entries, setEntries] = useState([]);
  return (
    <>
      <SideBar entries={entries} />
    </>
  );
}

export default App;
