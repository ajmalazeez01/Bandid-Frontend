import React, { useState } from "react";
import { useEffect } from "react";
import { NavLink } from "react-router-dom";
import {
  detailListApi,
  rateListApi,
  reviewListFetchApi,
} from "../../Helpers/UserApi";
import Loader from "../../Helpers/Loader";
import Rating from "react-rating-stars-component";
import withReactContent from "sweetalert2-react-content";
import Swal from "sweetalert2";
import { useSelector } from "react-redux";
const MySwal = withReactContent(Swal);

const BandDetails = () => {
  const userEmail = useSelector((state) => state.user.email);

  const [rating, setRating] = useState(0);
  const [toggle, setToggle] = useState(false);
  const [loading, setLoading] = useState(true);
  const [showFullDescription, setShowFullDescription] = useState(false);
  const [detail, setDetail] = useState();
  const [review, setReview] = useState();

  useEffect(() => {
    const id = window.location.pathname.split("/").pop();

    reviewListFetchApi().then((response) => {
      // console.log(response.data.message);
      setReview(response.data.message);
    });

    detailListApi(id)
      .then((res) => {
        setLoading(false);
        // console.log(res.data.message);
        setDetail(res.data.message);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const handleRatingChange = (newRating) => {
    setRating(newRating);
  };

  const handleVoteSubmit = () => {
    rateListApi(userEmail, { rate: rating }).then((response) => {
      if (response.data.message) {
        MySwal.fire({
          icon: "success",
          title: "Thank You for Rating!",
          text: `You voted ${rating} stars!`,
        });
      }
    });
  };

  return (
    <div className="container-fluid">
      {loading ? (
        <Loader />
      ) : (
        <div className="h-full w-full">
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
                backgroundImage: `url(${detail?.file})`,
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                backgroundSize: "cover",
              }}
              className="w-4/12 h-60 rounded-lg bg-slate-400 mx-4 my-4"
            ></div>
            <div>
              <h1 className="font-serif  text-2xl text-rose-500 mx-4 py-3">
                {detail?.name}
              </h1>
              <h1 className="font-serif font-semibold text-xl text-white mx-4 ">
                {detail?.category}
              </h1>
              <h1 className="font-serif  text-xl text-white mx-4 my-3">
                {detail?.location}
              </h1>

              <h1 className="font-serif w-52 text-xl text-white mx-4 my-4">
                {showFullDescription
                  ? detail?.description
                  : `${detail?.description.slice(0, 35)}...`}
                {!showFullDescription && (
                  <button
                    className="text-white text-sm underline"
                    onClick={() =>
                      setShowFullDescription(
                        (prevShowFullDescription) => !prevShowFullDescription
                      )
                    }
                  >
                    Read More
                  </button>
                )}
              </h1>

              <NavLink to={`/user/slot-booking/${detail?._id}/${detail?.name}`}>
                <button className="mb-3 text-white w-10/12 ml-4 mx-auto  rounded-md p-2.5 text-base font-medium bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl">
                  See Price and Book
                </button>
              </NavLink>
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
                      backgroundImage: `url(${detail?.file})`,
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
            <div className="bg-gray-900 rounded-lg my-3 w-6/12 p-6">
              <div className="flex justify-between items-center mb-4">
                <h1 className="text-2xl font-semibold font-serif text-white">
                  Feedback
                </h1>
                <NavLink to={`/user/review`}>
                  <button className="text-white text-lg font-serif px-4 py-2 rounded-lg bg-black">
                    Write a Review
                  </button>
                </NavLink>
              </div>
              <hr className="border-gray-700" />

              <div className="mt-8">
                <h1 className="text-xl font-serif text-white">Band rating</h1>

                <div className="flex items-center mt-3">
                  <Rating
                    count={5}
                    value={rating}
                    onChange={handleRatingChange}
                    size={24}
                    activeColor="#ffd700"
                    classNames="my-star-rating"
                  />
                  <label className="text-white text-lg ml-1">
                    {rating === 1 ? "Very Poor 🥺" : ""}
                  </label>
                  <label className="text-white text-lg ml-1">
                    {rating === 2 ? "Poor 😣" : ""}
                  </label>
                  <label className="text-white text-lg ml-1">
                    {rating === 3 ? "Good 🙂" : ""}
                  </label>
                  <label className="text-white text-lg ml-1">
                    {rating === 4 ? "Very Good 😊" : ""}
                  </label>
                  <label className="text-white text-lg ml-1">
                    {rating === 5 ? "Excellent 🤗" : ""}
                  </label>
                  <button
                    className="font-serif ml-5 px-4 py-2 text-white rounded-lg bg-blue-600"
                    onClick={handleVoteSubmit}
                  >
                    Rate
                  </button>
                  {/* <input className="ml-5 w-32 bg-gray-800 text-white px-3 py-2 rounded-lg" type="text" /> */}
                </div>
              </div>

              <div className="mt-8">
                <h1 className="text-xl font-serif text-white">User Reviews</h1>
                <ul className="text-white">
                  {review?.map((review) => (
                    <li key={review.id} className="mt-4">
                      <h2 className="text-lg font-semibold">
                        Name : {review.name}
                      </h2>
                      <p className="text-base">Message : {review.message}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="flex flex-col justify-center items-center mx-auto my-auto">
              <h1 className="text-yellow-600 font-semibold text-xl font-mono text-center mb-8">
                Find your Favorite Band to Grow your Community & Business
              </h1>
              {/* Add other content or components here */}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default BandDetails;
