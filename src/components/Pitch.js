import React, { useState } from "react";
import pitch from "./img/pitch.png";
import { useDrop } from "react-dnd";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const generatePlayerPositions = (players) => {
  let playerPositions = {};
  for (let player in players) {
    const position = player.position;
    if (position === "Goalkeeper") {
      playerPositions[player.full_name] = [5, 1];
    }
  }
  return playerPositions;
};

const PlayerOrEmpty = ({ row, col, playerPositions, players }) => {
  console.log("playerPositions", playerPositions);
  return (
    <div>
      {row}-{col}
    </div>
  );
};

const generateColumns = (row, playerPositions, players) => {
  let columns = [];
  for (let i = 0; i < 11; i++) {
    columns.push(
      <Col key={i}>
        <PlayerOrEmpty
          row={row}
          col={i}
          playerPositions={playerPositions}
          players={players}
        />
      </Col>
    );
  }
  return columns;
};

const GridLayout = ({ players }) => {
  const playerPositions = generatePlayerPositions(players);
  let grid = [];
  for (let i = 0; i < 11; i++) {
    grid.push(
      <Row key={i} style={{ height: "50px" }}>
        {generateColumns(i, playerPositions, players)}
      </Row>
    );
  }
  return grid;
};

const Pitch = (props) => {
  const [playersOnPitch, setPlayersOnPitch] = useState([]);

  const [{ canDrop, isOver }, drop] = useDrop(() => ({
    accept: "player",
    drop: (item, monitor) => {
      setPlayersOnPitch([...playersOnPitch, item]);
      console.log(`You ddddd`, item);
    },
  }));

  return (
    <div>
      <div
        ref={drop}
        style={{
          backgroundImage: `url(${pitch})`,
          height: 525,
          width: 900,
          position: "relative",
          backgroundRepeat: "round",
          backgroundColor: "#588f58",
        }}
      >
        <GridLayout players={playersOnPitch} />
        {/* <Row>
          {playersOnPitch.map((player) => {
            return (
              <Col key={player.full_name}>
                <Card style={{ width: "6rem" }}>
                  <Card.Img
                    variant="top"
                    src="https://esports-news.co.uk/wp-content/uploads/2016/09/anonymous-guy-1.jpg"
                  />
                  <Card.Body>
                    <Card.Title style={{ fontSize: "12px" }}>
                      {player.full_name}
                    </Card.Title>
                    <Card.Text style={{ fontSize: "9px" }}>
                      {player.position} {player["Current Club"]}
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            );
          })}
        </Row> */}
      </div>
    </div>
  );
};

export default Pitch;
