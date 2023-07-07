import React from "react";
import { Link, Outlet } from "react-router-dom";

const UserLayouts = () => {
  return (
    <div>
      <div className="container-fluid">
        {/* <div
        className=""
        style={{
          position: "fixed",
          top: "0",
          left: "0",
          height: "100%",
          width: "100%",
          backgroundImage: "url(./image/homeBackground.png)",
          backgroundSize: "cover",
          zIndex: "-1",
        }}
      ></div> */}
       <nav className="w-full h-16 bg-black">
  <div className="flex items-center py-3 pl-3">
    <img className="w-12 mr-2" src="/Images/logostar.png" alt="" />
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
      <h1 className="hidden md:block text-white text-lg font-bold pt-1">
        Category
      </h1>
      <h1 className="hidden md:block text-white text-lg font-bold pt-1">
        Join our community
      </h1>
      <div className="md:hidden">
        <svg
          className="w-6 h-6 text-white cursor-pointer"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 6h16M4 12h16m-7 6h7"
          />
        </svg>
      </div>
    </div>
  </div>
</nav>

        <Outlet />
        <footer className="bg-gray-700 text-white">
          <div className="container mx-auto py-8 flex flex-wrap md:flex-nowrap items-center justify-between">
            <div className="flex items-center">
              <img className="w-12 mr-2" src="/Images/logostar.png" alt="" />
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
                    alt="Google Play"
                  />
                  <img
                    className="w-1/3 h-1/2 md:w-1/4 md:h-3/4"
                    src="/Images/new-get-it-on-google-play-png-logo-20.png"
                    alt="App Store"
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
                  <img className="h-8" src="/Images/insta.png" alt="image" />
                  <img
                    className="h-8"
                    src="/Images/facebook-logo-icon-file-facebook-icon-svg-wikimedia-commons-4.png"
                    alt="image"
                  />
                  <img
                    className="h-8"
                    src="/Images/linkedin-in-logo-png-1.png"
                    alt="image"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="bg-gray-800 py-4">
            <div className="container mx-auto text-xs text-center">
              <p>© 2023 Bandid Online Services Private | Registered Company</p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default UserLayouts;
