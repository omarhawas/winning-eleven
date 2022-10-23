import { useState } from "react";
import Pitch from "./components/Pitch";
import players from "./players.js";
import Search from "./components/Search";
import "bootstrap/dist/css/bootstrap.min.css";
import PlayerCards from "./components/PlayerCards";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

function App() {
  const [selectedPlayers, setSelectedPlayers] = useState([]);
  const [playersOnPitch, setPlayersOnPitch] = useState([]);

  const handleSelectedPlayerChange = (selected) => {
    setSelectedPlayers(selected);
  };

  const handleUpdatePlayersOnPitch = (player) => {
    console.log("playersOnPitch ", playersOnPitch);
    setPlayersOnPitch([...playersOnPitch, player]);
  };

  return (
    <div className="App">
      <DndProvider backend={HTML5Backend}>
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
            <Pitch
              players={players}
              playersOnPitch={playersOnPitch}
              onUpdatePlayersOnPitch={handleUpdatePlayersOnPitch}
            />
          </Col>
          <Col>
            <PlayerCards players={selectedPlayers} />
          </Col>
        </Row>
      </DndProvider>
    </div>
  );
}

export default App;
