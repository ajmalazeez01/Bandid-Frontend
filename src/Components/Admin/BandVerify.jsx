import React, { useEffect, useState } from "react";
import {
  blockUserApi,
  blockVerifyApi,
  blockbandApi,
  getbandApi,
  getverifyApi,
} from "../../Helpers/AdminApi";
import ConfirmSwal from "../../Helpers/ConfirmSwal";
const BandVerify = () => {
  const [bands, setVerify] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getverifyApi()
      .then((res) => {
        // console.log(res.data.message);
        setVerify(res.data.message);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching bands:", error);
        setLoading(false);
      });
  }, []);

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
        Band Manage
      </h1>

      {loading ? (
        <h1 className=" text-5xl text-center">
          There are no records available
        </h1>
      ) : (
        <div className=" w-10/12 p-4 mx-auto my- bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
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
                {bands?.map((band) => {
                  return (
                    <tr key={band._id}>
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
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
};

export default BandVerify;
