import React from "react";
import Bored from "./Bored";

const Game = () => {
  const status = "Next player is X";
  const moves = (
    <li>
      <button>Start the Game</button>
    </li>
  );
  const squares = Array(9).fill(null);
  return (
    <div className="game">
      <div className="game-bored">
        <Bored squares={squares}></Bored>
      </div>
      <div className="game-info">
        <div>{status}</div>
        <ul>{moves}</ul>
      </div>
    </div>
  );
};

export default Game;
