import React from "react";
import { List, ListItem } from "@mui/material";
import Title from "./Title";
import NavItem from "./NavItem";

const NavList = ({ title, items }) => (
  <List>
    <ListItem>
      <Title>{title}</Title>
    </ListItem>
    {items.map((item) => (
      <NavItem key={item.id} to={`/edit/${item.id}`} text={item.name} />
    ))}
  </List>
);

export default NavList;
