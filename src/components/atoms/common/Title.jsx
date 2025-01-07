import React from "react";
import { Typography } from "@mui/material";

const Title = ({ children }) => (
  <Typography variant="subtitle1" sx={{ fontWeight: "bold" }}>
    {children}
  </Typography>
);

export default Title;
