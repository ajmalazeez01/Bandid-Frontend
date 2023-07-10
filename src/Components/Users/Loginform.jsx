import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import UserLoginValidations from "../../Validation/UserLoginValidations.jsx";
import { userloginApi } from "../../Helpers/UserApi";
import { setUserToken } from "../../Authentication/StoreToken.jsx";
import { useDispatch } from "react-redux";
import { addUserId } from "../../Store/Slices/UserIdSlice.js";

const Loginform = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    UserLoginValidations.validate(data)
      .then((validatedData) => {
        userloginApi(validatedData).then((response) => {
          if (response.data.success) {
            // console.log(response.data);
            const token = response.data.token;
            setUserToken(token);
            dispatch(
              addUserId({
                name: response.data.name,
              })
            );
            navigate("/user/home");
          } else if (!response.data.success) {
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
          } else {
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
        });
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
    <div>
      <div
        style={{
          backgroundImage:
            "url(/Images/nainoa-shizuru-NcdG9mK3PBY-unsplash.jpg)",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
        className="w-screen h-screen flex"
      >
        <ToastContainer />
        <div className="mx-auto my-auto backdrop-blur-3xl w-[26rem] h-[30rem] rounded-xl flex flex-col justify-center items-center">
          <div className="flex justify-center items-center">
            <img className="w-14 h-11" src="/Images/logostar.png" alt="" />
            <h1 className="text-white text-3xl font-semibold">Bandid</h1>
          </div>
          <h3 className="text-xl text-black font-serif">
            Find Your favorite band
          </h3>

          <form onSubmit={handleSubmit}>
            <div className="mt-4">
              <input
                className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
                type="email"
                placeholder="Email"
                value={data.email}
                onChange={(e) => setData({ ...data, email: e.target.value })}
              />
            </div>
            <div className="mt-4">
              <input
                className="px-4 py-2  border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
                type="password"
                placeholder="Password"
                value={data.password}
                onChange={(e) => setData({ ...data, password: e.target.value })}
              />
            </div>
            <h4 className="flex justify-center py-2 ">
              Forgoten Your Password?
            </h4>
            <button className="text-white w-full mt-9 rounded-md p-2.5 text-base font-medium bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-400">
              Login
            </button>
            <NavLink to="/user/signup">
              <p className="font-semibold py-2 flex justify-center">
                Not a member? Join Us
              </p>
            </NavLink>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Loginform;
