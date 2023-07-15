import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const BandDetails = () => {

  const [toggle, setToggle] = useState(false);

  
  return (
    <div className="container-fluid">
      <div>
        <div className="w-full h-28 bg-gray-900 rounded-xl border-2">
          <h1 className="font-serif text-2xl text-white text-center py-9">
            Band details
          </h1>
        </div>
      </div>
      <div className="flex bg-gray-900 rounded-lg my-3">
        <div
          style={{
            backgroundImage: "url(/Images/photo-1549834125-82d3c48159a3.jpeg)",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
          className="w-4/12 h-60 rounded-lg bg-slate-400 mx-4 my-4"
        ></div>
        <div>
          <h1 className="font-serif  text-2xl text-rose-500 mx-4 py-4">
            chat MEt Toast
          </h1>
          <h1 className="font-serif font-semibold text-xl text-white mx-4 my-4">
            category()
          </h1>
          <h1 className="font-serif  text-xl text-white mx-4 my-4">Mumbai</h1>
          <h1 className="font-serif  text-xl text-white mx-4 my-4">
            description
          </h1>

          <button className=" text-white w-11/12 ml-3 mx-auto rounded-md p-2.5 text-base font-medium bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 ">
            See Price and Book
          </button>
        </div>

        <div className="bg-white w-5/12 h-60 ml-20 my-auto rounded-lg ">
          <div className=" bg-gray-900 w-20 h-8 ml-2 my-2  rounded-lg  ">
            <h1
              className="text-white text-center text-lg font-serif"
              onClick={() => setToggle(!toggle)}
            >
              Gallery
            </h1>
          </div>
          <h1 className="text-center text-xl font-serif ">
            {toggle ? "" : "Click the button to view the images"}
          </h1>

          {toggle && (
            <div className="flex">
              <div
                style={{
                  backgroundImage:
                    "url(/Images/photo-1549834125-82d3c48159a3.jpeg)",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                }}
                className="w-40 h-44 ml-2 bg-black rounded-lg mr-2"
              ></div>
            </div>
          )}
        </div>
      </div>

      <div className="flex">
      <div class=" bg-gray-900 rounded-lg my-3 w-6/12">
        <div className="flex">
          <h1 className="text-2xl font-semibold font-serif ml-3 my-3 text-white">
            Reviews
          </h1>
          <NavLink to="review">
            <h1 className="text-lg pt-1 w-36 h-9 text-center font-serif ml-96 my-3 text-white bg-black rounded-lg">
              Write a Review
            </h1>
            <hr />
          </NavLink>
        </div>

        <div>
          <h1 className="text-xl font-serif ml-3 text-white mt-10">
            Band rating
          </h1>

          <div>
            <p>
              <input
                type="checkbox"
                id="myCheckbox"
                className="form-checkbox h-5 w-5 text-indigo-600 ml-3 my-2"
              />
              <label htmlFor="myCheckbox" className="text-white text-lg ml-2">
                Excellent
              </label>
              <input className="ml-5" type="text" name="" id="" />
            </p>
            <p>
              <input
                type="checkbox"
                id="myCheckbox"
                className="form-checkbox h-5 w-5 text-indigo-600 ml-3 my-2"
              />
              <label htmlFor="myCheckbox" className="text-white text-lg ml-2">
                Very good
              </label>
              <input className="ml-2" type="text" name="" id="" />
            </p>
            <p>
              <input
                type="checkbox"
                id="myCheckbox"
                className="form-checkbox h-5 w-5 text-indigo-600 ml-3 my-2"
              />
              <label htmlFor="myCheckbox" className="text-white text-lg ml-2">
                Average
              </label>
              <input className="ml-6" type="text" name="" id="" />
            </p>
            <p>
              <input
                type="checkbox"
                id="myCheckbox"
                className="form-checkbox h-5 w-5 text-indigo-600 ml-3 my-2"
              />
              <label htmlFor="myCheckbox" className="text-white text-lg ml-2">
                Poor
              </label>
              <input className="ml-12" type="text" name="" id="" />
            </p>
          </div>
        </div>

      </div>

      <h1 className="text-yellow-600 font-semibold text-xl  mx-auto my-auto font-mono">Find your Favorite Band to Grow your community & Businness</h1>

      </div>
      
    </div>
  );
};

export default BandDetails;
