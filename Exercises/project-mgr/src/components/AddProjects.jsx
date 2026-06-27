import { useRef } from "react";
import Button from "./Button";
import Input from "./Input";

export default function AddProject({ handleSave, handleCancel }) {
  const titleRef = useRef();
  const descriptionRef = useRef();
  const dueDateRef = useRef();

  function handleSaveFtn() {
    const title = titleRef.current.value;
    const description = descriptionRef.current.value;
    const duedate = dueDateRef.current.value;
    const newProject = {
      title: title,
      description: description,
      dueDate: duedate,
    };
    handleSave(newProject);
  }
  return (
    <section className="add-project">
      <h2>Create Project</h2>
      <form className="input-form">
        <Input label="Title" ref={titleRef} type="text" />
        <Input label="Description" textarea ref={descriptionRef} />
        <Input label="Due Date" ref={dueDateRef} type="date" />
      </form>
      <div className="flex flex-row gap-3 justify-end">
        <Button primary="true" onClick={handleSaveFtn}>
          Create
        </Button>
        <Button onClick={handleCancel}>Cancel</Button>
      </div>
    </section>
  );
}
