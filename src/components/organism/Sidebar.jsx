import React from "react";
import styled from "styled-components";
import { Drawer, useTheme, useMediaQuery } from "@mui/material";
import NavList from "../atoms/common/NavList";

export const SidebarContainer = styled.div`
  width: ${({ isMobile }) => (isMobile ? "100%" : "250px")};
  .MuiDrawer-paper {
    width: ${({ isMobile }) => (isMobile ? "100%" : "250px")};
    position: ${({ isMobile }) => (isMobile ? "relative" : "fixed")};
    height: ${({ isMobile }) => (isMobile ? "auto" : "100%")};
  }
`;

const Sidebar = ({ favoriteProjects }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Drawer
      variant="permanent"
      anchor={isMobile ? "top" : "left"}
      sx={{
        width: isMobile ? "100%" : "250px",
        flexShrink: 0,
      }}
    >
      <SidebarContainer isMobile={isMobile}>
        <NavList title="Favorite Projects" items={favoriteProjects} />
      </SidebarContainer>
    </Drawer>
  );
};

export default Sidebar;
