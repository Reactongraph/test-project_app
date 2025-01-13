import React from "react";
import { Grid } from "@mui/material";
import FormField from "../../atoms/common/FormField";

const ProjectForm = ({ formData, onChange, errors }) => {
  return (
    <Grid container spacing={3}>
      <Grid item xs={12} md={6}>
        <FormField
          name="name"
          label="Project Name"
          value={formData.name}
          onChange={onChange}
          error={errors.name}
          required
        />
      </Grid>
      <Grid item xs={12} md={6}>
        <FormField
          name="status"
          label="Status"
          value={formData.status}
          onChange={onChange}
          error={errors.status}
          type="select"
          options={[
            { value: "active", label: "Active" },
            { value: "completed", label: "Completed" },
            { value: "on-hold", label: "On Hold" },
          ]}
        />
      </Grid>
      <Grid item xs={12}>
        <FormField
          name="description"
          label="Description"
          value={formData.description}
          onChange={onChange}
          error={errors.description}
          multiline
          rows={4}
        />
      </Grid>
    </Grid>
  );
};

export default ProjectForm;
