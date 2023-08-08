import React, { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { BandDetailsApi, categoryApi } from "../../Helpers/BandApi";
import Swal from "sweetalert2";
import BandDetailvalidation from "../../Validation/BandDetailValidation";
import { addBandId } from "../../Store/Slices/BandIdSlice";

const BandDetail = () => {
  // const dispatch = useDispatch()
  const location = useSelector((state) => state.band.location);
  const email = useSelector((state) => state.band.email);

  const [updated, setUpdated] = useState(false);
  const [image, setImage] = useState(null);
  const [category, setCategory] = useState([]);
  const [preview, setPreview] = useState();

  const [detail, setDetail] = useState({
    email: email,
    category: "",
    name: "",
    mobile: "",
    website: "",
    location: location,
    description: "",
    service: "",
  });
  // console.log(image);

  useEffect(() => {
    categoryApi().then((res) => {
      setCategory(res.data.message);
    });
  }, []);

  const handleImage = (e) => {
    const file = e.target.files[0];
    setPreview(URL.createObjectURL(file));
    const allowedExtensions = /(\.jpg|\.jpeg|\.png|\.gif)$/;
    if (!allowedExtensions.exec(file?.name)) {
      toast.error("Format is not supported");
    } else {
      setImage(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("photo", image);
    formData.append("email", detail.email);
    formData.append("category", detail.category);
    formData.append("name", detail.name);
    formData.append("mobile", detail.mobile);
    formData.append("website", detail.website);
    formData.append("location", detail.location);
    formData.append("description", detail.description);
    formData.append("service", detail.service);

    BandDetailvalidation.validate(detail)
      .then((validatedData) => {
        console.log(validatedData);

        BandDetailsApi(validatedData.email, formData)
          .then((response) => {
            if (response.data.success) {
              // dispatch(
              //   addBandId({
              //     id: response.data.id,
              //   })
              // );
              Swal.fire({
                position: "center",
                icon: "success",
                title: "Details have been saved",
                showConfirmButton: false,
                timer: 1500,
              }).then(() => {
                setUpdated((updated) => !updated);
                setImage(null);
              });
            } else {
              toast.error(response.data.message, {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
              });
            }
          })
          .catch((err) => {
            toast.error(err.message, {
              position: "top-right",
              autoClose: 2000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "dark",
            });
          });
      })
      .catch((err) => {
        toast.error(err.message, {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
      });
  };

  return (
    <div className="bg-yellow-100 w-full h-screen">
      <h1 className="flex-col sm:flex-row font-bold text-3xl py-2 pl-3">
        Band Details
      </h1>
      <ToastContainer />
      <form onSubmit={handleSubmit}>
        <div className="flex border-black border-2 justify-center rounded-lg">
          <div className="grid grid-cols-2 w-4/5 h-full">
            <div>
              <label className="block mb-2 pl-1 text-sm font-medium text-gray-900 dark:text-black">
                Email
              </label>
              <input
                className="appearance-none block w-full dark:bg-gray-700 text-white border border-blue-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none"
                type="email"
                value={detail.email}
                onChange={(e) =>
                  setDetail({ ...detail, email: e.target.value })
                }
                readOnly
              />
            </div>
            <div>
              <label className="ml-7 block mb-2 pl-1 text-sm font-medium text-gray-900 dark:text-black">
                Mobile
              </label>
              <input
                className="ml-7 appearance-none block w-full dark:bg-gray-700 text-white border border-blue-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none"
                type="mobile"
                placeholder="Mobile"
                value={detail.mobile}
                onChange={(e) =>
                  setDetail({ ...detail, mobile: e.target.value })
                }
              />
            </div>

            <div>
              <label className="block mb-2 pl-1 text-sm font-medium text-gray-900 dark:text-black">
                Band Category
              </label>
              <select
                className="appearance-none block w-full dark:bg-gray-700 text-white border border-blue-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none"
                value={detail.category}
                onChange={(e) =>
                  setDetail({ ...detail, category: e.target.value })
                }
              >
                <option value="">Select a Category</option>
                {category.map((category) => (
                  <option
                    key={category}
                    value={category.name}
                    className="text-white"
                  >
                    {category.name}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="ml-7 block mb-2 text-sm font-medium text-gray-900 dark:text-black">
                Band name
              </label>
              <input
                className="ml-7 appearance-none block w-full dark:bg-gray-700 text-white border border-blue-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none"
                type="name"
                placeholder="Name"
                value={detail.name}
                onChange={(e) => setDetail({ ...detail, name: e.target.value })}
              />
            </div>

            <div>
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">
                Website
              </label>
              <input
                className="appearance-none block w-full dark:bg-gray-700 text-white border border-blue-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none"
                type="website"
                placeholder="Website"
                value={detail.website}
                onChange={(e) =>
                  setDetail({ ...detail, website: e.target.value })
                }
              />
            </div>
            <div>
              <label className="ml-7 block mb-2 pl-1 text-sm font-medium text-gray-900 dark:text-black">
                Location
              </label>
              <input
                className="ml-7 appearance-none block w-full dark:bg-gray-700 text-white border border-blue-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none"
                type="location"
                value={detail.location}
                readOnly
                onChange={(e) =>
                  setDetail({ ...detail, location: e.target.value })
                }
              />
            </div>
            <div>
              <label className="block mb-2 pl-1 text-sm font-medium text-gray-900 dark:text-black">
                Description
              </label>
              <select
                className="appearance-none block w-full dark:bg-gray-700 text-white border border-blue-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none"
                value={detail.description}
                onChange={(e) =>
                  setDetail({ ...detail, description: e.target.value })
                }
              >
               <option value="">Select a description</option>
                <option value="It delivers a polished and professional performance that exceeds expectations. Their dedication to excellence ensures that every sound is crystal clear, every note resonates, and every beat pulsates with energy.">
                  It delivers a polished and professional performance
                </option>
                <option value="It delivering crowd-pleasing covers and original compositions. Their ability to adapt and customize their performances ensures a seamless integration into any event or occasion.">
                  It delivering crowd-pleasing covers and original compositions
                </option>
                <option value="Experience and a proven track record of delivering unforgettable performances. Having graced the stages of renowned venues and events, their expertise and professionalism shine through in every note they play.">
                  Experience and a proven track record of delivering
                  unforgettable performances
                </option>
              </select>
            </div>

            <div>
              <label className="ml-7 block mb-2 pl-1 text-sm font-medium text-gray-900 dark:text-black">
                Services
              </label>
              <select
                className="ml-7 appearance-none block w-full dark:bg-gray-700 text-white border border-blue-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none"
                value={detail.service}
                onChange={(e) =>
                  setDetail({ ...detail, service: e.target.value })
                }
              >
                <option value="">Select Services</option>
                <option value="Song Requests">specific Song Requests</option>
                <option value="Customization">Customization</option>
                <option value="Travel">Travel</option>
              </select>
            </div>

            <div>
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">
                Upload Image
              </label>
              <input
                type="file"
                name="photo"
                onChange={handleImage}
                // multiple
                className="appearance-none block w-full dark:bg-gray-700 text-white border border-blue-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none"
              />
              <img
                className="bg-yellow-100 w-28 mt-2 h-28 object-cover rounded-full"
                src={preview ? preview : " "}
              />
            </div>
            <div>
              <button className="my-8 bg-green-500 hover:bg-green-600 text-white font-bold py-3 ml-7 px-5 rounded">
                Save
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default BandDetail;
