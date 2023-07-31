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

  const [showPassword, setShowPassword] = useState(false);
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
                email: response.data.email,
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

  const handlePasswordChange = (e) => {
    setData({ ...data, password: e.target.value });
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
              <div>
                <div className="relative">
                  <input
                    className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
                    type={showPassword ? "text" : "password"}
                    placeholder="Password"
                    value={data.password}
                    onChange={handlePasswordChange}
                  />
                  <svg
                    className="w-6 h-6 absolute top-1/2 transform -translate-y-1/2 right-4 cursor-pointer"
                    onClick={() =>
                      setShowPassword((prevShowPassword) => !prevShowPassword)
                    }
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    {showPassword ? (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-4 h-4"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                    ) : (
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
                          d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88"
                        />
                      </svg>
                    )}
                  </svg>
                </div>
              </div>
            </div>
            <NavLink to="/user/reset-password">
              <h4 className="flex justify-center py-2 ">
                Forgoten Your Password?
              </h4>
            </NavLink>
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
