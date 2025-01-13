import { ERROR_MESSAGES } from '../constants';

export const handleError = (error, customMessage = '') => {
  const errorMessage = customMessage || error.message || ERROR_MESSAGES.UNKNOWN_ERROR;

  // Log error for debugging
  console.error('Error:', {
    message: errorMessage,
    originalError: error,
    stack: error.stack
  });

  // Return a user-friendly error object
  return {
    message: errorMessage,
    code: error.code || 'UNKNOWN_ERROR',
    severity: error.severity || 'error'
  };
};

export const createErrorResponse = (message, code = 'ERROR', severity = 'error') => ({
  message,
  code,
  severity
});
