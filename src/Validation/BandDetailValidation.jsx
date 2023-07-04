import * as Yup from 'yup';

const BandDetailvalidation = Yup.object().shape({
  email: Yup.string().email('Invalid email address').required('Email is required'),
  mobile: Yup.string().required('Mobile number is required'),
  name: Yup.string().required('Name is required'),
  website: Yup.string().required('Website is required'),
  location: Yup.string().required('Location is required'),
  description: Yup.string().required('Description is required'),
  services: Yup.array().min(1, 'At least one service must be selected'),
  file: Yup.string().required('Image is required'),
  category: Yup.string().required('Category is required'),
});

export default BandDetailvalidation;
