import React, { useEffect, useState } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { bandDetailApi } from "../../Helpers/UserApi";
import { NavLink } from "react-router-dom";
import Loader from "../../Helpers/Loader";

const HomePage = () => {
  const [detail, setDetail] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    bandDetailApi()
      .then((res) => {
        setLoading(false);
        setDetail(res.data.message);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      {loading ? (
        <Loader />
      ) : (
        
        <div className="bg-black">
          <div className="w-11/12 h-72 bg-gray-400 mx-auto rounded-xl">
            <Carousel
              autoPlay
              infiniteLoop
              showStatus={false}
              showIndicators={false}
              showThumbs={false}
              className="mx-auto w-11/12 h-72"
            >
              {/* Add your carousel items here */}
              <div>
                <img
                  // src="/Images/istockphoto-881745120-612x612.jpg"
                  alt="Carousel Image 1"
                  style={{ width: "100%", height: "20%" }}
                />
              </div>
              <div>
                <img
                  src="/Images/carousel-image2.jpg"
                  alt="Carousel Image 2"
                  style={{ width: "100%", height: "%" }}
                />
              </div>
              <div>
                <img
                  src="/Images/carousel-image3.jpg"
                  alt="Carousel Image 3"
                  style={{ width: "100%", height: "100%" }}
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
      )}
    </div>
  );
};

export default HomePage;
