import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Switch,
} from "@mui/material";
import React from "react";
import DevicesIcon from "@mui/icons-material/Devices";
import MouseIcon from "@mui/icons-material/Mouse";
import PeopleIcon from "@mui/icons-material/People";
import SettingsIcon from "@mui/icons-material/Settings";
import NightlightIcon from "@mui/icons-material/Nightlight";
import AddBoxIcon from "@mui/icons-material/AddBox";

import { NavLink, useNavigate } from "react-router-dom";

function Sidebar({ toggleTheme }) {
  const history = useNavigate();
  // function handleAddItem(e) {
  //   e.preventDefault();

  //   history("/addnew");
  // }
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
      <Box position="fixed">
        <List>
          <ListItem disablePadding>
            <NavLink to="/addnew" style={{ textDecoration: "none" }}>
              <ListItemButton>
                <ListItemIcon>
                  <AddBoxIcon />
                </ListItemIcon>
                <ListItemText primary="Add New" />
              </ListItemButton>
            </NavLink>
          </ListItem>
        </List>
        <List>
          <ListItem disablePadding>
            <NavLink to="/assets" style={{ textDecoration: "none" }}>
              <ListItemButton>
                <ListItemIcon>
                  <DevicesIcon />
                </ListItemIcon>
                <ListItemText primary="Assets" />
              </ListItemButton>
            </NavLink>
          </ListItem>
        </List>
        <List>
          <ListItem disablePadding>
            <NavLink to="/consumables" style={{ textDecoration: "none" }}>
              <ListItemButton>
                <ListItemIcon>
                  <MouseIcon />
                </ListItemIcon>
                <ListItemText primary="Consumables" />
              </ListItemButton>
            </NavLink>
          </ListItem>
        </List>
        <List>
          <ListItem disablePadding>
            <NavLink to="/people" style={{ textDecoration: "none" }}>
              <ListItemButton>
                <ListItemIcon>
                  <PeopleIcon />
                </ListItemIcon>
                <ListItemText primary="People" />
              </ListItemButton>
            </NavLink>
          </ListItem>
        </List>
        <List>
          <ListItem disablePadding>
            <NavLink to="/settings" style={{ textDecoration: "none" }}>
              <ListItemButton>
                <ListItemIcon>
                  <SettingsIcon />
                </ListItemIcon>
                <ListItemText primary="Settings" />
              </ListItemButton>
            </NavLink>
          </ListItem>
        </List>
        <List>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <NightlightIcon />
              </ListItemIcon>
              <Switch onChange={toggleTheme} />
            </ListItemButton>
          </ListItem>
        </List>
      </Box>
    </Box>
  );
}
export default Sidebar;
