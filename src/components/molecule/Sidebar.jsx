import React, { useMemo } from 'react';
import { List, ListItem, ListItemText, Typography } from '@mui/material';

const Sidebar = React.memo(({ favoriteProjects }) => {
  const sortedFavorites = useMemo(() => 
    [...favoriteProjects].sort((a, b) => a.name.localeCompare(b.name)),
    [favoriteProjects]
  );

  return (
    <div>
      <Typography variant="h6" sx={{ p: 2 }}>Favorite Projects</Typography>
      <List>
        {sortedFavorites.map((project) => (
          <ListItem key={project.id}>
            <ListItemText primary={project.name} />
          </ListItem>
        ))}
      </List>
    </div>
  );
});

Sidebar.displayName = 'Sidebar';

export default Sidebar;