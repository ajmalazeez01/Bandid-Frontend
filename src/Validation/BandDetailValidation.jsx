import * as Yup from 'yup';

const BandDetailvalidation = Yup.object().shape({
  // email: Yup.string().email('Invalid email address').required('Email is required'),
  category: Yup.string().required('Category is required'),
  mobile: Yup.string().required('Mobile number is required'),
  name: Yup.string().required('Name is required'),
  website: Yup.string().required('Website is required'),
  // location: Yup.string().required('Location is required'),
  description: Yup.string().required('Description is required'),
  service: Yup.string().required('Service is required'),
  // files: Yup.string().required('Image is required'),

  // image: Yup.array()
  //   .of(
  //     Yup.mixed()
  //       .required('Please upload an image')
  //       .test(
  //         'fileType',
  //         'Unsupported file format',
  //         (value) =>
  //           value && ['image/jpeg', 'image/png','image/jpg'].includes(value.type)
  //       )
  //   )
  //   // .min(3, 'Please upload at least three images'),


    
});

export default BandDetailvalidation;
