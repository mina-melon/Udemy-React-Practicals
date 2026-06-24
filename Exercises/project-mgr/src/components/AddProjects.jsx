import { useRef } from "react";
import Button from "./Button";

export default function AddProject({ handleSubmit }) {
  const titleRef = useRef();
  const descriptionRef = useRef();
  const dueDateRef = useRef();

  return (
    <section className="add-project">
      <h2>Create Project</h2>
      <form className="input-form">
        <div className="input-container">
          <label>TITLE</label>
          <input type="text" ref={titleRef} />
        </div>
        <div className="input-container">
          <label>Description</label>
          <textarea ref={descriptionRef} />
        </div>
        <div className="input-container">
          <label>Due Date</label>
          <input type="date" ref={dueDateRef} />
        </div>
        <div className="flex flex-row gap-3 justify-end">
          <Button
            primary="true"
            onClick={() => {
              const title = titleRef.current.value;
              const description = descriptionRef.current.value;
              const dueDate = dueDateRef.current.value;
              console.log(title, description, dueDate);
            }}
          >
            Create
          </Button>
          <Button>Cancel</Button>
        </div>
      </form>
    </section>
  );
}
