import React from "react";

const GameInfo = ({ status, winner, xIsNext }) => {
  return (
    <section className="game-information">
       {status === "Winner: X" && winner ? (
        <h3 className="player-x">Nice! I won this match😍!</h3>
      ): winner && status === "Winner: O" ? (
        <h3 className="player-o">Wohoo! I made it🙌!</h3>
      ): status === "Draw" ? (
        <h3 className="player-o">Oops! Match is draw. We have to play again O!! 😵 </h3>
      ) : xIsNext && !winner ? (
        <h3 className="player-x">It's your turn, player X</h3>
      ) : !xIsNext && !winner ? (
        <h3 className="player-o">Now your turn, player O! </h3>
      ) : (
        <h3>Start the match</h3>
      )}
      {/* {xIsNext && !winner ? (
        <h3 className="player-x">It's your turn, player X</h3>
      ) : !xIsNext && !winner ? (
        <h3 className="player-o">Now your turn, player O! </h3>
      ) : winner && status === "Winner: X" ? (
        <h3 className="player-x">Nice! I won this match! </h3>
      ) : winner && status === "Winner: O" ? (
        <h3 className="player-o">Wohoo! I made it!</h3>
      ) : !xIsNext &&
        !winner &&
        status !== "Winner: X" &&
        status !== "Winner: O" ? (
        <h3 className="player-o">Oops! Match is draw</h3>
      ) : (
        <h3>Start the match</h3>
      )} */}
      <img
        src="https://raw.githubusercontent.com/catherineisonline/tic-tac-toe/main/src/assets/images/friends.webp"
        alt="Player X and Player O"
      />
    </section>
  );
};

export default GameInfo;
