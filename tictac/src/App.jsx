import { useState } from "react";
import GameBoard from "./components/GameBoard";
import Player from "./components/Player";
import Log from "./components/Log";

function App() {
  const [activePlayer, setActivePlayer] = useState("X");
  const [gameTurns, setGameTurns] = useState([]);

  const handleSelectSquare = (rowIndex, colIndex) => {
    setActivePlayer((curActivePlayer) => (curActivePlayer === "X" ? "O" : "X"));
    setGameTurns((prevTurns) => {
      let currentPlayer = 'X';
      if(prevTurns[0].player === 'X'){
        currentPlayer = 'O';
      } 

      const updatedTurns = [
        { square: { row: rowIndex, col: colIndex }, player: activePlayer },
        ...prevTurns,
      ];
    });
  };
  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player
            initialName="Player 1"
            symbol="O"
            isActive={activePlayer === "X"}
          />
          <Player
            initialName="Player 2"
            symbol="X"
            isActive={activePlayer === "O"}
          />
        </ol>
        <GameBoard
          handleSelect={handleSelectSquare}
          activePlayerSymbol={activePlayer}
          turns={gameTurns}
        />
      </div>
      <Log />
    </main>
  );
}

export default App;
