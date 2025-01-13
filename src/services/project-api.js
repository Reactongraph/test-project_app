// services/project-api.js
import axios from 'axios';
import { handleError } from '../utils/errorHandler';
import { DEFAULT_API_BASE_URL, ERROR_MESSAGES } from '../constants';

// Use environment variable with fallback
const API_BASE_URL = process.env.REACT_APP_API_BASE_URL || DEFAULT_API_BASE_URL;

// Create axios instance with default config
const apiClient = axios.create({
  baseURL: API_BASE_URL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json'
  }
});

// Add response interceptor for consistent error handling
apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    const errorResponse = handleError(error);
    return Promise.reject(errorResponse);
  }
);

export const api = {
  // Projects
  getProjects: async () => {
    try {
      const response = await apiClient.get('/projects');
      return response.data;
    } catch (error) {
      throw handleError(error, ERROR_MESSAGES.FETCH_PROJECTS_ERROR);
    }
  },

  updateProject: async (project) => {
    try {
      const response = await apiClient.put(`/projects/${project.id}`, project);
      return response.data;
    } catch (error) {
      throw handleError(error, ERROR_MESSAGES.UPDATE_PROJECT_ERROR);
    }
  },

  // Favorite Projects
  getFavoriteProjects: async () => {
    try {
      const response = await apiClient.get('/favoriteProjects');
      return response.data;
    } catch (error) {
      throw handleError(error, ERROR_MESSAGES.FETCH_PROJECTS_ERROR);
    }
  },

  updateFavoriteProject: async (project) => {
    try {
      const response = await apiClient.put(`/favoriteProjects/${project.id}`, project);
      return response.data;
    } catch (error) {
      console.error('Error updating favorite project:', error);
      throw error;
    }
  }
};
