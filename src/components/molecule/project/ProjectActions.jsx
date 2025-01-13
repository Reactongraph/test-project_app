import React from "react";
import { Box, Button } from "@mui/material";
import styled from "styled-components";

const ActionsContainer = styled(Box)`
  display: flex;
  justify-content: flex-end;
  gap: ${({ theme }) => theme.spacing(2)};
  margin-top: ${({ theme }) => theme.spacing(3)};
`;

/**
 * Component for project action buttons
 */
const ProjectActions = ({
  onEdit,
  onDelete,
  onSave,
  onCancel,
  isEditing,
  isSaving = false,
}) => {
  if (isEditing) {
    return (
      <ActionsContainer>
        <Button variant="outlined" onClick={onCancel} disabled={isSaving}>
          Cancel
        </Button>
        <Button
          variant="contained"
          color="primary"
          onClick={onSave}
          disabled={isSaving}
        >
          {isSaving ? "Saving..." : "Save"}
        </Button>
      </ActionsContainer>
    );
  }

  return (
    <ActionsContainer>
      <Button variant="outlined" color="error" onClick={onDelete}>
        Delete
      </Button>
      <Button variant="contained" color="primary" onClick={onEdit}>
        Edit
      </Button>
    </ActionsContainer>
  );
};

export default ProjectActions;
