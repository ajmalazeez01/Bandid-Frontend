import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { BandLoginApi } from "../../Helpers/BandApi";
import bandLoginValidation from "../../Validation/BandLoginValidation";
import { setVendorToken } from "../../Authentication/StoreToken";
import { useDispatch } from "react-redux";
import { addBandId } from "../../Store/Slices/BandIdSlice";

const LoginForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [showPassword, setShowPassword] = useState(false);
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    bandLoginValidation
      .validate(data)
      .then((validatedData) => {
        BandLoginApi(validatedData).then((response) => {
          if (response.data.success) {
            const token = response.data.token;
            setVendorToken(token);
            dispatch(
              addBandId({
                email: response.data.email,
                location: response.data.location,
              })
            );
            console.log(response.data);
            navigate("/band/dashboard");
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
    <div className="w-screen h-screen bg-slate-900 flex py-20">
      <div className="flex flex-col sm:flex-row items-center mx-auto h-96 my-auto">
        <div className="h-full hidden sm:block">
          <img
            className=" h-full rounded-l-xl  w-[30rem]"
            src="/Images/istockphoto-177245299-612x612.jpg"
          />
        </div>
        <div className="bg-yellow-200 h-full rounded-r-xl">
          <div>
            <h1 className="font-bold text-3xl px-10 mt-20">Band Login</h1>
          </div>
          <ToastContainer />
          <form onSubmit={handleSubmit}>
            <div className="flex flex-col items-center md:items-start px-10 ">
              <input
                className={` border-b focus:border-slate-400  mt-7 rounded border-0 p-1`}
                type="email"
                placeholder="Email"
                value={data.email}
                onChange={(e) => setData({ ...data, email: e.target.value })}
              />

              <div className="relative">
                <input
                  className=" border-b focus:border-slate-400  mt-4 rounded p-1"
                  type={showPassword ? "text" : "password"}
                  placeholder="Password"
                  value={data.password}
                  onChange={handlePasswordChange}
                />
                <svg
                  className="w-6 h-6 my-2 absolute top-1/2 transform -translate-y-1/2 right-4 cursor-pointer"
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
                      className="w-2 h-2 "
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
                      className="w-2 h-2"
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
              <button className="text-white w-full p-1  mt-9 rounded-md bg-gray-800 hover:bg-black">
                Login
              </button>
              <NavLink to="/band/signup">
                <p className="font-semibold py-2">Signup here</p>
              </NavLink>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
