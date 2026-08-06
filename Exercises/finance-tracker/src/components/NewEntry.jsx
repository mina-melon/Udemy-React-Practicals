import { useRef } from "react";
import Button from "../styling/Button";
import Input from "../styling/Input";
import Modal from "./Modal";

export default function NewEntry({ handleSave, handleCancel }) {
  const titleRef = useRef();
  const descriptionRef = useRef();
  const dateRef = useRef();
  const modal = useRef();

  function handleSaveEntry() {
    const title = titleRef.current.value;
    const description = descriptionRef.current.value;
    const date = dateRef.current.value;

    if (
      title.trim() === "" ||
      description.trim() === "" ||
      date.trim() === ""
    ) {
      modal.current.open();
      return;
    }

    const newEntry = {
      title: title,
      description: description,
      date: date,
    };
    handleSave(newEntry);
  }

  return (
    <main className="addentry">
      <Modal ref={modal}>
        <h2>Invalid Field</h2>
        <p>Oops looks like your form isn't complete</p>
        <p>Make sure to fill in all the fields.</p>
      </Modal>
      <Input ref={titleRef} label="title" />
      <Input ref={descriptionRef} label="description" textarea />
      <Input ref={dateRef} label="due date" type="date" />
      <div className="btn-container">
        <Button secondary onClick={handleCancel}>
          Cancel
        </Button>
        <Button primary onClick={handleSaveEntry}>
          Save
        </Button>
      </div>
    </main>
  );
}
