import * as Yup from 'yup';

const bandSignupValidation = Yup.object().shape({
  name: Yup.string().required('Name is required'),
  mobile : Yup.string().matches(/^(\+\d{1,3}[- ]?)?\d{10}$/, 'Mobile number is not valid').required('Mobile number is required'),
  email: Yup.string().email('Invalid email address').required('Email is required'),
  location: Yup.string().required('Location is required'),
  gioCoordinates: Yup.string().required('coordinates is required'),
  password: Yup.string().required('Password is required').min(6, 'Password must be at least 6 characters'),
  confirmPassword: Yup.string().oneOf([Yup.ref('password'), null], 'Passwords must match')
});

export default bandSignupValidation;