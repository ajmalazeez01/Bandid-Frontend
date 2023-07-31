import React, { useEffect, useState } from "react";
import ConfirmSwal from "../../Helpers/ConfirmSwal";
import { getreviewApi } from "../../Helpers/BandApi";

const BandReview = () => {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getreviewApi()
      .then((res) => {
        console.log(res.data.message);
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
            <div class="bg-white rounded-lg w-8/12 mx-auto shadow dark:bg-gray-800 dark:border-gray-700 ">
              <div class="p-4 sm:p-8 ">
                <div class="text-gray-700 dark:text-gray-300">
                  Name: <span class="font-semibold">{review.name}</span>
                </div>
                <div class="text-gray-700 dark:text-gray-300">
                  Message: <span class="font-semibold">{review.message}</span>
                </div>
                <div class="flex justify-between">
                  <div class="text-gray-700 dark:text-gray-300">
                    Rating: <span class="font-semibold">{review.rate}</span>
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
    </div>
  );
};

export default BandReview;
