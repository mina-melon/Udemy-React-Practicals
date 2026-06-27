import { useState } from "react";
import AddProject from "./components/AddProjects";
import NoProjects from "./components/NoProjects";
import SideBar from "./components/Sidebar";

function App() {
  const [projectsState, setProjectsState] = useState({
    selectedProjectId: undefined,
    projects: [],
  });

  function handleAddProject() {
    setProjectsState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: null,
      };
    });
  }

  function handleCreate(projectData) {
    const newProject = {
      ...projectData,
      id: crypto.randomUUID(),
    };
    setProjectsState((prev) => {
      return {
        ...prev,
        projects: [...projectsState.projects, newProject],
      };
    });
    console.log(projectsState.projects);
  }

  function handleCancel() {
    setProjectsState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: undefined,
      };
    });
  }

  let content;

  if (projectsState.selectedProjectId === null) {
    content = (
      <AddProject handleCancel={handleCancel} handleSave={handleCreate} />
    );
  } else if (projectsState.selectedProjectId === undefined) {
    content = <NoProjects handleAdd={handleAddProject} />;
  }
  return (
    <main className="flex h-dvh w-full">
      <SideBar projects={projectsState.projects} handleAdd={handleAddProject} />
      {content}
    </main>
  );
}

export default App;
