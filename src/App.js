import { useState } from "react";
import Pitch from "./components/Pitch";
import players from "./players.js";
import Search from "./components/Search";
import "bootstrap/dist/css/bootstrap.min.css";
import PlayerCards from "./components/PlayerCards";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function App() {
  const [selectedPlayers, setSelectedPlayers] = useState([]);

  const handleSelectedPlayerChange = (selected) => {
    setSelectedPlayers(selected);
  };

  return (
    <div className="App">
      <h1>Winning Eleven</h1>
      <Row>
        <Col>
          <Search
            selectedPlayers={selectedPlayers}
            onSelectedPlayerChange={handleSelectedPlayerChange}
          />
        </Col>
      </Row>
      <Row>
        <Col>
          <Pitch players={players} />
        </Col>
        <Col>
          <PlayerCards players={selectedPlayers} />
        </Col>
      </Row>
    </div>
  );
}

export default App;
