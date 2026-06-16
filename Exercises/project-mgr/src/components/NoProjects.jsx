import NoProjectsImg from "./../assets/no-projects.png";

export default function NoProjects() {
  return (
    <section className="no-projects">
      <img src={NoProjectsImg} />
      <p>
        You have no active project. Click or create a new one to get started.
      </p>
    </section>
  );
}
