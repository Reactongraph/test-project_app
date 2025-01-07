import React, { useState, useCallback, useMemo, memo } from "react";
import {
  PROJECT_FORM_FIELDS,
  validateProject,
} from "../../form-configs/project-form";
import Form from "../atoms/common/Form";
import FormField from "../atoms/common/FormField";

const ProjectForm = ({ initialData = {}, onSubmit, isLoading = false }) => {
  const [formData, setFormData] = useState(initialData);
  const [errors, setErrors] = useState({});

  const handleChange = useCallback(
    (e) => {
      const { name, value } = e.target;
      setFormData((prev) => ({ ...prev, [name]: value }));
      if (errors[name]) {
        setErrors((prev) => ({ ...prev, [name]: "" }));
      }
    },
    [errors]
  );

  const handleSubmit = useCallback(() => {
    const validationErrors = validateProject(formData);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    onSubmit(formData);
  }, [formData, onSubmit]);

  const isValid = useMemo(() => Object.keys(errors).length === 0, [errors]);

  return (
    <Form onSubmit={handleSubmit} disabled={isLoading || !isValid}>
      {PROJECT_FORM_FIELDS.map((field) => (
        <FormField
          key={field.name}
          value={formData[field.name]}
          onChange={handleChange}
          error={Boolean(errors[field.name])}
          helperText={errors[field.name]}
          {...field}
        />
      ))}
    </Form>
  );
};

export default memo(ProjectForm);
