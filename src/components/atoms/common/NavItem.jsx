import React from "react";
import { ListItem, ListItemText } from "@mui/material";
import { Link } from "react-router-dom";

const NavItem = ({ to, text }) => (
  <ListItem
    button
    component={Link}
    to={to}
    sx={{
      "&:hover": {
        backgroundColor: "rgba(0, 0, 0, 0.04)",
      },
    }}
  >
    <ListItemText primary={text} />
  </ListItem>
);

export default NavItem;
