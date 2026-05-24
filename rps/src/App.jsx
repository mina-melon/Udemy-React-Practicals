import { useState } from "react";
import GameBoard from "./components/GameBoard";
import GameOver from "./components/GameOver";
import Header from "./components/Header";

function getComputerChoice() {
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex].name;
}

function App() {
  const [result, setResult] = useState({
    player: 0,
    computer: 0,
    win: false,
    loss: false,
    computerWins: 0,
    playerWins: 0,
    computerLoss: 0,
    playerLoss: 0,
  });

  function getResult(player) {
    const computer = getComputerChoice();
    if (player === computer) {
      return result;
    }

    if (
      (player === "rock" && computer === "scissors") ||
      (player === "paper" && computer === "rock") ||
      (player === "scissors" && computer === "paper")
    ) {
      setResult((prev) => ({
        ...prev,
        player: prev.player + 1,
        playerWins: prev.playerWins + 1,
        computerLoss: prev.computerLoss + 1,
        win: true,
        loss: false,
      }));
      return result;
    }
    setResult((prev) => ({
      ...prev,
      computer: prev.computer + 1,
      computerWins: prev.computerWins + 1,
      playerLoss: prev.playerLoss + 1,
      win: false,
      loss: true,
    }));
    return result;
  }
  return (
    <>
      <Header />
      <GameBoard />
      <GameOver />
    </>
  );
}

export default App;
