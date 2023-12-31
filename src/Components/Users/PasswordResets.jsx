import React from "react";
import { NavLink, useNavigate } from "react-router-dom";

const PasswordResets = () => {

  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/user/login");
  };

  return (
    <div className="container-fluid bg-black">
      <div className="h-[50rem]">
        <div className="w-full h-28 mx-auto bg-gray-900 rounded-xl border-2">
          <h1 className="font-serif text-2xl text-white text-center py-9">
            Change Password
          </h1>
        </div>
        <div className="flex">
          <div className="w-64 h-64 bg-gray-900 my-32 rounded-lg border-2 ml-64 ">
            <NavLink to="/user/profile">
              <span className="flex hover:bg-black">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-8 h-8 text-white ml-4 my-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>

                <h1 className="mx-4 my-4 text-white font-serif text-lg">
                  profile
                </h1>
              </span>
            </NavLink>

            <NavLink to="/user/profile-booking">
              <span className="flex hover:bg-black">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-8 h-8 text-white ml-4 my-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M11.35 3.836c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m8.9-4.414c.376.023.75.05 1.124.08 1.131.094 1.976 1.057 1.976 2.192V16.5A2.25 2.25 0 0118 18.75h-2.25m-7.5-10.5H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V18.75m-7.5-10.5h6.375c.621 0 1.125.504 1.125 1.125v9.375m-8.25-3l1.5 1.5 3-3.75"
                  />
                </svg>

                <h1 className="mx-4 my-4 text-white font-serif text-lg">
                  Booking
                </h1>
              </span>
            </NavLink>

            <NavLink to="/user/reset-password">
              <span className="flex hover:bg-black">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-8 h-8 text-white ml-4 my-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13.5 10.5V6.75a4.5 4.5 0 119 0v3.75M3.75 21.75h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H3.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z"
                  />
                </svg>

                <h1 className="mx-4 my-4 text-white font-serif text-lg">
                  Change password
                </h1>
              </span>
            </NavLink>

            <NavLink to="/user/login">
              <span className="flex hover:bg-black">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-8 h-8 text-white ml-4 my-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75"
                  />
                </svg>

                <h1
                  className="mx-4 my-4 text-white font-serif text-lg"
                  onClick={handleLogout}
                >
                  logout
                </h1>
              </span>
            </NavLink>
          </div>

          <div className=" w-[40rem] my-32 mb-6 bg-gray-900 rounded-lg ml-4 border-2">
            <div className="bg-yellow-100 h-72 w-[35rem] mx-auto my-10 rounded-lg">
           <div className="w-96 mx-auto py-8">
           <div>
                <label className=" block mb-2 text-sm font-medium text-black dark:text-black">
                 Current password
                </label>
                <input
                  type="text"
                  className="bg-gray-50 border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="name"
                />
              </div>
            <div>
                <label className=" block mb-2 text-sm font-medium text-black dark:text-black">
                  New Password
                </label>
                <input
                  type="text"
                  className="bg-gray-50 border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="name"
                />
              </div>
            <div>
                <label className=" block mb-2 text-sm font-medium text-black dark:text-black">
                 Confirm Password
                </label>
                <input
                  type="text"
                  className="bg-gray-50 border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="name"
                />
              </div>
           </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PasswordResets;
