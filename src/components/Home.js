import React from "react";
import { Box, Stack } from "@mui/material";

import Sidebar from "./Sidebar";
import Feed from "./Feed";

import RightBar from "./RightBar";

function Home({ toggleTheme }) {
  return (
    <div>
      <Box>
        <Stack direction="row" spacing={2} justifyContent="space-between">
          <Sidebar toggleTheme={toggleTheme} />

          <Feed />
          <RightBar />
        </Stack>
      </Box>
    </div>
  );
}

export default Home;
