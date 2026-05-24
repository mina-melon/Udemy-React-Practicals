import Button from "./Button";

export default function GameOver({
  showPopup,
  hidePopup,
  reset,
  message,
  playerWins,
  computerWins,
  computerChoice,
  playerChoice,
  getIcon,
}) {
  const PlayerIcon = getIcon(playerChoice);
  const ComputerIcon = getIcon(computerChoice);
  return (
    <section
      className="game-over-overlay"
      style={{ display: showPopup ? "flex" : "none" }}
    >
      <main className="game-over">
        <div className="display-winner">
          <h2>{message}</h2>
          <p>
            You Picked <PlayerIcon className="icon2" />
          </p>
          <p>
            Computer Picked <ComputerIcon className="icon2" />
          </p>
        </div>
        <div className="score-board2">
          <div>
            <p>YOU:</p>
            <p>{playerWins}</p>
          </div>
          <div>
            <p>COMPUTER:</p>
            <p>{computerWins}</p>
          </div>
        </div>

        <div className="button-container">
          <Button
            onClick={() => {
              reset();
              hidePopup();
            }}
          >
            RESET
          </Button>{" "}
          <Button onClick={hidePopup}>CONTINUE</Button>
        </div>
      </main>
    </section>
  );
}
