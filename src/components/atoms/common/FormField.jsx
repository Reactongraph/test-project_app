import React from "react";
import {
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  FormHelperText,
} from "@mui/material";
import styled from "styled-components";

const StyledFormControl = styled(FormControl)`
  width: 100%;
  margin-bottom: ${({ theme }) => theme.spacing(2)};
`;

/**
 * Reusable form field component that supports text input and select
 * @param {Object} props - Component props
 * @param {string} props.name - Field name
 * @param {string} props.label - Field label
 * @param {string} props.value - Field value
 * @param {Function} props.onChange - Change handler
 * @param {string} [props.type='text'] - Field type (text or select)
 * @param {Array<{value: string, label: string}>} [props.options] - Options for select field
 * @param {string} [props.error] - Error message
 * @param {boolean} [props.required] - Whether the field is required
 * @param {boolean} [props.multiline] - Whether the field is multiline
 * @param {number} [props.rows] - Number of rows for multiline field
 */
const FormField = ({
  name,
  label,
  value,
  onChange,
  type = "text",
  options = [],
  error,
  required = false,
  multiline = false,
  rows = 1,
}) => {
  if (type === "select") {
    return (
      <StyledFormControl error={Boolean(error)} required={required}>
        <InputLabel>{label}</InputLabel>
        <Select
          name={name}
          value={value || ""}
          label={label}
          onChange={onChange}
        >
          {options.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </Select>
        {error && <FormHelperText>{error}</FormHelperText>}
      </StyledFormControl>
    );
  }

  return (
    <TextField
      fullWidth
      name={name}
      label={label}
      value={value || ""}
      onChange={onChange}
      error={Boolean(error)}
      helperText={error}
      required={required}
      multiline={multiline}
      rows={rows}
      margin="normal"
    />
  );
};

export default FormField;
