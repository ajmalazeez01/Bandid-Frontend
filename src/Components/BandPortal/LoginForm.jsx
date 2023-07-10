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

  return (
    <div className="w-screen h-screen bg-slate-900 flex py-20">
      <div className="flex flex-col sm:flex-row items-center mx-auto h-96 my-auto">
        <div className="h-full hidden sm:block">
          <img
            className=" h-full rounded-l-xl  w-[30rem]"
            src="/Images/istockphoto-177245299-612x612.jpg"
            alt="sadh"
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

              <input
                className=" border-b focus:border-slate-400  mt-4 rounded p-1"
                type="password"
                placeholder="Password"
                value={data.password}
                onChange={(e) => setData({ ...data, password: e.target.value })}
              />
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
