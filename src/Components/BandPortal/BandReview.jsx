import React, { useEffect, useState } from "react";
import ConfirmSwal from "../../Helpers/ConfirmSwal";
import { getreviewApi } from "../../Helpers/BandApi";
import { NavLink, useParams } from "react-router-dom";
import { useSelector } from "react-redux";

const BandReview = () => {
  // const { id } = useParams()
  // console.log(id);
  const userEmail = useSelector((state) => state.band.email);

  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getreviewApi(userEmail)
      .then((res) => {
        // console.log(res.data.message);
        setReviews(res.data.message);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching user data:", error);
        setLoading(false);
      });
  }, []);

  return (
    <div className="bg-yellow-100 w-full pb-10 h-screen">
      <h1 className="flex-col sm:flex-row font-bold text-3xl py-2 pl-3">
        User Reviews
      </h1>

      {loading ? (
        <h1 className=" text-5xl text-center">
          There are no records available
        </h1>
      ) : (
        <div class="grid gap-y-4 md:gap-y-2 ">
          {reviews?.map((review) => (
            <div class="bg-white border-black rounded-lg w-8/12 mx-auto shadow dark:bg-gray-800 dark:border-gray-700 ">
              <div class="p-4 sm:p-8 border-black">
                <div class="text-gray-700 font-bold text-lg dark:text-gray-300">
                  Name : <span class="font-semibold">{review.name}</span>
                </div>
                <div class="text-gray-700 font-bold text-lg dark:text-gray-300">
                  Message : <span class="font-semibold">{review.message}</span>
                </div>
                <div class="flex justify-between">
                  <div class="text-gray-700 font-bold text-lg dark:text-gray-300">
                    Rating : <span class="font-semibold">{review.rate}</span>
                  </div>
                  <div class="text-gray-700 dark:text-gray-300">
                    Date:
                    <span class="font-semibold" id="formattedDate">
                      {review.date}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

<NavLink to={`/band/message`}>
            <div className="fixed bottom-5 right-5">
              <div className="bg-blue-500 text-white py-2 px-4 rounded-full shadow-lg cursor-pointer transform hover:scale-105 transition duration-300">
                Chat with us
              </div>
            </div>
          </NavLink>
    </div>
    
  );
};

export default BandReview;
