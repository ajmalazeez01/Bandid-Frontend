import React, { useState } from 'react'

import BandLoginValidation from '../../Validation/BandLoginValidation'
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AdminLoginApi } from '../../Helpers/AdminApi';
import { setAdminToken } from '../../Authentication/StoreToken';




const LoginForm = () => {

  const navigate = useNavigate()

  const [data, setData] = useState({
    email : "",
    password : "",
  });
 
  const handleClick = (e) => {
    e.preventDefault()
    BandLoginValidation
      .validate(data)
      .then((validatedData) => {
        AdminLoginApi(validatedData).then((response) => {
          // console.log(response)
          if (response.data.success) {
            const token = response.data.token;
            setAdminToken(token);
            // console.log(token+'haiii');
            navigate("/admin/dashboard");
          } 
          else if (!response.data.success) {
            toast.error(response.data.message, {
              position: "top-right",
              autoClose: 2000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "dark",
            });
          }
          else {
            toast.error(response.data.message, {
              position: "top-right",
              autoClose: 2000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "dark",
            });
          }
        })
      })
      .catch((validationErrors) => {
        toast.error(validationErrors.message, {
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
  <div className='flex flex-col sm:flex-row items-center mx-auto h-96 my-auto'>
    <div className='h-full hidden sm:block'>
      <img className='w-96 h-full rounded-xl' src="/Images/Project-Management-Image.jpg" alt="sadh" />
    </div>
    <div className='bg-yellow-100 h-full rounded-xl'>
      <div>
      <h1 className='font-semibold text-3xl px-10 mt-20'>Admin Login</h1>
      </div>
      <ToastContainer/> 
      <form>
      <div className="flex flex-col items-center md:items-start px-10 ">
            <input
              className=" border-b focus:outline-none border-slate-400 mt-7"
              type="email"
              placeholder="Email"
              value = {data.email}
              onChange={(e)=>setData({...data,email:e.target.value})}
            />
            
            <input
              className=" border-b focus:outline-none border-slate-400 mt-4 "
              type="password"
              placeholder="Password"
              value={data.password}
              onChange={(e)=>setData({...data,password:e.target.value})}
            />
            <button className="text-white w-fit px-3 py-1 mt-2 rounded-md bg-black" onClick={handleClick}>
            Login
          </button>
          </div>
          </form>
      
    </div>
  </div>
</div>
               
    
  )
}

export default LoginForm