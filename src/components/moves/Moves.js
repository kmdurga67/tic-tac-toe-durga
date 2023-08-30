import React from "react";
import '../../index.css'

const Moves = ({ history, jumpTo }) => {
  const moves = history.map((step, move) => {
    const desc = move ? "Go to move #" + move : "Go to game start";
    return (
      <li key={move}>
        <button className="move-button" onClick={() => jumpTo(move)}>
          {desc}
        </button>
      </li>
    );
  });
  return <ul className="moves-list">{moves}</ul>;
};

export default Moves;
