import { Autocomplete, TextField } from "@mui/material";
import React from "react";

function Search({ assets }) {
  return (
    <div id="search">
      <Autocomplete
        freeSolo
        options={assets.map((option) => option.assetTag)}
        renderInput={(params) => (
          <TextField {...params} label="Lookup by Asset Tag" />
        )}
      />
      ;
    </div>
  );
}
export default Search;
