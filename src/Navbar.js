import {
  AppBar,
  Autocomplete,
  IconButton,
  styled,
  Toolbar,
  Typography,
} from "@mui/material";

import React from "react";
import HomeIcon from "@mui/icons-material/Home";
import AddIcon from "@mui/icons-material/Add";
import DevicesIcon from "@mui/icons-material/Devices";
import { Box } from "@mui/system";
import SettingsIcon from "@mui/icons-material/Settings";
import Search from "./Search";
function Navbar() {
  const StyledToolBar = styled(Toolbar)({
    display: "flex",
    backgroundColor: "yellow",
    justifyContent: "space-between",
    color: "black",
  });

  return (
    <>
      <AppBar position="sticky">
        <StyledToolBar>
          <Typography
            variant="h6"
            sx={{
              display: {
                xs: "none",
                sm: "block",
              },
            }}
          >
            IT Assets Management System
          </Typography>
          <Box>
            <IconButton href="/" alt="home">
              <HomeIcon />
            </IconButton>
            <IconButton href="/addnew">
              <AddIcon />
            </IconButton>
            <IconButton href="/assets">
              <DevicesIcon />
            </IconButton>
            <IconButton>
              <SettingsIcon />
            </IconButton>
          </Box>
          <Box>
            <IconButton>
              <SettingsIcon />
            </IconButton>
          </Box>
        </StyledToolBar>
      </AppBar>
    </>
  );
}
export default Navbar;
