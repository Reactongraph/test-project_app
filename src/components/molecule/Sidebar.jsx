import React, { useMemo } from "react";
import { List, ListItem, ListItemText, Typography, Box } from "@mui/material";
import styled from "styled-components";
import { theme } from "../../theme";

const SidebarContainer = styled(Box)`
  padding: ${theme.spacing(2)};
  background-color: ${theme.palette.background.paper};
  border-right: 1px solid ${theme.palette.divider};
  height: 100%;
`;

const SidebarTitle = styled(Typography)`
  margin-bottom: ${theme.spacing(2)};
  font-weight: 600;
`;

const StyledList = styled(List)`
  padding: 0;
`;

const StyledListItem = styled(ListItem)`
  border-radius: ${theme.shape.borderRadius}px;
  margin-bottom: ${theme.spacing(1)};

  &:hover {
    background-color: ${theme.palette.action.hover};
  }
`;

/**
 * Sidebar component that displays favorite projects
 * @param {Object} props - Component props
 * @param {Array<{id: string|number, name: string}>} props.favoriteProjects - List of favorite projects
 */
const Sidebar = React.memo(({ favoriteProjects }) => {
  const sortedFavorites = useMemo(
    () => [...favoriteProjects].sort((a, b) => a.name.localeCompare(b.name)),
    [favoriteProjects]
  );

  return (
    <SidebarContainer>
      <SidebarTitle variant="h6">Favorite Projects</SidebarTitle>
      <StyledList>
        {sortedFavorites.map((project) => (
          <StyledListItem key={project.id} button>
            <ListItemText primary={project.name} />
          </StyledListItem>
        ))}
      </StyledList>
    </SidebarContainer>
  );
});

Sidebar.displayName = "Sidebar";

export default Sidebar;
