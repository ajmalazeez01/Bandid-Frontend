import React, { useEffect, useState } from "react";
import { blockUserApi, getUserApi } from "../../Helpers/AdminApi";
import ConfirmSwal from "../../Helpers/ConfirmSwal";

const UserManage = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getUserApi()
      .then((res) => {
        // console.log(res.data.message);
        setUsers(res.data.message);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching user data:", error);
        setLoading(false);
      });
  }, []);

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
    <div className="bg-yellow-100 w-full pb-10 h-screen">
      <h1 className="flex-col sm:flex-row font-bold text-3xl py-2 pl-3">
        User Manage
      </h1>

      {loading ? (
        <h1 className=" text-5xl text-center">
          There are no records available
        </h1>
      ) : (
        <div className="h-fit w-7/12 p-4 mx-auto my- bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
          <div className="flex items-center justify-between mb-4">
            <h5 className="text-2xl font-bold leading-none text-gray-900 dark:text-white">
              Users
            </h5>
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
                  <th className="bg-slate-500 text-xl dark:text-white">Name</th>
                  <th className="bg-slate-500 text-xl dark:text-white">
                    Email
                  </th>
                  <th className="bg-slate-500 text-xl dark:text-white">
                    Mobile
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
                {users?.map((user) => (
                  <tr key={user._id}>
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
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserManage;
