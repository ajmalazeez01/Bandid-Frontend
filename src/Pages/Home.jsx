import React, { useEffect, useState } from "react";
import { bandDetailApi, categoryApi, SearchApi } from "../Helpers/UserApi";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Navigate, NavLink, Link } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";

const Home = () => {
  const [detail, setDetail] = useState([]);
  const [Toggle, setToggle] = useState(false);
  const [Toggles, setToggles] = useState(false);
  const [category, setCategory] = useState([]);
 

  useEffect(() => {
    bandDetailApi()
      .then((res) => {
        setDetail(res.data.message);
      })
      .catch((err) => {
        console.log(err);
      });

    categoryApi()
      .then((res) => {
        setCategory(res.data.message);
        // console.log(res.data.message);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("user");
    Navigate("/user/login");
  };

  

  return (
    <div>
      
        <div className="bg-black">
          <nav className="w-full h-16 bg-black">
            <ToastContainer />
            <div className="flex items-center py-3 pl-3">
              <img className="w-12 mr-2" src="/Images/logostar.png" />

              <div>
                <h1 className="text-white text-2xl font-bold">Bandid</h1>
              </div>

              <div className="flex mx-auto text-white gap-10">
                <label
                  htmlFor="default-search"
                  className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
                >
                  Search
                </label>
                <form className="flex items-center">
                  <label htmlFor="simple-search" className="sr-only">
                    Search
                  </label>
                  <div className="relative w-full">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
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
                          d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                        />
                      </svg>
                    </div>
                    <input
                      type="text"
                      id="simple-search"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="Search band name..."
                      required
                    />
                  </div>
                  <button
                    type="submit"
                    className="p-2.5 ml-2 text-sm font-medium text-white rounded-lg border bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 border-pink-400 dark:focus:ring-blue-80"
                  >
                    <svg
                      className="w-4 h-4"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 20 20"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                      />
                    </svg>
                    <span className="sr-only">Search</span>
                  </button>
                </form>

                <div className="relative inline-block text-left">
                  <div>
                    <button
                      className="hidden md:block text-white text-lg font-bold pt-1 font-serif "
                      onClick={() => setToggle(!Toggle)}
                    >
                      Category
                    </button>
                  </div>

                  {Toggle && (
                    <div className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-gray-900 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                      <div className="py-1" role="none">
                        {category.map((category) => (
                          <NavLink
                            to={`/user/list/${category.name}`}
                            onClick={() => setToggle(false)}
                          >
                            <span className="flex items-center pl-2 transform transition-colors font-semibold text-lg duration-200 border-r-4 border-transparent hover:border-indigo-700">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="w-8 h-8 text-rose-500 my-1"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  d="M9 9l10.5-3m0 6.553v3.75a2.25 2.25 0 01-1.632 2.163l-1.32.377a1.803 1.803 0 11-.99-3.467l2.31-.66a2.25 2.25 0 001.632-2.163zm0 0V2.25L9 5.25v10.303m0 0v3.75a2.25 2.25 0 01-1.632 2.163l-1.32.377a1.803 1.803 0 01-.99-3.467l2.31-.66A2.25 2.25 0 009 15.553z"
                                />
                              </svg>
                              <option
                                className="font-serif"
                                key={category._id}
                                value={category.name}
                              >
                                <h1> {category.name} </h1>
                              </option>
                            </span>
                          </NavLink>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                <div className="relative inline-block text-left">
                  <div>
                    <button
                      className="hidden md:block text-white text-lg font-bold pt-1 font-serif"
                      onClick={() => setToggles(!Toggles)}
                    >
                      Join Our Community
                    </button>
                  </div>

                  {Toggles && (
                    <div className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-gray-900 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                      <div className="py-1 rounded" role="none">
                        <NavLink to="/user/login">
                          <span className="flex items-center pl-2 transform transition-colors font-semibold text-lg duration-200 border-r-4 border-transparent hover:border-indigo-700">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              strokeWidth={1.5}
                              stroke="currentColor"
                              className="w-8 h-8 text-rose-500 my-1"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z"
                              />
                            </svg>

                            <h1 className="font-serif">Login</h1>
                          </span>
                        </NavLink>
                        <NavLink to="/user/signup">
                          <span className="flex items-center pl-2 transform transition-colors font-semibold text-lg duration-200 border-r-4 border-transparent hover:border-indigo-700">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              strokeWidth={1.5}
                              stroke="currentColor"
                              className="w-8 h-8 text-rose-500 my-1"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M19 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zM4 19.235v-.11a6.375 6.375 0 0112.75 0v.109A12.318 12.318 0 0110.374 21c-2.331 0-4.512-.645-6.374-1.766z"
                              />
                            </svg>

                            <h1 className="font-serif">SignIn</h1>
                          </span>
                        </NavLink>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </nav>

          <div>
            <div className="w-11/12 h-72 mx-auto">
              <Carousel
                autoPlay
                infiniteLoop
                showStatus={false}
                showIndicators={false}
                showThumbs={false}
                className="w-12/12 h-72 rounded"
              >
                <div>
                  <img
                    className="rounded-xl"
                    src="/Images/wes-hicks-MEL-jJnm7RQ-unsplash.jpg"
                    alt="Image 1"
                    style={{ width: "100%", height: "100%" }} // Set images to fit the div size
                  />
                </div>
                <div>
                  <img
                    className="rounded-xl"
                    src="/Images/hector-bermudez-iIWDt0fXa84-unsplash.jpg"
                    alt="Image 2"
                    style={{ width: "100%", height: "100%" }} // Set images to fit the div size
                  />
                </div>
                <div>
                  <img
                    className="rounded-xl"
                    src="/Images/maaria-lohiya-LhWr3yGGC6k-unsplash.jpg"
                    alt="Image 3"
                    style={{ width: "100%", height: "100%" }} // Set images to fit the div size
                  />
                </div>
              </Carousel>
            </div>

            <div className="container mx-auto px-4 mt-8 mb-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 ">
                {detail.map((detail) => (
                  <div
                    className="bg-white rounded-lg transition-all hover:scale-105"
                    key={detail._id}
                  >
                    <div
                      style={{
                        backgroundImage: `url(${detail.file})`,
                        backgroundRepeat: "no-repeat",
                        backgroundPosition: "center",
                        backgroundSize: "cover",
                      }}
                      className="w-full h-44 rounded-t-lg bg-slate-400 transform transition-all hover:scale-105"
                    ></div>

                    <h1 className="text-xl font-serif text-center text-rose-500 my-5">
                      {detail.name}
                    </h1>
                    <p className="text-center text-black my-5">
                      {detail.description}
                    </p>
                    <NavLink to={`/user/band-detail/${detail?._id}`}>
                      <button className="mb-3 text-white w-10/12 ml-6 mx-auto mt-4 rounded-md p-2.5 text-base font-medium bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl">
                        See Price and Book
                      </button>
                    </NavLink>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <footer className="bg-gray-700 text-white">
            <div className="container mx-auto py-8 flex flex-wrap md:flex-nowrap items-center justify-between">
              <div className="flex items-center">
                <img className="w-12 mr-2" src="/Images/logostar.png" />
                <div>
                  <h1 className="text-xl font-bold">Bandid</h1>
                  <p className="text-sm">Find Your Band</p>
                </div>
              </div>
              <div className="flex items-center mt-4 md:mt-0">
                <h1 className="text-sm md:text-lg mr-4">
                  Join our Network And Grow Your Business
                </h1>
                <Link to="//login">
                  <button className="bg-yellow-500 px-4 py-2 rounded-md">
                    Join Now
                  </button>
                </Link>
              </div>
            </div>
            <div className="bg-gray-800 py-8 ">
              <div className="container mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
                <div className="col-span-2 md:col-span-1">
                  <p className="text-sm">
                    Download Bandid app for exciting offers
                  </p>
                  <div className="flex mt-4">
                    <img
                      className="w-1/3 h-1/2 md:w-1/4 md:h-3/4 mr-2"
                      src="/Images/new-get-it-on-google-play-png-logo-20.png"
                    />
                    <img
                      className="w-1/3 h-1/2 md:w-1/4 md:h-3/4"
                      src="/Images/new-get-it-on-google-play-png-logo-20.png"
                    />
                  </div>
                </div>
                <div>
                  <h2 className="text-lg font-semibold mb-4">Links</h2>
                  <ul className="space-y-2">
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Partner With Us</li>
                    <li>Book Now</li>
                    <li>Careers</li>
                    <li>Blog</li>
                  </ul>
                </div>
                <div>
                  <h2 className="text-lg font-semibold mb-4">Contact</h2>
                  <p>Hi-lite Business Park</p>
                  <p>Palazhi, Calicut</p>
                  <p>Kerala, India</p>
                  <p>Email: ajmalazeez@gmail.com</p>
                </div>
                <div>
                  <h2 className="text-lg font-semibold mb-4">Connect</h2>
                  <div className="flex gap-3">
                    <img className="h-8" src="/Images/insta.png" />
                    <img
                      className="h-8"
                      src="/Images/facebook-logo-icon-file-facebook-icon-svg-wikimedia-commons-4.png"
                    />
                    <img
                      className="h-8"
                      src="/Images/linkedin-in-logo-png-1.png"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gray-800 py-4">
              <div className="container mx-auto text-xs text-center">
                <p>
                  © 2023 Bandid Online Services Private | Registered Company
                </p>
              </div>
            </div>
          </footer>
        </div>
    </div>
  );
};

export default Home;
