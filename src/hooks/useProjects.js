import { useEffect, useState } from "react";
import { api } from "../services/project-api";

/**
 * Custom hook for managing projects and favorite projects
 * @returns {Object} Projects state and handlers
 */
export const useProjects = () => {
  const [projects, setProjects] = useState([]);
  const [favoriteProjects, setFavoriteProjects] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [projectsData, favoritesData] = await Promise.all([
          api.getProjects(),
          api.getFavoriteProjects(),
        ]);

        setProjects(projectsData);
        setFavoriteProjects(favoritesData);
      } catch (error) {
        console.error("Error fetching data:", error);
        setError(
          error.message || "Failed to load projects. Please try again later."
        );
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  /**
   * Handles saving updated project information
   * @param {Project} updatedProject - The project with updated information
   */
  const handleSave = async (updatedProject) => {
    try {
      setProjects((prev) =>
        prev.map((project) =>
          project.id === updatedProject.id ? updatedProject : project
        )
      );

      const favoriteProject = favoriteProjects.find(
        (fav) => fav.id === updatedProject.id
      );
      if (favoriteProject) {
        const updatedFavorite = {
          ...favoriteProject,
          name: updatedProject.name,
        };
        await api.updateFavoriteProject(updatedFavorite);
        setFavoriteProjects((prev) =>
          prev.map((fav) =>
            fav.id === updatedFavorite.id ? updatedFavorite : fav
          )
        );
      }
    } catch (error) {
      console.error("Error saving project:", error);
      throw error;
    }
  };

  return {
    projects,
    favoriteProjects,
    isLoading,
    error,
    handleSave,
  };
};
