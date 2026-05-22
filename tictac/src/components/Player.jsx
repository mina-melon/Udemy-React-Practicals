import { useState } from "react";

export default function Player({ initialName, symbol, isActive }) {
  const [isEditing, setIsEditing] = useState(false);
  const [playerName, setPlayerName] = useState(initialName);
  const handleClick = () => {
    setIsEditing((prev) => !prev);
  };

  const handleChange = (event) => {
    setPlayerName(event.target.value);
  };

  const playerClass = !isEditing ? "player-name" : "";
  const editablePlayerName = isEditing ? (
    <input
      type="text"
      required
      value={playerName}
      onChange={(e) => handleChange(e)}
    />
  ) : (
    <span className={playerClass}>{playerName}</span>
  );
  return (
    <li className={isActive ? 'active' : undefined }>
      <span className="player ">
        {editablePlayerName}
        <span className="player-symbol">{symbol}</span>
        <button onClick={handleClick}>{isEditing ? "Save" : "Edit"}</button>
      </span>
    </li>
  );
}
