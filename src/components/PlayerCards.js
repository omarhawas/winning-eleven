import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import PlayerCard from "./PlayerCard";

const PlayerCards = ({ players }) => {
  return (
    <Row>
      {players.map((player) => {
        return (
          <Col xs={2} key={player.full_name}>
            <PlayerCard player={player} />
          </Col>
        );
      })}
    </Row>
  );
};

export default PlayerCards;
