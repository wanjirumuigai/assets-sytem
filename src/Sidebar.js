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

import { useNavigate } from "react-router-dom";

function Sidebar() {
  const history = useNavigate();
  function handleAddItem(e) {
    e.preventDefault();

    history("/addnew");
  }
  return (
    <Box
      bgcolor="skyblue"
      flex={1}
      p={1}
      sx={{
        display: {
          xs: "none",
          sm: "block",
        },
      }}
    >
      <List>
        <ListItem disablePadding onClick={handleAddItem}>
          <ListItemButton component="a" href="/addnew">
            <ListItemIcon>
              <AddBoxIcon />
            </ListItemIcon>
            <ListItemText primary="Add New" />
          </ListItemButton>
        </ListItem>
      </List>
      <List>
        <ListItem disablePadding>
          <ListItemButton component="a" href="/assets">
            <ListItemIcon>
              <DevicesIcon />
            </ListItemIcon>
            <ListItemText primary="Assets" />
          </ListItemButton>
        </ListItem>
      </List>
      <List>
        <ListItem disablePadding>
          <ListItemButton component="a" href="/consumables">
            <ListItemIcon>
              <MouseIcon />
            </ListItemIcon>
            <ListItemText primary="Consumables" />
          </ListItemButton>
        </ListItem>
      </List>
      <List>
        <ListItem disablePadding>
          <ListItemButton component="a" href="/people">
            <ListItemIcon>
              <PeopleIcon />
            </ListItemIcon>
            <ListItemText primary="People" />
          </ListItemButton>
        </ListItem>
      </List>
      <List>
        <ListItem disablePadding>
          <ListItemButton component="a" href="/settings">
            <ListItemIcon>
              <SettingsIcon />
            </ListItemIcon>
            <ListItemText primary="Settings" />
          </ListItemButton>
        </ListItem>
      </List>
      <List>
        <ListItem disablePadding>
          <ListItemButton component="a" href="/settings">
            <ListItemIcon>
              <NightlightIcon />
            </ListItemIcon>
            <Switch />
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );
}
export default Sidebar;
