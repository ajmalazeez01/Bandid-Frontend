import React, { useState } from "react";
import { NavLink, Outlet, useNavigate } from "react-router-dom";

const AdminLayouts = () => {
  const navigate = useNavigate();

  const [Toggle, setToggle] = useState(true);
  const handleLogout = () => {
    console.log("haiii");
    localStorage.removeItem("admin");
    navigate("/admin/login");
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
            strokeWidth="1.5"
            stroke="currentColor"
            onClick={() => setToggle(!Toggle)}
            className={`${
              Toggle && "rotate-180 duration-300" 
            } w-6 h-6 text-white bg-black rounded-full cursor-pointer absolute -end-2 top-2`}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
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
              strokeLinecap="round"
              strokeLinejoin="round"
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

          <NavLink to="UserManage" >
            <span className="text-white flex gap-2 justify-start items-center mt-6">
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
                  d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z"
                />
              </svg>
              {Toggle && (
                <h1 className="text-white font-semibold">User Manage</h1>
              )}
            </span>
          </NavLink>

          <NavLink to="bandManage">
            <span className="text-white flex gap-2 justify-start items-center mt-6">
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
                  d="M9 9l10.5-3m0 6.553v3.75a2.25 2.25 0 01-1.632 2.163l-1.32.377a1.803 1.803 0 11-.99-3.467l2.31-.66a2.25 2.25 0 001.632-2.163zm0 0V2.25L9 5.25v10.303m0 0v3.75a2.25 2.25 0 01-1.632 2.163l-1.32.377a1.803 1.803 0 01-.99-3.467l2.31-.66A2.25 2.25 0 009 15.553z"
                />
              </svg>
              {Toggle && (
                <h1 className="text-white font-semibold">Band Manage</h1>
              )}
            </span>
          </NavLink>

          <NavLink to="bandVerify">
            <span className="text-white flex gap-2 justify-start items-center mt-6">
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
                  d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z"
                />
              </svg>
              {Toggle && (
                <h1 className="text-white font-semibold">Band Verify</h1>
              )}
            </span>
          </NavLink>

          <NavLink to="location-and-bands">
            <span className="text-white flex gap-2 justify-start items-center mt-6">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                // viewBox="0 0 24 24"
                width="1.5"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                />
              </svg>
              {Toggle && (
                <h1 className="text-white font-semibold">Bands & Location</h1>
              )}
            </span>
          </NavLink>

          {/* <NavLink
     to=''
     > */}
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
  );
};

export default AdminLayouts;
