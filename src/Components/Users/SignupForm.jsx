import React from "react";
import { useState } from "react";
import { UserSignupApi, userOtpApi } from "../../Helpers/UserApi";
import Swal from "sweetalert2";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";



const SignupForm = () => {

  const navigate = useNavigate()

  const [data, setData] = useState({
    name : "",
    email: "",
    mobile : "",
    password: "",
    cpassword: "",
  });
// console.log(data);

  const handleSubmit = async (e) => {
    e.preventDefault()
    UserSignupApi(data)
      .then((res) => {
        const OTP = res.data.otp;
        data.OTP = OTP;
        Swal.fire({
          title: "Enter your OTP",
          input: "number",
          inputAttributes: {
            autocapitalize: "off",
            // maxLength: 6 // specify the max length of OTP here
          },
          showCancelButton: true,
          confirmButtonText: "Verify",
          showLoaderOnConfirm: true,

          preConfirm: (otp) => {
            data.EnteredOtp = otp;
            return userOtpApi(data)
              .then((response) => {
                if (response.data.ok) {
                  Swal.fire({
                    title: "OTP verified!",
                    text: "Your Account created successfully",
                    icon: "success",
                  }).then(() => {
                    navigate("/user/login");
                  });
                }
                if (!response.data.ok) {
                  console.log('otp is not received');
                }
              })
              .catch((error) => {
                Swal.showValidationMessage(`OTP Verification failed`);
              });
          },

        })
      })
      .catch((err) => {
        console.log('working');
        console.log(err);
        toast.error(err.response.data.message, {
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
         <ToastContainer/>
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
                type="name"
                placeholder="User name"
                value={data.name}
                onChange={(e) => setData({ ...data, name: e.target.value })}
              />
            </div>
            <div className="mt-4">
              <input
                className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
                type="Email"
                placeholder="Email"
                value={data.email}
                onChange={(e) => setData({ ...data, email: e.target.value })}
              />
            </div>
            <div className="mt-4">
              <input
                className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
                type="number"
                placeholder="Number"
                value={data.mobile}
                onChange={(e) => setData({ ...data, mobile: e.target.value })}
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
            <div className="mt-4">
              <input
                className="px-4 py-2  border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
                type="password"
                placeholder="Confirm Password"
                value={data.cpassword}
                onChange={(e) => setData({ ...data, cpassword: e.target.value })}
              />
            </div>

            <button className="text-white w-full mt-9 rounded-md p-2.5 text-base font-medium bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-400">
              Signup
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignupForm;
