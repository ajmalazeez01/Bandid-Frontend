import React, { useState, useEffect } from "react";
import { getBookingApi } from "../../Helpers/BandApi";
import { useSelector } from "react-redux";
import Pagination from "../../Helpers/Pagination";

export const BandBooking = () => {
  const userEmail = useSelector((state) => state.band.email);

  const [loading, setLoading] = useState(true);
  const [booking, setBooking] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState("fromdate"); // Change "fromdate" to the desired default sorting field
  const [sortOrder, setSortOrder] = useState("asc"); // Change "asc" to "desc" for descending order sorting
  const [currentPage, setCurrentPage] = useState(1);
  const [totalCount, setTotalCount] = useState(0); // State to store the total count of records
  
  
  const itemsPerPage = 5; // Number of items to display per page

  useEffect(() => {
    setLoading(true);

    // Fetch data from the API based on the current state
    fetchData();
  }, [searchQuery, sortBy, sortOrder, currentPage, userEmail]);

  const fetchData = () => {
    getBookingApi(
      userEmail,
      searchQuery,
      sortBy,
      sortOrder,
      currentPage,
      itemsPerPage
    )
      .then((res) => {
        console.log(res.data.message);
        setBooking(res.data.message);
        setTotalCount(res.data.count);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching user data:", error);
        setLoading(false);
      });
  };
  
  // console.log(totalCount);
  // console.log(currentPage);

  const handleSearch = () => {
    setCurrentPage(1);
  };

  const handleSort = (field) => {
    if (sortBy === field) {
      setSortOrder(sortOrder === "asc" ? "desc" : "asc");
    } else {
      setSortBy(field);
      setSortOrder("asc");
    }
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  const handlePrevious = () => {
    if (currentPage > 1) {
      setCurrentPage((prevPage) => prevPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      setCurrentPage((prevPage) => prevPage + 1);
    }
  };

  // Calculate the total number of pages based on the total count and itemsPerPage
  const totalPages = Math.ceil(totalCount / itemsPerPage);

  // Get the current page's data based on itemsPerPage and currentPage
    booking?.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <div className="bg-yellow-100 h-screen pb-10 w-full ">
      <h1 className="flex-col sm:flex-row font-bold text-3xl py-2 pl-3">
        Booking details
      </h1>

      <div className="w-11/12 p-4 mx-auto bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
        <div className="flex items-center justify-between mb-4">
          <h5 className="text-2xl font-bold leading-none text-gray-900 dark:text-white">
            Users
          </h5>

          <div className="search-container flex items-center justify-center mt-4">
            <input
              type="text"
              placeholder="Search by name..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="border border-gray-300 rounded py-2 px-4 w-64 sm:w-72 md:w-80 lg:w-96 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              required
            />
            <button
              onClick={handleSearch}
              className="bg-blue-500 text-white rounded py-2 px-4 ml-2 hover:bg-blue-600 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              required
            >
              Search
            </button>
          </div>
          <th
            className="bg-slate-500 text-xl dark:text-white"
            onClick={() => handleSort("status")} // Change "fromdate" to the field to be sorted
          >
            sort : status
          </th>


          <a
            href="#"
            className="text-sm font-medium text-blue-600 hover:underline dark:text-blue-500"
          >
            View all
          </a>
        </div>
        <div className="overflow-x-auto">
          <table className="table-auto min-w-full">
            <thead>
              <tr>
                <th className="bg-slate-500 text-xl dark:text-white">No:</th>
                <th className="bg-slate-500 text-xl dark:text-white">Name</th>
                <th className="bg-slate-500 text-xl dark:text-white">Mobile</th>
                <th className="bg-slate-500 text-xl dark:text-white">Date</th>
                <th className="bg-slate-500 text-xl dark:text-white">Band</th>
                <th className="bg-slate-500 text-xl dark:text-white">Slot</th>
                <th className="bg-slate-500 text-xl dark:text-white">status</th>
                <th className="bg-slate-500 text-xl dark:text-white">
                  details
                </th>
              </tr>
            </thead>
            <tbody>
              {loading ? (
                <tr>
                  <td
                    colSpan="8"
                    className="text-3xl text-white ml-80 text-center"
                  >
                    Loading...
                  </td>
                </tr>
              ) : booking?.length > 0 ? (
                booking?.map((booking, index) => (
                  <tr key={booking._id}>
                    <td className="text-gray-900 text-lg dark:text-white ml-2 px-6">
                      {index + 1}
                    </td>
                    <td className="text-gray-900 text-lg dark:text-white ml-2 px-6">
                      {booking.name}
                    </td>
                    <td className="text-gray-900 text-lg dark:text-white ml-2 px-6">
                      {booking.mobile}
                    </td>
                    <td className="text-gray-900 text-lg dark:text-white ml-2 px-6">
                      {booking.fromdate}
                    </td>
                    <td className="text-gray-900 text-lg dark:text-white ml-2 px-6">
                      {booking.band}
                    </td>
                    <td className="text-gray-900 text-lg dark:text-white ml-2 px-6">
                      {booking.fromdate} - {booking.todate}
                    </td>
                    <td className="text-gray-900 text-lg dark:text-green-400 ml-2 px-6">
                      {booking.status ? (
                        <p className="text-green-700">Active</p>
                      ) : (
                        <p className="text-red-700">Cancelled</p>
                      )}
                    </td>
                    <td className="text-gray-900 text-lg dark:text-white ml-2 px-6">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-6 h-6"
                        onClick={() => setModalVisible(true)}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                    </td>

                    {modalVisible && (
                      <div className="fixed inset-0 flex items-center justify-center">
                        <div className="modal-container w-96 bg-white p-6 rounded-md shadow-md">
                          <h2 className="text-lg font-semibold mb-4">
                            Booking Details
                          </h2>
                          <div className="mb-4">
                            <h4 className="text-sm font-semibold">
                              Band name : {booking.band}
                            </h4>
                          </div>
                          <div className="mb-4">
                            <h4 className="text-sm font-semibold">
                              Mobile : {booking.mobile}
                            </h4>
                          </div>
                          <div className="mb-4">
                            <h4 className="text-sm font-semibold">
                              Email : {booking.email}
                            </h4>
                          </div>
                          <div className="mb-4">
                            <h4 className="text-sm font-semibold">
                              Number of People : {booking.peoplecount}
                            </h4>
                          </div>
                          <div className="mb-4">
                            <h4 className="text-sm font-semibold">
                              Payment Status:
                              {booking.paymentstaus ? (
                                <p className="text-green-700">paid</p>
                              ) : (
                                <p className="text-red-700">Not-paid</p>
                              )}
                            </h4>
                          </div>
                          <button
                            onClick={closeModal}
                            className="px-4 py-2 bg-red-500 text-white rounded-md font-semibold"
                          >
                            Close
                          </button>
                        </div>
                      </div>
                    )}
                  </tr>
                ))
              ) : (
                <tr>
                  <td
                    colSpan="8"
                    className="text-3xl text-white ml-80 text-center"
                  >
                    No records available
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          handlePrevious={handlePrevious}
          handleNext={handleNext}
        />
      </div>
    </div>
  );
};
