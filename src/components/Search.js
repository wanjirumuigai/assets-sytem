import { Autocomplete, TextField } from "@mui/material";
import React from "react";

function Search({ handleSearch }) {
  function handleKeyUp(e) {
    handleSearch(e);
  }
  return (
    <div className="search">
      {/* For the advanced deliverables: add a checkbox to allow sorting the planeteer */}
      <label>
        <input
          onKeyUp={handleKeyUp}
          className="searchTerm"
          placeholder="Search asset..."
        ></input>
      </label>
    </div>
  );
}
export default Search;
