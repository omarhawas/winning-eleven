import Pitch from "./components/Pitch";
import players from "./players.js";
import Search from "./components/Search";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <h1>Winning Eleven</h1>
      <Search />
      <Pitch players={players} />
    </div>
  );
}

export default App;
