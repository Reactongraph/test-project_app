import React, { useCallback, useEffect, useState, useMemo } from "react";
import { useNavigate, useParams } from "react-router-dom";
import EditProjectForm from "../molecule/EditProjectForm";
import { Box, CircularProgress } from "@mui/material";
import ErrorMessage from "../../components/atoms/common/ErrorMessage";
import { api } from "../../services/project-api";

/**
 * Project editing component that handles form display and submission
 * Includes error handling and responsive design
 * @param {Object} props Component props
 * @param {Array} props.projects List of all projects
 * @param {Function} props.onSave Callback function for save operation
 */
const ProjectEdit = ({ projects, onSave }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [project, setProject] = useState(null);

  useMemo(() => projects.find((p) => p.id === parseInt(id)), [projects, id]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch project data
  useEffect(() => {
    const fetchProject = async () => {
      try {
        setLoading(true);
        setError(null);
        const response = await api.getProjects();
        const foundProject = response.find((p) => p.id === id);

        if (!foundProject) {
          throw new Error("Project not found");
        }

        setProject(foundProject);
      } catch (err) {
        setError(err.message || "Failed to fetch project");
        console.error("Error fetching project:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchProject();
  }, [id]);

  const handleSave = useCallback(
    async (formData) => {
      try {
        setError(null);

        // Update project
        const updatedProject = await api.updateProject(formData);

        // Check if project is in favorites and update if necessary
        const favorites = await api.getFavoriteProjects();
        const isFavorite = favorites.find((fav) => fav.id === formData.id);

        if (isFavorite) {
          await api.updateFavoriteProject({
            id: formData.id,
            name: formData.name,
          });
        }

        // Call the onSave prop to update parent component state
        if (onSave) {
          onSave(updatedProject);
        }

        navigate("/");
      } catch (err) {
        setError(err.message || "Failed to save project");
        console.error("Error saving project:", err);
      }
    },
    [navigate]
  );

  if (loading) {
    return (
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        minHeight="200px"
      >
        <CircularProgress />
      </Box>
    );
  }

  if (error) {
    return (
      <Box m={2}>
        <ErrorMessage message={error} />
      </Box>
    );
  }

  return <EditProjectForm initialData={project} onSubmit={handleSave} />;
};

export default ProjectEdit;
