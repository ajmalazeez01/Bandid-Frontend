import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { cancelApi, profileDetailFetchApi } from "../../Helpers/UserApi";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { useState } from "react";
import ConfirmSwal from "../../Helpers/ConfirmSwal";
import Loader from "../../Helpers/Loader";

const ProfileBookings = () => {
  const navigate = useNavigate();

  const userEmail = useSelector((state) => state.user.email);

  const [details, setDetail] = useState();
  const [cancel, setcancel] = useState();
  const [loading, setLoading] = useState(true);
  const [sortBy, setSortBy] = useState("status"); // Change "fromdate" to the desired default sorting field
  const [sortOrder, setSortOrder] = useState("asc");

  useEffect(() => {
    profileDetailFetchApi(userEmail, sortBy, sortOrder)
      .then((res) => {
        setDetail(res.data.message);
        setLoading(false);
      })
      .catch((error) => {
        console.log("catch");
        console.log(error);
      });
  }, [cancel, userEmail, sortBy, sortOrder]);

  const handleSort = (field) => {
    if (sortBy === field) {
      setSortOrder(sortOrder === "asc" ? "desc" : "asc");
    } else {
      setSortBy(field);
      setSortOrder("asc");
    }
  };

  const cancelBook = (id) => {
    ConfirmSwal(cancelApi, id).then(() => {
      setcancel(() => !cancel);
    });
  };

  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/user/login");
  };

  return (
    <div className="container-fluid">
      {loading ? (
        <Loader />
      ) : (
        <div className="container-fluid">
          <div className="w-full h-28 mx-auto bg-gray-900 rounded-xl border-2">
            <h1 className="font-serif text-2xl text-white text-center py-9">
              Booking details
            </h1>
          </div>

          <div className="flex">
            <div className="w-64 h-72 bg-gray-900 my-9 rounded-lg border-2 ml-10 ">
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

            <div className="container mx-auto my-8 ">


            <th
  className="bg-gray-900 text-white font-serif dark:text-white rounded-lg py-2 h-14 w-56 text-lg cursor-pointer"
  onClick={() => handleSort("status")}
>
  <div className="flex items-center justify-center">
    <h5 className="mr-2">Sort by:</h5>
    <h5 className="font-bold">Status</h5>
    
  </div>
</th>



              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ml-6 mr-10 ">
                {details?.map((detail) => (
                  <div
                    className="bg-white rounded-lg shadow-md p-6 "
                    key={detail._id}
                  >
                    <h1 className="font-serif text-2xl mb-2">
                      Booking ID: {detail._id}
                    </h1>
                    <h2 className="font-serif text-lg mb-2">
                      Band name: {detail.band}
                    </h2>
                    <p className="font-serif text-gray-600 mb-2">
                      People count: {detail.peoplecount}
                    </p>
                    <p className="font-serif text-gray-600 mb-2">
                      Address: {detail.address}
                    </p>
                    <p className="font-serif text-gray-600 mb-2">
                      Advance Amount: ${detail.advprice}
                    </p>
                    <p className="font-serif text-gray-600 mb-2">
                      Subtotal: ${detail.advprice}
                    </p>
                    <p className="font-serif text-gray-600 mb-2">
                      Date: {detail.fromdate}
                    </p>

                    <div className="flex justify-between items-center mt-4">
                      {detail.status ? (
                        <button
                          onClick={() => cancelBook(detail._id)}
                          className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                        >
                          Cancel
                        </button>
                      ) : (
                        <button
                          onClick={() => cancelBook(detail._id)}
                          className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded cursor-not-allowed"
                          disabled
                        >
                          Cancelled
                        </button>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProfileBookings;
