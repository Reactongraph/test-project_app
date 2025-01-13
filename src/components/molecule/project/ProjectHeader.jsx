import React from "react";
import { Box, Typography, Button } from "@mui/material";
import styled from "styled-components";

const HeaderContainer = styled(Box)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: ${({ theme }) => theme.spacing(3)};
`;

const ProjectHeader = ({ title, onSave, onCancel, isEditing }) => {
  return (
    <HeaderContainer>
      <Typography variant="h4" component="h1">
        {title}
      </Typography>
      <Box>
        {isEditing && (
          <>
            <Button onClick={onCancel} variant="outlined" sx={{ mr: 1 }}>
              Cancel
            </Button>
            <Button onClick={onSave} variant="contained" color="primary">
              Save
            </Button>
          </>
        )}
      </Box>
    </HeaderContainer>
  );
};

export default ProjectHeader;
