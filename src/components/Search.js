import React, { useState } from "react";
import { Typeahead } from "react-bootstrap-typeahead";
import "react-bootstrap-typeahead/css/Typeahead.css";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import players from "../players";

// var Typeahead = require("react-bootstrap-typeahead").Typeahead;

const Search = () => {
  const [selectedPlayers, setSelectedPlayers] = useState([]);

  const handleClick = () => {
    setSelectedPlayers();
    console.log("selected", selectedPlayers);
  };

  return (
    <>
      <Form.Group>
        <Form.Label>Search for players</Form.Label>
        <Typeahead
          id="basic-typeahead-single"
          multiple={true}
          labelKey="full_name"
          options={players}
          placeholder="Search..."
          defaultSelected={selectedPlayers}
        />
        <Button variant="success" onClick={handleClick}>
          Submit
        </Button>
      </Form.Group>
    </>
  );
};

export default Search;
