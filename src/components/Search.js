import React, { useState } from "react";
import { Typeahead } from "react-bootstrap-typeahead";
import "react-bootstrap-typeahead/css/Typeahead.css";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import players from "../players";

// var Typeahead = require("react-bootstrap-typeahead").Typeahead;

const Search = ({ selectedPlayers, onSelectedPlayerChange }) => {
  const handlePlayerChange = (selected) => {
    onSelectedPlayerChange(selected);
    console.log("selected", selected);
  };

  return (
    <>
      <Form.Group>
        <Form.Label>Search for players</Form.Label>
        <Typeahead
          id="basic-typeahead-single"
          labelKey={(option) => `${option.full_name} (${option.position})`}
          options={players}
          placeholder="Search..."
          multiple={true}
          onChange={handlePlayerChange}
          selected={selectedPlayers}
          filterBy={["full_name"]}
        />
      </Form.Group>
    </>
  );
};

export default Search;
