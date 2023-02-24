import { Box } from "@mui/material";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function RightBar() {
  const [assets, setAssets] = useState([]);

  const url = "http://localhost:4000/assets";
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setAssets(data);
      });
  }, []);

  return (
    <Box
      bgcolor="skyblue"
      color="black"
      flex={1}
      p={1}
      sx={{
        display: {
          xs: "none",
          sm: "block",
        },
      }}
    >
      <h2>Click to view</h2>
      <p>
        {assets.map((asset) => {
          return (
            <>
              <ul key={asset.id} className="view-asset">
                <Link to={`/assets/${asset.id}`}>
                  <li>{`${asset.id} ${asset.assetName}`}</li>{" "}
                </Link>
              </ul>
            </>
          );
        })}
      </p>
    </Box>
  );
}
export default RightBar;
