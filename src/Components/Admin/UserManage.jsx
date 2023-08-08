import React, { useEffect, useState } from "react";
import { blockUserApi, getUserApi } from "../../Helpers/AdminApi";
import ConfirmSwal from "../../Helpers/ConfirmSwal";
import Pagination from "../../Helpers/Pagination";

const UserManage = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState("status"); // Change "fromdate" to the desired default sorting field
  const [sortOrder, setSortOrder] = useState("asc"); // Change "asc" to "desc" for descending order sorting
  const [currentPage, setCurrentPage] = useState(1);
  const [totalCount, setTotalCount] = useState(0); // Stat

  const itemsPerPage = 5;

  useEffect(() => {
    setLoading(true);

    // Fetch data from the API based on the current state
    fetchData();
  }, [searchQuery, sortBy, sortOrder, currentPage]);

  const fetchData = () => {
    getUserApi(searchQuery, sortBy, sortOrder, currentPage, itemsPerPage)
      .then((res) => {
        console.log(res.data.message);
        setUsers(res.data.message);
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
  users?.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  const blockUser = (id) => {
    console.log(id);
    ConfirmSwal(blockUserApi, id)
      .then(() => {
        setUsers((prevUsers) =>
          prevUsers.map((user) => {
            if (user._id === id) {
              return { ...user, status: !user.status };
            }
            return user;
          })
        );
      })
      .catch((error) => {
        console.error("Error blocking/unblocking user:", error);
      });
  };

  return (
    <div className="bg-yellow-100 h-screen pb-10 w-full ">
      <h1 className="flex-col sm:flex-row font-bold text-3xl py-2 pl-3">
        User Manage
      </h1>

      <div className="w-7/12 p-4 mx-auto bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
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
                <th className="bg-slate-500 text-xl dark:text-white">Email</th>
                <th className="bg-slate-500 text-xl dark:text-white">Mobile</th>
                <th className="bg-slate-500 text-xl dark:text-white">Status</th>
                <th className="bg-slate-500 text-xl dark:text-white">Action</th>
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
              ) : users?.length > 0 ? (
                users?.map((user, index) => (
                  <tr key={user._id}>
                    <td className="text-gray-900 text-lg dark:text-white ml-2 px-6">
                      {index + 1}
                    </td>
                    <td className="text-gray-900 text-lg dark:text-white ml-2 px-6">
                      {user.name}
                    </td>
                    <td className="text-gray-900 text-lg dark:text-white ml-2 px-6">
                      {user.email}
                    </td>
                    <td className="text-gray-900 text-lg dark:text-white ml-2 px-6">
                      {user.mobile}
                    </td>
                    <td className="text-gray-900 text-lg dark:text-green-400 ml-2 px-6">
                      {user.status ? (
                        <p className="text-green-700">Active</p>
                      ) : (
                        <p className="text-red-700">Blocked</p>
                      )}
                    </td>
                    <td className="text-gray-900 text-lg dark:text-blue-400 ml-2 px-6">
                      {user.status ? (
                        <p
                          onClick={() => blockUser(user._id)}
                          className="font-medium text-blue-600 dark:text-blue-500 hover:underline cursor-pointer"
                        >
                          Block
                        </p>
                      ) : (
                        <p
                          onClick={() => blockUser(user._id)}
                          className="font-medium text-blue-600 dark:text-blue-500 hover:underline cursor-pointer"
                        >
                          Unblock
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

export default UserManage;
