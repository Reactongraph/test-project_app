import React from "react";
import { Box, Typography, Grid, Paper } from "@mui/material";
import styled from "styled-components";

const DetailContainer = styled(Paper)`
  padding: ${({ theme }) => theme.spacing(3)};
  margin-bottom: ${({ theme }) => theme.spacing(3)};
`;

const DetailItem = styled(Box)`
  margin-bottom: ${({ theme }) => theme.spacing(2)};
`;

const DetailLabel = styled(Typography)`
  color: ${({ theme }) => theme.palette.text.secondary};
  font-weight: 500;
  margin-bottom: ${({ theme }) => theme.spacing(0.5)};
`;

/**
 * Component for displaying project details in read-only mode
 */
const ViewProjectDetails = ({ project }) => {
  return (
    <DetailContainer>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <DetailItem>
            <DetailLabel variant="subtitle2">Project Name</DetailLabel>
            <Typography>{project.name}</Typography>
          </DetailItem>
        </Grid>
        <Grid item xs={12} md={6}>
          <DetailItem>
            <DetailLabel variant="subtitle2">Status</DetailLabel>
            <Typography>{project.status}</Typography>
          </DetailItem>
        </Grid>
        <Grid item xs={12}>
          <DetailItem>
            <DetailLabel variant="subtitle2">Description</DetailLabel>
            <Typography>{project.description}</Typography>
          </DetailItem>
        </Grid>
      </Grid>
    </DetailContainer>
  );
};

export default ViewProjectDetails;
