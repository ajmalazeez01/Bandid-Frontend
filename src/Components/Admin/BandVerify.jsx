import React, { useEffect, useState } from "react";
import {
  blockVerifyApi,
  getverifyApi,
} from "../../Helpers/AdminApi";
import ConfirmSwal from "../../Helpers/ConfirmSwal";
import Pagination from "../../Helpers/Pagination";

const BandVerify = () => {
  const [bands, setVerify] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState("verify"); 
  const [sortOrder, setSortOrder] = useState("asc"); 
  const [currentPage, setCurrentPage] = useState(1);
  const [totalCount, setTotalCount] = useState(0); 

  const itemsPerPage = 5;

  useEffect(() => {
    setLoading(true);

    fetchData();
  }, [searchQuery, sortBy, sortOrder, currentPage]);

  const fetchData = () => {
    getverifyApi(searchQuery, sortBy, sortOrder, currentPage, itemsPerPage)
      .then((res) => {
        console.log(res.data.message);
        setVerify(res.data.message);
        setTotalCount(res.data.count);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching user data:", error);
        setLoading(false);
      });
  };

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
  bands?.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);



  const blockband = (id) => {
    // console.log(id);
    ConfirmSwal(blockVerifyApi, id)
      .then(() => {
        setVerify((prevBands) =>
          prevBands.map((band) => {
            if (band._id === id) {
              return { ...band, status: !band.status };
            }
            return band;
          })
        );
      })
      .catch((error) => {
        console.error("Error blocking/unblocking band:", error);
      });
  };

  return (
    <div className="bg-yellow-100 h-screen pb-10 w-full ">
      <h1 className="flex-col sm:flex-row font-bold text-3xl py-2 pl-3">
        Band Verify
      </h1>

       

      
        <div className=" w-10/12 p-4 mx-auto my- bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
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
              className="bg-slate-500 text-xl dark:text-white rounded"
              onClick={() => handleSort("verify")} // Change "fromdate" to the field to be sorted
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
                  <th className="bg-slate-500 text-xl dark:text-white">
                    Email
                  </th>
                  <th className="bg-slate-500 text-xl dark:text-white">
                    Mobile
                  </th>
                  <th className="bg-slate-500 text-xl dark:text-white">
                    Location
                  </th>
                  <th className="bg-slate-500 text-xl dark:text-white">
                    Status
                  </th>
                  <th className="bg-slate-500 text-xl dark:text-white">
                    Action
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
                ) : bands?.length > 0 ? (
                  bands?.map((band, index) => (
                    <tr key={band._id}>
                    <td className="text-gray-900 text-lg dark:text-white ml-2 px-6">
                      {index+1}
                    </td>
                    <td className="text-gray-900 text-lg dark:text-white ml-2 px-6">
                      {band.name}
                    </td>
                    <td className="text-gray-900 text-lg dark:text-white ml-2 px-6">
                      {band.email}
                    </td>
                    <td className="text-gray-900 text-lg dark:text-white ml-2 px-6">
                      {band.mobile}
                    </td>
                    <td className="text-gray-900 text-lg dark:text-white ml-2 px-6">
                      {band.location}
                    </td>
                    <td className="text-gray-900 text-lg dark:text-green-400 ml-2 px-6">
                      {band.status ? (
                        <p className="text-green-700">Active</p>
                      ) : (
                        <p className="text-red-700">Unverified</p>
                      )}
                    </td>
                    <td className="text-gray-900 text-lg dark:text-blue-400 ml-2 px-6">
                      {band.status ? (
                        <p
                          onClick={() => blockband(band._id)}
                          className="font-medium text-blue-600 dark:text-blue-500 hover:underline cursor-pointer"
                        >
                          Un-verified
                        </p>
                      ) : (
                        <p
                          onClick={() => blockband(band._id)}
                          className="font-medium text-blue-600 dark:text-blue-500 hover:underline cursor-pointer"
                        >
                          Verified
                        </p>
                      )}
                    </td>
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

export default BandVerify;
