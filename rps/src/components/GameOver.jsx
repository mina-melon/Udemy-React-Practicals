import { Stone } from "lucide-react";
import Button from "./Button";

export default function GameOver() {
  return (
    <section className="game-over-overlay">
      <main className="game-over">
        <div className="display-winner">
          <h2>You Won!</h2>
          <p>
            Computer Picked <Stone className="icon2" />
          </p>
        </div>
        <div className="score-board2">
          <div>
            <p>YOU:</p>
            <p>1</p>
          </div>
          <div>
            <p>COMPUTER:</p>
            <p>1</p>
          </div>
        </div>

        <div className="button-container">
          <Button>RESET</Button> <Button>CONTINUE</Button>
        </div>
      </main>
    </section>
  );
}
