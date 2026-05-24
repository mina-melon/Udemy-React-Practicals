import { useState } from "react";
import GameBoard from "./components/GameBoard";
import GameOver from "./components/GameOver";
import Header from "./components/Header";
import { Origami, Scissors, Stone } from "lucide-react";

const choices = [
  { name: "rock", icon: Stone },
  { name: "paper", icon: Origami },
  { name: "scissors", icon: Scissors },
];

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
    computerChoice: "rock",
    playerChoice: "rock",
  });

  const [showPopup, setPopup] = useState(false);
  const [message, setMessage] = useState("");

  function getIcon(choice) {
    if (choice === "rock") {
      return Stone;
    }
    if (choice === "paper") {
      return Origami;
    }
    if (choice === "scissors") {
      return Scissors;
    }
  }

  function hidePopup() {
    setPopup(false);
  }

  function resetResults() {
    setResult((prev) => ({
      ...prev,
      player: 0,
      computer: 0,
      win: false,
      loss: false,
      computerWins: 0,
      playerWins: 0,
      computerLoss: 0,
      playerLoss: 0,
      computerChoice: "rock",
      playerChoice: "rock",
    }));
  }

  function getResult(player) {
    const computer = getComputerChoice();
    if (player === computer) {
      setResult((prev) => ({
        ...prev,
        computerChoice: computer,
        playerChoice: player,
      }));
      setMessage("It's a Draw");
      setPopup(true);
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
        computerChoice: computer,
        playerChoice: player,
      }));
      setMessage("You Won!");
      setPopup((prev) => !prev);
      return result;
    }
    setResult((prev) => ({
      ...prev,
      computer: prev.computer + 1,
      computerWins: prev.computerWins + 1,
      playerLoss: prev.playerLoss + 1,
      win: false,
      loss: true,
      computerChoice: computer,
      playerChoice: player,
    }));
    setMessage("You lost!");
    setPopup((prev) => !prev);
    return result;
  }
  return (
    <>
      <Header />
      <GameBoard
        getResult={getResult}
        result={result}
        choices={choices}
        reset={resetResults}
      />
      <GameOver
        hidePopup={hidePopup}
        showPopup={showPopup}
        reset={resetResults}
        message={message}
        playerWins={result.playerWins}
        computerWins={result.computerWins}
        computerChoice={result.computerChoice}
        playerChoice={result.playerChoice}
        getIcon={getIcon}
      />
    </>
  );
}

export default App;
