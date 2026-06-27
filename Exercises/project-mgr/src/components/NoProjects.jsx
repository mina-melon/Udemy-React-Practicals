import { Plus } from "lucide-react";
import NoProjectsImg from "./../assets/no-projects.png";
import Button from "./Button";

export default function NoProjects({ handleAdd }) {
  return (
    <section className="no-projects">
      <img src={NoProjectsImg} />
      <p>
        You have no active project. Click or create a new one to get started.
      </p>
      <p>
        <Button primary="true" onClick={handleAdd}>
          <Plus size={"14px"} />
          Get Started
        </Button>
      </p>
    </section>
  );
}
