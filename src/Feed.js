import { Box } from "@mui/material";
import React from "react";
import AssetsList from "./AssetsList";

function Feed() {
  return (
    <Box bgcolor="whitesmoke" flex={6} p={2}>
      <AssetsList />
    </Box>
  );
}
export default Feed;
