import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import profileValidation from "../../Validation/ProfileValidation";
import { detailFetchApi, profileDetailsApi } from "../../Helpers/UserApi";
import Swal from "sweetalert2";
import Loader from "../../Helpers/Loader";
import { useEffect } from "react";

const UserProfile = () => {

  const userEmail = useSelector((state) => state.user.email);
  
  const [loadingButton, setLoadingButton] = useState(false);
  const [preview, setPreview] = useState();
  const [image, setImage] = useState(null);
  const [updated, setUpdated] = useState(false);
  const [loading, setLoading] = useState(true);


  const [detail, setDetail] = useState({
    email: userEmail,
    name: "",
    mobile: "",
    gender: "",
  });

  useEffect(() => {
    detailFetchApi(userEmail)
      .then((res) => {
        // console.log(res.data.message);
        setDetail(...res.data.message);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  // console.log(detail);

  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/user/login");
  };

  const handleImage = (e) => {
    const file = e.target.files[0];
    setPreview(URL.createObjectURL(file));
    const allowedExtensions = /(\.jpg|\.jpeg|\.png|\.gif)$/;
    if (!allowedExtensions.exec(file?.name)) {
      toast.error("Format is not supported");
    } else {
      setImage(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoadingButton(true)

    const formData = new FormData();
    formData.append("photo", image);
    formData.append("email", detail.email);
    formData.append("name", detail.name);
    formData.append("mobile", detail.mobile);
    formData.append("gender", detail.gender);

    profileValidation
      .validate(detail)
      .then((validatedData) => {
        profileDetailsApi(validatedData.email, formData)
          .then((response) => {
            if (response.data.success) {
              Swal.fire({
                position: "center",
                icon: "success",
                title: "Details have been saved",
                showConfirmButton: false,
                timer: 1500,
              }).then(() => {
                setUpdated((updated) => !updated);
                // setImage(null);
                setLoadingButton(false)

              });

            } else {
              setLoadingButton(false)

              console.log("else");
            }
          })
          .catch((err) => {
            setLoadingButton(false)
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
      })
      .catch((err) => {
        setLoadingButton(false)
        toast.error(err.message, {
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
    <div className="container-fluid">
       {loading?(
    <Loader/>
  ):(
      <div className="container-fluid">
        <div className="w-full h-28 mx-auto bg-gray-900 rounded-xl border-2">
          <h1 className="font-serif text-2xl text-white text-center py-9">
            Profile
          </h1>
          <ToastContainer />
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

          <form onSubmit={handleSubmit}>
            <div className="w-[40rem] h-[32rem] my-32 mb-6 bg-gray-900 rounded-lg ml-4 border-2">
              <div className=" w-[38rem] ml-4 mb-3 mt-3 h-56 bg-yellow-100 rounded-lg ">
                <img
                  className="w-44 h-44 rounded-full bg-slate-400 mx-auto"
                  src={
                    preview
                      ? preview
                      : detail.file
                      ? detail.file
                      : "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png"
                  }
                />

                <div>
                  <input
                    type="file"
                    name="photo"
                    accept="image/*"
                    className="hidden"
                    id="imageUploadInput"
                    onChange={handleImage}
                  />

                  <label
                    htmlFor="imageUploadInput"
                    className=" text-white w-3/12 mx-60  rounded-md p-2.5 text-base font-medium bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl"
                  >
                    change image
                  </label>
                </div>
              </div>

              <div className="grid w-[38rem] h-50 pb-4 pt-2 pl-4 pr-4 bg-yellow-100 ml-4 rounded-lg mb-44 grid-cols-2 gap-4 ">
                <div>
                  <label className=" block mb-2 text-sm font-medium text-black dark:text-black">
                    Name
                  </label>
                  <input
                    type="text"
                    className="bg-gray-50 border border-gray-300 text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    value={detail.name}
                    onChange={(e) =>
                      setDetail({ ...detail, name: e.target.value })
                    }
                    placeholder="Name"
                  />
                </div>
                <div>
                  <label className="block mb-2 text-sm font-medium text-black dark:text-black">
                    Email
                  </label>
                  <input
                    type="text"
                    className="bg-gray-50 border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder={`${userEmail}`}
                    readOnly
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-black dark:text-black">
                    Mobile
                  </label>
                  <input
                    type="text"
                    className="bg-gray-50 border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    value={detail.mobile}
                    onChange={(e) =>
                      setDetail({ ...detail, mobile: e.target.value })
                    }
                    placeholder="mobile"
                  />
                </div>
                <div>
                  <label className="block   text-sm font-medium text-black dark:text-black">
                    Gender
                  </label>

                  <select
                    className="bg-gray-50 border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    id="gender"
                    value={detail.gender}
                    onChange={(e) =>
                      setDetail({ ...detail, gender: e.target.value })
                    }
                  >
                    <option value="" disabled selected>
                      Select your gender
                    </option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                {loadingButton ? (
                  <button disabled className="mb-3 text-white w-6/12 mx-56 mt-2 rounded-md p-2.5 text-base font-medium bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl">
                    Loading...
                  </button>
                ) : (
                  <button className="mb-3 text-white w-6/12 mx-56 mt-2 rounded-md p-2.5 text-base font-medium bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl">
                    update
                  </button>
                )}
              </div>
            </div>
          </form>
        </div>
      </div>
       )}
    </div>
  );
};

export default UserProfile;
