import * as Yup from "yup";

const BookingValidation = Yup.object().shape({
  mobile: Yup.string()
    .required("Mobile number is required")
    .matches(/^[0-9]+$/, "Mobile number can only include numbers")
    .min(10, "Mobile number must be exactly 10 digits")
    .max(10, "Mobile number must be exactly 10 digits"),
  name: Yup.string()
    .required("Name is required")
    .matches(/^[a-zA-Z\s]+$/, "Name can only include letters"),
  peoplecount: Yup.string().required("peoplecount is required"),
  occassion: Yup.string()
    .matches(/^[a-zA-Z]+$/, "Occasion can only contain characters")
    .required("Occasion is required"),
  fromdate: Yup.string().required("date is required"),
  todate: Yup.string().required("date is required"),
  address: Yup.string().required("Address is required"),
  message: Yup.string().required("Message is required"),
});

export default BookingValidation;
