import React, { useState } from "react";
import { rateListApi } from "../../Helpers/UserApi";
import { useSelector } from "react-redux";
import withReactContent from "sweetalert2-react-content";
import Swal from "sweetalert2";
import { Navigate, useNavigate } from "react-router-dom";
const MySwal = withReactContent(Swal);

const AddReviews = () => {

  const userEmail = useSelector((state) => state.user.email);

  const [detail, setDetail] = useState({
    message: "",
    name: "",
  });

  const handleSubmit = () => {
    rateListApi(userEmail,detail).then((response) => {
      if (response.data.message) {
        MySwal.fire({
          icon: "success",
          title: "Thank You for your Feedback🤗!",
          text: ``,
        });
        window.history.back();
      }
    });
  };

  return (
    <div className="container-fluid">
      <div className="h-[50rem]">
        <div className="w-full h-28 mx-auto bg-gray-900 rounded-xl border-2">
          <h1 className="font-serif text-2xl text-white text-center py-9">
            Add Review
          </h1>
        </div>

        <div className="w-full sm:w-[40rem] my-32 mb-6 bg-gray-900 rounded-lg mx-auto border-2">
          <div className="bg-yellow-100 w-full sm:w-[35rem] mx-auto my-10 rounded-lg">
            <div className="w-full sm:w-96 mx-auto py-8">
              <div>
                <label className="block mb-2 text-sm font-medium text-black dark:text-black">
                  Name
                </label>
                <input
                  type="text"
                  className="bg-gray-50 border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  value={detail.name}
                  onChange={(e) =>
                  setDetail({ ...detail, name: e.target.value })
                  }
                  placeholder="Name"
                  required
                />
              </div>
              <div className="mt-4">
                <label className="block mb-2 text-sm font-medium text-black dark:text-black">
                  Message
                </label>
                <textarea
                  className="bg-gray-50 border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 h-32 resize-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  value={detail.message}
                  onChange={(e) =>
                  setDetail({ ...detail, message: e.target.value })
                  }
                  placeholder="Write a message"
                  required
                />
              </div>
              <div className="mt-6">
                <button
                  className="px-4 py-2 text-white rounded-lg bg-blue-500 hover:bg-blue-600"
                  onClick={handleSubmit}
                >
                  Send Message
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddReviews;
