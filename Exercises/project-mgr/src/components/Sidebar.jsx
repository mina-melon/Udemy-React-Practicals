import Button from "./Button";

export default function SideBar({ projects }) {
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
            <Button primary="true">Create Project</Button>
          </div>
        )}
      </menu>
    </section>
  );
}
