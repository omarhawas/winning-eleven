import React from "react";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const PlayerCards = ({ players }) => {
  return (
    <Row>
      {players.map((player) => {
        return (
          <Col xs={2} key={player.full_name}>
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
    </Row>
  );
};

export default PlayerCards;
