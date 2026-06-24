import { useState } from "react";
import AddProject from "./components/AddProjects";
import NoProjects from "./components/NoProjects";
import SideBar from "./components/Sidebar";

function App() {
  const [projects, setProjects] = useState([]);

  function handleCreate(title, description, duedate) {
    const id = Math.Random();
    setProjects((prevProjects) => [
      ...prevProjects,
      {
        id: id,
        title: "Test",
        description: "This is a test",
        duedate: "23/04/2026",
      },
    ]);
    console.log(projects);
  }
  return (
    <main className="flex h-dvh w-full">
      <SideBar projects={projects} />
      {/* <NoProjects /> */}
      <AddProject handleSubmit={handleCreate} />
    </main>
  );
}

export default App;
