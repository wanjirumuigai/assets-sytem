import { AppBar, IconButton, styled, Toolbar, Typography } from "@mui/material";

import React from "react";
import HomeIcon from "@mui/icons-material/Home";
import AddIcon from "@mui/icons-material/Add";
import DevicesIcon from "@mui/icons-material/Devices";
import { Box } from "@mui/system";
import SettingsIcon from "@mui/icons-material/Settings";
import LogoutIcon from "@mui/icons-material/Logout";
import { NavLink } from "react-router-dom";

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
            <NavLink to="/" style={{ textDecoration: "none" }}>
              <IconButton>
                <HomeIcon />
              </IconButton>
            </NavLink>
            <NavLink to="/addnew" style={{ textDecoration: "none" }}>
              <IconButton>
                <AddIcon />
              </IconButton>
            </NavLink>
            <NavLink to="/assets" style={{ textDecoration: "none" }}>
              <IconButton>
                <DevicesIcon />
              </IconButton>
            </NavLink>
            <NavLink to="/settings" style={{ textDecoration: "none" }}>
              <IconButton>
                <SettingsIcon />
              </IconButton>
            </NavLink>
          </Box>
          <Box>
            <IconButton>
              <LogoutIcon />
            </IconButton>
          </Box>
        </StyledToolBar>
      </AppBar>
    </>
  );
}
export default Navbar;
