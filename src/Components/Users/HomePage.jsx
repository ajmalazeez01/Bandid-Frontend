import React, { useEffect, useState } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { bandDetailApi } from "../../Helpers/UserApi";

const HomePage = () => {

  const [detail, setDetail] = useState([])

  useEffect(() => {
    bandDetailApi().then((res) => {
      setDetail(res.data.message);
    });
  }, []);


  return (
    <div>
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
        <img src="/Images/carousel-image1.jpg" alt="Carousel Image 1" />
      </div>
      <div>
        <img src="/Images/carousel-image2.jpg" alt="Carousel Image 2" />
      </div>
      <div>
        <img src="/Images/carousel-image3.jpg" alt="Carousel Image 3" />
      </div>
    </Carousel>
  </div>

  <div className="container mx-auto px-4 mt-8 mb-8">
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
     

      

    {detail.map((detail) => (
      
    

      <div className="bg-white rounded-lg">
        <div
          style={{
            backgroundImage:
              "url(/Images/photo-1549834125-82d3c48159a3.jpeg",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
          className="w-full h-44 rounded-t-lg bg-slate-400"
        ></div>
        <h1 className="text-xl font-serif text-center text-rose-500 my-5">
          {detail.name}
        </h1>
        <p className="text-center text-black my-5">
{detail.description}
        </p>
        <button className="mb-3 text-white w-10/12 ml-6 mx-auto mt-4 rounded-md p-2.5 text-base font-medium bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-400">
          See Price and Book
        </button>
      </div>

))}
    </div>
  </div>
</div>


    </div>
  );
};

export default HomePage;
