import React from "react";

const PlayerCards = ({ players }) => {
  return (
    <div>
      {players.map((player) => {
        return <div key={player.full_name}>{player.full_name}</div>;
      })}
    </div>
  );
};

export default PlayerCards;
