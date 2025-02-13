export const validateFields = (fields) => {
  let errors = {};

  if ("name" in fields) {
    if (!fields.name) errors.name = "Name is required.";
    else if (fields.name.length < 2)
      errors.name = "Name must be at least 2 characters.";
    else if (!/^[a-zA-Z ]+$/.test(fields.name))
      errors.name = "Name can only contain letters and spaces.";
  }

  if ("email" in fields) {
    if (!fields.email) errors.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fields.email))
      errors.email = "Enter a valid email.";
  }

  if ("password" in fields) {
    if (!fields.password) errors.password = "Password is required";
  }

  return errors;
};
