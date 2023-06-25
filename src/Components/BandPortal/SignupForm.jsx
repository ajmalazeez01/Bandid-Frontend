import React from 'react'
import { NavLink } from 'react-router-dom'

const SignupForm = () => {
  return (
    <div className='w-screen h-screen bg-slate-900 flex py-20'>
    <div className='flex flex-col sm:flex-row items-center mx-auto h-[30rem] my-auto'>
      <div className='h-full hidden sm:block'>
        <img className=' h-full rounded-l-xl  w-[30rem]' src="/Images/istockphoto-165083704-612x612.jpg" alt="sadh" />
      </div>
      <div className='bg-yellow-100 h-full rounded-r-xl'>
        <div>
        <h1 className='font-bold text-3xl px-10 mt-20'>Band Signup</h1>
        </div>
        {/* <ToastContainer/>  */}
        <form>
        <div className="flex flex-col items-center md:items-start px-10 ">
              <input
                className={` border-b focus:border-slate-400  mt-4 rounded border-0 p-1`}
                type="email"
                placeholder="Email"
                // value = {data.email}
                // onChange={(e)=>setData({...data,email:e.target.value})}
              />
                <input
                  className={` border-b focus:border-slate-400  mt-4 rounded border-0 p-1`}
                  type="location"
                  placeholder="Location"
                />
                <select>
                    <option>haii</option>
                    <option>haii</option>
                    <option>haii</option>
                </select>
                <input
                  className=" border-b focus:border-slate-400  mt-4 rounded p-1"
                  type="password"
                  placeholder="Password"
                />
              <input
                className={` border-b focus:border-slate-400  mt-4 rounded border-0 p-1`}
                type="cpassword"
                placeholder="Confirm Password"
              />
              <button className="text-white w-full p-1  mt-9 rounded-md bg-gray-800 hover:bg-black" >
              Login
            </button>
            <NavLink to="/band/login" >
            <p className='font-semibold py-2'>Login here</p>
            </NavLink>            
            </div>
            </form>
        
      </div>
    </div>
  </div>
  )
}

export default SignupForm