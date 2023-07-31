import React, { useEffect, useState } from "react";
import { allLocationApi } from "../../Helpers/BandApi";
import { NavLink, useNavigate, useParams } from "react-router-dom";
import { categoryListApi, checkLocationApi } from "../../Helpers/UserApi";
import Loader from "../../Helpers/Loader";
import { ToastContainer, toast } from "react-toastify";
import Swal from "sweetalert2";

const ListPages = () => {
  const Navigate = useNavigate();

  const { name } = useParams();

  const [Toggle, setToggle] = useState(false);
  const [loading, setLoading] = useState(true);
  const [allLocation, setAllLocation] = useState([]);
  const [category, setCategory] = useState([]);
  const [isChecked, setChecked] = useState(true);

  useEffect(() => {
    allLocationApi().then((res) => {
      setAllLocation(res.data.location);
    });
    
    categoryListApi(name)
      .then((res) => {
        setCategory(res.data.message);
        setLoading(false)
      })
      .catch((error) => {
        Swal.fire({
          icon: 'error',
          title: 'No band is available plese choose another category!',
          text: 'An error occurred.',
          confirmButtonColor: '#d33', // Set the color of the confirm button (red in this case)
          confirmButtonText: 'OK',
        }).then((result) => {
          if (result.isConfirmed) {
            window.history.back();
          }
        });
       
      });
  }, []);

  const handleCheckboxChange = async (location, isChecked) => {
    if (!isChecked) {
      setChecked(isChecked);
      return;
    }
    setChecked(!isChecked);

    try {
      const response = await checkLocationApi(location,name);
      console.log(response.data.message);
      setCategory(response.data.message);
    } catch (error) {
      console.log(error);
      toast.error(error.response.data, {
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
  };

  return (
    <div className="h-auto">
      {loading?(
      <Loader/>
    ):(
      <div className="flex h-full w-full">
        <div className="w-80 h-full bg-black sm:block hidden">
          <div className="w-11/12  h-80 bg-gray-900 mx-auto rounded-lg">
            <span className="flex">
              <h1 className="text-white font-semibold text-xl font-serif pt-2 my-3 ml-2">
                Filters
              </h1>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-8 h-8 text-white mt-5 ml-32"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75"
                />
              </svg>
            </span>

            <span className="flex">
              <h1 className="text-white text-lg ml-2">Refine by Location</h1>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 text-white  mt-1 ml-14"
                onClick={() => setToggle(!Toggle)}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.5 16.875h3.375m0 0h3.375m-3.375 0V13.5m0 3.375v3.375M6 10.5h2.25a2.25 2.25 0 002.25-2.25V6a2.25 2.25 0 00-2.25-2.25H6A2.25 2.25 0 003.75 6v2.25A2.25 2.25 0 006 10.5zm0 9.75h2.25A2.25 2.25 0 0010.5 18v-2.25a2.25 2.25 0 00-2.25-2.25H6a2.25 2.25 0 00-2.25 2.25V18A2.25 2.25 0 006 20.25zm9.75-9.75H18a2.25 2.25 0 002.25-2.25V6A2.25 2.25 0 0018 3.75h-2.25A2.25 2.25 0 0013.5 6v2.25a2.25 2.25 0 002.25 2.25z"
                />
              </svg>
            </span>

            {Toggle && (
              <div className="absolute text-white mt-2 w-64 origin-top-right rounded-md bg-gray-900 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                <div className="py-1" role="none">
                  {allLocation?.map((category) => (
                    <span className="flex  transform transition-colors font-semibold text-lg duration-200 border-r-4 border-transparent hover:border-indigo-700">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-8 h-7 text-rose-500 my-1"
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
                      <option
                        className="font-serif"
                        key={category._id}
                        value={category.name}
                      >
                        <h1> {category.name} </h1>
                      </option>

                      <label>
                        <input
                          type="checkbox"
                          onClick={() =>
                            handleCheckboxChange(category.name, isChecked)
                          }
                        />
                      </label>
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        <div>
          <div className="w-auto h-28 bg-gray-900 rounded-lg">
            <h1 className="font-serif text-2xl text-white text-center py-9 border-2 rounded-lg">
              Book live band in India
            </h1>
          </div>

          <div className="w-full h-fit bg-black">
            <div className="container mx-auto mt-3 pb-4">
              <ToastContainer />

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {category?.map((category) => (
                  <div className="bg-white rounded-lg transition-all hover:scale-105"
                  key={category._id}
                  >
                    <div
                      style={{
                        backgroundImage: `url(${category.file})`,
                        backgroundRepeat: "no-repeat",
                        backgroundPosition: "center",
                        backgroundSize: "cover",
                      }}
                      className="w-full h-44 rounded-t-lg bg-slate-400 transition-all hover:scale-105"
                    ></div>
                    <h1 className="text-xl font-serif  text-rose-500 my-3 mx-3">
                      {category.name}
                    </h1>
                    <p className=" text-black my-3 mx-3">
                      {category.description}
                    </p>

                    <span className="flex">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-6 h-6 mx-2 my-2"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>

                      <h1 className="text-black font-semibold my-2">
                        60 - 90 minutes
                      </h1>
                    </span>
                    <span className="flex">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-6 h-6 mx-2 my-2"
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

                      <h1 className="text-black font-semibold my-2">
                        {category.location}
                      </h1>
                    </span>
                    <NavLink to={`/user/band-detail/${category?._id}`}>
                      <button className="mb-3 text-white w-10/12 ml-6 mx-auto mt-4 rounded-md p-2.5 text-base font-medium bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl">
                        See Price and Book
                      </button>
                    </NavLink>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      )} 
    </div>
  );
};

export default ListPages;
