import Button from "../utilities/Button";

export default function Controlbuttons({ onYesClick, onNoClick }) {
  return (
    <div className="buttons-container">
      <h3>Do you think you've mastered this now?</h3>
      <div>
        <Button primary onClick={onYesClick}>
          Yes
        </Button>
        <Button secondary onClick={onNoClick}>
          Not Really
        </Button>
        <Button secondary onClick={onNoClick}>
          No
        </Button>
      </div>
    </div>
  );
}
