import * as Yup from "yup";

const profileValidation = Yup.object().shape({
  mobile: Yup.string()
    .required("Mobile number is required")
    .matches(/^[0-9]+$/, "Mobile number can only include numbers")
    .min(10, "Mobile number must be exactly 10 digits")
    .max(10, "Mobile number must be exactly 10 digits"),
  name: Yup.string()
    .required("Name is required")
    .matches(/^[a-zA-Z\s]+$/, "Name can only include letters"),
  gender: Yup.string().required("gender is required"),
});

export default profileValidation;
