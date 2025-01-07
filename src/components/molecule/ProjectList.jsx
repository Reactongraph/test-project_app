// components/ProjectList.jsx
import React, { useCallback, useMemo } from "react";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { projectTableHeads } from "../../utils/constants";
import CustomTable from "../atoms/common/CustomTable";

const ProjectList = ({ projects }) => {
  const navigate = useNavigate();

  const renderActions = (project) => (
    <Button variant="contained" onClick={() => navigate(`/edit/${project.id}`)}>
      Edit
    </Button>
  );

  return (
    <CustomTable
      columns={projectTableHeads}
      data={projects}
      renderActions={renderActions}
    />
  );
};

export default ProjectList;
