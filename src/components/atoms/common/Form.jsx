import React, { memo } from "react";
import { Box, Button } from "@mui/material";

const Form = memo(
  ({
    onSubmit,
    children,
    submitLabel = "Save",
    disabled = false,
    ...props
  }) => (
    <Box
      component="form"
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit();
      }}
      {...props}
    >
      {children}
      <Box mt={2}>
        <Button type="submit" variant="contained" disabled={disabled}>
          {submitLabel}
        </Button>
      </Box>
    </Box>
  )
);

export default Form;
