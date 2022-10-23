import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import { useDrag } from "react-dnd";

const PlayerCard = ({ player }) => {
  const [playerOnField, setPlayerOnField] = useState(false);

  const [{ isDragging }, drag] = useDrag(() => ({
    type: "player",
    item: player,
    end: (item, monitor) => {
      const dropResult = monitor.getDropResult();
      if (item && dropResult) {
        setPlayerOnField(true);
        console.log(`You dropped`, item);
      }
    },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
      handlerId: monitor.getHandlerId(),
    }),
  }));

  const opacity = isDragging || playerOnField ? 0.4 : 1;

  return (
    <Card style={{ width: "6rem", opacity: opacity }} ref={drag}>
      <Card.Img
        variant="top"
        src="https://esports-news.co.uk/wp-content/uploads/2016/09/anonymous-guy-1.jpg"
      />
      <Card.Body>
        <Card.Title style={{ fontSize: "12px" }}>{player.full_name}</Card.Title>
        <Card.Text style={{ fontSize: "9px" }}>
          {player.position} {player["Current Club"]}
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default PlayerCard;
