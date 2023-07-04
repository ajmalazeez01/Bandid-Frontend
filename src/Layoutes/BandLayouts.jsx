import React, { useState } from 'react'
import { NavLink, Outlet, useNavigate } from "react-router-dom";


const BandLayouts = () => {
  const navigate = useNavigate();

  const [Toggle, setToggle] = useState(true);
  const handleLogout = () => {
    localStorage.removeItem("vendor");
    navigate("/band/login");
  };

  return (
    <div>
    <div className="bg-black w-screen h-screen flex">
      <div
        className={`bg-slate-900 ${
          Toggle ? "w-72" : "w-18"
        } flex-col justify-center items-center pl-2`}
      >
        <div className="flex relative ">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          onClick={() => setToggle(!Toggle)}
          className={`${
            Toggle && "rotate-180 duration-300" 
          } w-6 h-6 text-white bg-black rounded-full cursor-pointer absolute -end-2 top-2`}
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M12.75 15l3-3m0 0l-3-3m3 3h-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
        </div>
        {/* <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokewidth="1.5"
          stroke="currentColor"
          className="w-6 h-6 text-white cursor-pointer ml-auto"
          onClick={() => setToggle(!Toggle)}
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5"
          ></path>
        </svg> */}
        <div className="flex items-center justify-start mt-5">
          <img
            className= {`w-6 h-5 mt-8 mr-2 duration-300 ${Toggle && 'rotate-[360deg]'} `}
            src="/Images/logostar.png"
            alt="image"
          />
          {Toggle && (
            <h1 className="text-white text-3xl  mt-6">Bandid</h1>
          )}
        </div>

        <NavLink to="dashboard" >
          <span className="text-white flex gap-2 justify-start items-center mt-6 ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              // viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125"
              />
            </svg>
            {Toggle && <h1 className=" font-semibold">Dashboard</h1>}
          </span>
        </NavLink>

        <NavLink to="bandDetail" >
          <span className="text-white flex gap-2 justify-start items-center mt-6">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
          <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m5.231 13.481L15 17.25m-4.5-15H5.625c-.621 0-1.125.504-1.125 1.125v16.5c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9zm3.75 11.625a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
          </svg>

            {Toggle && (
              <h1 className="text-white font-semibold">Details</h1>
            )}
          </span>
        </NavLink>

        <NavLink to="bandBooking">
          <span className="text-white flex gap-2 justify-start items-center mt-6">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
          <path stroke-linecap="round" stroke-linejoin="round" d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z" />
          </svg>

            {Toggle && (
              <h1 className="text-white font-semibold">Booking</h1>
            )}
          </span>
        </NavLink>

        <NavLink to="bandReview">
          <span className="text-white flex gap-2 justify-start items-center mt-6">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
          <path stroke-linecap="round" stroke-linejoin="round" d="M15 9h3.75M15 12h3.75M15 15h3.75M4.5 19.5h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5zm6-10.125a1.875 1.875 0 11-3.75 0 1.875 1.875 0 013.75 0zm1.294 6.336a6.721 6.721 0 01-3.17.789 6.721 6.721 0 01-3.168-.789 3.376 3.376 0 016.338 0z" />
          </svg>

            {Toggle && (
              <h1 className="text-white font-semibold">Reviews</h1>
            )}
          </span>
        </NavLink>

        <span className="text-white flex gap-2 justify-start items-center mt-6" onClick={handleLogout}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75"
            />
          </svg>
          {Toggle && <h1 className="text-white font-semibold">Logout</h1>}
        </span>
        {/* </NavLink> */}
      </div>
      <Outlet />
    </div>
  </div>
  )
}

export default BandLayouts