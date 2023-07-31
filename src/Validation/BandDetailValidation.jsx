import * as Yup from "yup";

const BandDetailvalidation = Yup.object().shape({
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  category: Yup.string().required("Category is required"),
  mobile: Yup.string()
    .required("Mobile number is required")
    .matches(/^[0-9]+$/, "Mobile number can only include numbers")
    .min(10, "Mobile number must be exactly 10 digits")
    .max(10, "Mobile number must be exactly 10 digits"),
  name: Yup.string()
    .required("Name is required")
    .matches(/^[a-zA-Z\s]+$/, "Name can only include letters"),
  website: Yup.string().required("Website is required"),
  location: Yup.string().required("Location is required"),
  description: Yup.string().required("Description is required"),
  service: Yup.string().required("Service is required"),
});

export default BandDetailvalidation;
