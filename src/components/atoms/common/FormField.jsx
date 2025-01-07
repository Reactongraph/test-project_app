import React, { memo } from "react";
import { TextField } from "@mui/material";

const FormField = memo(
  ({
    name,
    label,
    value,
    onChange,
    type = "text",
    disabled = false,
    required = false,
    error = false,
    helperText = "",
    ...props
  }) => (
    <TextField
      name={name}
      label={label}
      value={value || ""}
      onChange={onChange}
      type={type}
      disabled={disabled}
      required={required}
      error={error}
      helperText={helperText}
      fullWidth
      margin="normal"
      {...props}
    />
  )
);

export default FormField;
