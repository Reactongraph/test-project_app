import React from "react";
import { Alert } from "@mui/material";
import styled from "styled-components";
import { ERROR_SEVERITY } from "../../../constants";

const StyledAlert = styled(Alert)`
  margin: ${({ theme }) => theme.spacing(2)} 0;
`;

/**
 * Error message component to display error messages or alerts
 * @param {Object} props - Component props
 * @param {string} props.message - Error message to display
 * @param {('error'|'warning'|'info'|'success')} props.severity - Severity level of the error
 */
const ErrorMessage = ({ message, severity = ERROR_SEVERITY.ERROR }) => {
  if (!message) return null;

  return <StyledAlert severity={severity}>{message}</StyledAlert>;
};

export default ErrorMessage;
