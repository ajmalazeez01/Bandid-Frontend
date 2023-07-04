import React, { useEffect, useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { BandSignupApi, allLocationApi, bandOtpApi } from '../../Helpers/BandApi';
import Swal from 'sweetalert2';
import { ToastContainer, toast } from 'react-toastify';


const SignupForm = () => {

  const navigate = useNavigate()

  const [allLocation, setAllLocation] = useState([]);
  const [data, setData] = useState({

    name: "",
    email : "",
    mobile : "",
    location : "",
    password : "",
    confirmPassword : "",
  });

  // console.log(data);
 
  useEffect(() => {
    allLocationApi().then((res) => {
      setAllLocation(res.data.location);
    });
  }, []);


  const handleSubmit = async (e) => {
    e.preventDefault()
    BandSignupApi(data)
      .then((res) => {
        const OTP = res.data.otp;
        data.OTP = OTP;
        Swal.fire({
          title: "Enter your OTP",
          input: "number",
          inputAttributes: {
            autocapitalize: "off",
            // maxLength: 6 // specify the max length of OTP here
          },
          showCancelButton: true,
          confirmButtonText: "Verify",
          showLoaderOnConfirm: true,

          preConfirm: (otp) => {
            data.EnteredOtp = otp;
            return bandOtpApi(data)
              .then((response) => {
                if (response.data.ok) {
                  Swal.fire({
                    title: "OTP verified!",
                    text: "Your Account created successfully",
                    icon: "success",
                  }).then(() => {
                    navigate("/band/login");
                  });
                }
                if (!response.data.ok) {
                  console.log('otp is not received');
                }
              })
              .catch((error) => {
                Swal.showValidationMessage(`OTP Verification failed`);
              });
          },

        })
      })
      .catch((err) => {
        console.log('working');
        console.log(err);
        toast.error(err.response.data.message, {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
      });
  };

 

  return (
    <div className='w-screen h-screen bg-slate-900 flex py-20'>
    <div className='flex flex-col sm:flex-row items-center mx-auto h-[30rem] my-auto'>
      <div className='h-full hidden sm:block'>
        <img className=' h-full rounded-l-xl  w-[30rem]' src="/Images/istockphoto-177245299-612x612.jpg" alt="sadh" />
      </div>
      <div className='bg-yellow-200 h-full rounded-r-xl'>
        <div>
        <h1 className='font-bold text-3xl px-10 mt-10'>Band Signup</h1>
        </div>
        <ToastContainer/> 
        <form onSubmit={handleSubmit}>
        <div className="flex flex-col items-center md:items-start px-10 ">
              <input
                className={` border-b focus:border-slate-400  mt-4 rounded border-0 p-1`}
                type="name"
                placeholder="Name"
                name='name'
                value = {data.name}
                onChange={(e)=>setData({...data,name:e.target.value})}
              />
              <input
                className={` border-b focus:border-slate-400  mt-4 rounded border-0 p-1`}
                type="email"
                placeholder="Email"
                name='email'
                value = {data.email}
                onChange={(e)=>setData({...data,email:e.target.value})}
              />
                <input
                  className={` border-b focus:border-slate-400  mt-4 rounded border-0 p-1`}
                  type="number"
                  placeholder="Mobile"
                  name='mobile'
                  value = {data.mobile}
                  onChange={(e)=>setData({...data,mobile:e.target.value})}
                />
            <select
              id="location-dropdown"
              name="location"
              value = {data.location}
              onChange={(e)=>setData({...data,location:e.target.value})}
              className=" border-b focus:outline-none border-slate-400 mt-2"
              >
              {allLocation.map((location) => {
                return (
                  <option key={location._id} value={location._id}>
                    {location.name}
                  </option>
                );
              })}
            </select>
                <input
                  className=" border-b focus:border-slate-400  mt-4 rounded p-1"
                  type="password"
                  placeholder="Password"
                  name='password'
                  value = {data.password}
                  onChange={(e)=>setData({...data,password:e.target.value})}
                />
              <input
                className={` border-b focus:border-slate-400  mt-4 rounded border-0 p-1`}
                type="password"
                placeholder="Confirm Password"
                name='confirmPassword'
                value = {data.confirmPassword}
                onChange={(e)=>setData({...data,confirmPassword:e.target.value})}
              />
              <button className="text-white w-full p-1  mt-9 rounded-md bg-gray-800 hover:bg-black" >
              Signup
            </button>
            <NavLink to="/band/login" >
            <p className='font-semibold py-2 justify-center'>Login here</p>
            </NavLink>            
            </div>
            </form>
        
      </div>
    </div>
  </div>
  )
}

export default SignupForm