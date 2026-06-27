import Button from "./Button";
import { Plus } from "lucide-react";

export default function SideBar({ projects, handleAdd }) {
  return (
    <section className="sidebar">
      <h2>YOUR PROJECTS</h2>
      <menu>
        {projects.length > 1 ? (
          <ul>
            {projects.map((project) => (
              <li key={project.id}>
                <button>{project.title}</button>
              </li>
            ))}
          </ul>
        ) : (
          <div>
            <p className="text-white mb-4">No projects added yet.</p>
            <Button primary="true" onClick={handleAdd}>
              <Plus size={"14px"} />
              Add Project
            </Button>
          </div>
        )}
      </menu>
    </section>
  );
}
