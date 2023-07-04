import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";
import {
  AddBandApi,
  AddLocationApi,
  blockBandApi,
  blockLocationApi,
  editBandApi,
  editLocationApi,
  findBandApi,
  findLocationApi,
  getLocationAndBandApi,
} from "../../Helpers/AdminApi";
import InputSwal from "../../Helpers/InputSwal";
import ConfirmSwal from "../../Helpers/ConfirmSwal";

const LocationAndBand = (e) => {
  const [updated, setUpdated] = useState(false);
  const [band, setBand] = useState([]);
  const [location, setLocation] = useState([]);
  
  useEffect(() => {
    getLocationAndBandApi().then(({ data }) => {
      if (data) {
        setLocation(data.location);
        setBand(data.band);
      } else {
        console.log('data is not received');
      }
      
    });
  }, [updated]);

  const addlocation = () => {
    Swal.fire({
      title: "Enter the Location",
      input: "text",
      // inputValue: "haksk",
      inputAttributes: {
        autocapitalize: "off",
        // maxLength: 6 // specify the max length of OTP here
      },
      showCancelButton: true,
      confirmButtonText: "Add",
      showLoaderOnConfirm: true,
      preConfirm: (data) => {
        const formData = {
          name: data,
        };
        return AddLocationApi(formData).then((response) => {
          if (response.data.success) {
            Swal.fire({
              position: "center",
              icon: "success",
              title: "Location has been saved",
              showConfirmButton: false,
              timer: 1500,
            }).then(() => {
              setUpdated(() => !updated);
            });
          } else {
            Swal.showValidationMessage("This location is already added");
          }
        }).catch((error)=>{
          Swal.showValidationMessage("Oopz! you are not enter the location");
        })
      },
    });
  };

  const addband = () => {
    Swal.fire({
      title: "Enter the Band",
      input: "text",
      // inputValue: "haksk",
      inputAttributes: {
        autocapitalize: "off",
        // maxLength: 6 // specify the max length of OTP here
      },
      showCancelButton: true,
      confirmButtonText: "Add",
      showLoaderOnConfirm: true,
      preConfirm: (data) => {
        const formData = {
          name: data,
        };
        return AddBandApi(formData)
          .then((response) => {
            if (response.data.success) {
              Swal.fire({
                position: "center",
                icon: "success",
                title: "Band has been saved",
                showConfirmButton: false,
                timer: 1500,
              }).then(() => {
                setUpdated(() => !updated);
              });
            }else{
              Swal.showValidationMessage("This band is already added");
            }
          }).catch((error)=>{
            Swal.showValidationMessage("Oopz! you are not enter the band");
          })
        
      },
    });
  };


  const editBand = (id) => {
    const data = { id: id };
    findBandApi(data).then((res) => {
      const inputValue = res.data.band.name;
      const id = res.data.band._id;
      InputSwal(
        "Edit Band",
        "text",
        inputValue,
        "Edit",
        editBandApi,
        id,
        "Successfull"
      ).then(() => setUpdated(() => !updated));
    });
  };

  const editLocation = (id) => {
    const data = { id: id };
    findLocationApi(data).then((res) => {
      const inputValue = res.data.band.name;
      const id = res.data.band._id;
      InputSwal(
        "Edit Band",
        "text",
        inputValue,
        "Edit",
        editLocationApi,
        id,
        "Successfull"
      ).then(() => setUpdated(() => !updated));
    });
  };


  const blockBand = (id) => {
    console.log(id);    
    ConfirmSwal(blockBandApi,id).then(() => {
      setUpdated(() => !updated);
    });
  };

  const blockLocation = (id) => {
    console.log(id);    
    ConfirmSwal(blockLocationApi,id).then(() => {
      setUpdated(() => !updated);
    });
  };


  
  
  

  return (
    <div className="bg-yellow-100 w-full h-full overflow-x-auto">
      <h1 className="flex-col sm:flex-row font-bold text-3xl py-2 pl-3">
        Band and Location Manage
      </h1>

      <div className="flex flex-col sm:flex-row gap-4 ml-2 justify-evenly mt-10">
        <div class="h-fit p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
          <div className="flex w-full">
            <button
              class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-3 rounded-full mb-4 flex self-center justify-end"
              onClick={addband}
            >
              Add Band
            </button>
          </div>
          <div class="flex items-center justify-between mb-4">
            <h5 class="text-2xl font-bold leading-none text-gray-900 dark:text-white">
              Band
            </h5>
            <a
              href="#"
              class="text-sm font-medium text-blue-600 hover:underline dark:text-blue-500"
            >
              View all
            </a>
          </div>
          <div class="overflow-x-auto">
            <table class="table-auto min-w-full">
              <thead>
                <tr>
                  <th class="bg-slate-500 text-xl  dark:text-white">
                    Band
                  </th>
                  <th class="bg-slate-500 text-xl  dark:text-white">Edit</th>
                  <th class="bg-slate-500 text-xl  dark:text-white ">Status</th>
                  <th class="bg-slate-500 text-xl  dark:text-white">Action</th>
                </tr>
              </thead>

              <tbody>
                {band?.map((value) => {
                  // console.log(value);
                  return (
                    <tr>
                      {/* key={value._id} */}
                      <td class="text-gray-900 text-lg  dark:text-white ml-2 px-6">
                        {value.name}
                      </td>
                      
                      <td class="text-gray-900 text-lg  dark:text-white ml-2 px-6">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"
                      onClick = {()=>editBand(value._id)}
                      >
                      <path stroke-linecap="round" stroke-linejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
                      </svg>
                      </td>
                      
                      <td class="text-gray-900 text-lg  dark:text-green-400 ml-2 px-6">
                      {value.status ? (
                        <p className="text-green-700">Active</p>
                      ) : (
                        <p className="text-red-700">Blocked</p>
                      )}
                      </td>
                      <td class="text-gray-900 text-lg  dark:text-blue-400 ml-2 px-6">
                      {value.status ? (
                        <p
                          onClick={() => blockBand(value._id)}
                          className="font-medium text-blue-600 dark:text-blue-500 hover:underline cursor-pointer"
                        >
                          Block
                        </p>
                      ) : (
                        <p
                          onClick={() => blockBand(value._id)}
                          className="font-medium text-blue-600 dark:text-blue-500 hover:underline cursor-pointer"
                        >
                          Un-Block
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

        <div class="h-fit p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
          <div className="flex w-full">
            <button
              class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-3 rounded-full mb-4 flex self-center justify-end"
              onClick={addlocation}
            >
              Add Location
            </button>
          </div>
          <div class="flex items-center justify-between mb-4">
            <h5 class="text-2xl font-bold leading-none text-gray-900 dark:text-white">
              Location
            </h5>
            <a
              href="#"
              class="text-sm font-medium text-blue-600 hover:underline dark:text-blue-500"
            >
              View all
            </a>
          </div>
          <div class="overflow-x-auto">
            <table class="table-auto min-w-full">
              <thead>
                <tr>
                  <th class="bg-slate-500 text-xl  dark:text-white">
                    Location
                  </th>
                  <th class="bg-slate-500 text-xl  dark:text-white">Edit</th>
                  <th class="bg-slate-500 text-xl  dark:text-white ">Status</th>
                  <th class="bg-slate-500 text-xl  dark:text-white">Action</th>
                </tr>
              </thead>

              <tbody>
                {location?.map((value) => {
                  return (
                    <tr>
                      {/* key={value._id} */}
                      <td class="text-gray-900 text-lg  dark:text-white ml-2 px-6">
                        {value.name}
                      </td>
                      <td class="text-gray-900 text-lg  dark:text-white ml-2 px-6">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"
                      onClick = {()=>editLocation(value._id)}
                      >
                      <path stroke-linecap="round" stroke-linejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
                      </svg>
                      </td>
                      <td class="text-gray-900 text-lg  dark:text-green-400 ml-2 px-6">
                      {value.status ? (
                        <p className="text-green-700">Active</p>
                      ) : (
                        <p className="text-red-700">Blocked</p>
                      )}
                      </td>
                      <td class="text-gray-900 text-lg  dark:text-blue-400 ml-2 px-6">
                      {value.status ? (
                        <p
                          onClick={() => blockLocation(value._id)}
                          className="font-medium text-blue-600 dark:text-blue-500 hover:underline cursor-pointer"
                        >
                          Block
                        </p>
                      ) : (
                        <p
                          onClick={() => blockLocation(value._id)}
                          className="font-medium text-blue-600 dark:text-blue-500 hover:underline cursor-pointer"
                        >
                          Un-Block
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
      </div>
    </div>
  );
};

export default LocationAndBand;
