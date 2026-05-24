import { Origami, Scissors, Stone } from "lucide-react";
import Button from "./Button";
import { useState } from "react";

const choices = [
  { name: "rock", icon: Stone },
  { name: "paper", icon: Origami },
  { name: "scissors", icon: Scissors },
];

export default function GameBoard() {
  return (
    <section id="game-board">
      <div className="score-board">
        <div>
          <p>YOU:</p>
          <p>{result.playerWins}</p>
        </div>
        <div>
          <p>COMPUTER:</p>
          <p>{result.computerWins}</p>
        </div>
      </div>

      <div className="icon-board">
        <p className="start-text">CHOOSE AN OPTION TO START</p>
        <div>
          {choices.map((item, index) => {
            const Icon = item.icon;
            return (
              <p
                onClick={() => {
                  const player = item.name;
                  getResult(player);
                }}
                key={index}
                className="icon-container"
              >
                <Icon className="icon" />
              </p>
            );
          })}
        </div>
      </div>

      <Button>RESET SCORE</Button>
    </section>
  );
}
