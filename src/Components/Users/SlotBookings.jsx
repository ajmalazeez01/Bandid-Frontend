import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import { bookingApi, bookingFetchApi } from "../../Helpers/UserApi";
import BookingValidation from "../../Validation/BookingValidation";
import { useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";

const SlotBookings = () => {
 
  const navigate = useNavigate()
  const { id ,name} = useParams();
  const userEmail = useSelector((state) => state.user.email);

  const [isLessThan, setIsLessThan] = useState(true);
  const [SlotDetail, setSlotDetail] = useState({
    name: "",
    email: userEmail,
    band:name,
    mobile: "",
    advprice: 10000,
    peoplecount: "",
    occassion: "",
    fromdate: "",
    todate: "",
    address: "",
    message: "",
  });
  //   console.log(SlotDetail);

  // useEffect(() => {
  //   bookingFetchApi(SlotDetail)
  //     .then((res) => {
  //       setSlotDetail(res.data.message);
  //     })
  //     .catch((error) => {
  //       console.log('catch');
  //       console.log(error);
  //     });
  // }, []);


  const handleSubmit = (e) => {
    e.preventDefault();
    BookingValidation.validate(SlotDetail)
      .then((validatedData) => {
        bookingApi(id,validatedData).then((response) => {
              // console.log(response);
             if (response.data.message) {
              Swal.fire({
                title: "Band booking succesfully!",
                text: "Band booking successfully",
                icon: "success",
              })
              .then(() => {
                navigate(`/user/booking-detail/${id}/${name}`);
              });
            } else {
              // console.log('else');
              Swal.fire({
                icon: 'error',
                title: 'This date is already taken plese change the date!',
                text: 'An error occurred.',
                confirmButtonColor: '#d33', // Set the color of the confirm button (red in this case)
                confirmButtonText: 'OK',
              });
            }
        });
      })
      .catch((validationErrors) => {
        toast.error(validationErrors.message, {
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

  //   this is peplecount onchange
  const handleInputChange = (e) => {
    const value = e.target.value;
    setSlotDetail({ ...SlotDetail, peoplecount: value });
    setIsLessThan(parseInt(value, 10) < 200);
  };
  //   this is peplecount onchange

  // this is from adn to date onchange
  const isValidDateRange = () => {
    const fromDate = new Date(SlotDetail?.fromdate);
    const toDate = new Date(SlotDetail?.todate);
    return fromDate <= toDate;
  };
  const handleFromDateChange = (e) => {
    setSlotDetail({ ...SlotDetail, fromdate: e.target.value });
  };
  const handleToDateChange = (e) => {
    setSlotDetail({ ...SlotDetail, todate: e.target.value });
  };
  //   this is from adn to date onchange

  return (
    <div className="w-full h-full">
      <div>
        <div className="h-28 bg-gray-900 rounded-xl border-2">
          <h1 className="font-serif text-2xl text-white text-center py-9">
            Slot booking
          </h1>
        </div>
        <ToastContainer />
      </div>
      <div className="bg-gray-900 my-36 p-6 rounded-lg shadow-md max-w-2xl mx-auto">
        <h2 className="text-2xl text-white font-bold mb-4 border-b-2 border-blue-500">
          Slot Booking
        </h2>

        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mx-6">
            <div className="mb-4">
              <label className="block text-white text-sm font-bold mb-2">
                Name:
              </label>
              <input
                className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="text"
                value={SlotDetail?.name}
                onChange={(e) =>
                  setSlotDetail({ ...SlotDetail, name: e.target.value })
                }
                placeholder="Enter your name"
              />
            </div>
            <div className="mb-4">
              <label className="block text-white text-sm font-bold mb-2">
                Mobile:
              </label>
              <input
                className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="number"
                value={SlotDetail?.mobile}
                onChange={(e) =>
                  setSlotDetail({ ...SlotDetail, mobile: e.target.value })
                }
                placeholder="Enter your mobile number"
              />
            </div>
            <div className="mb-4">
              <label className="block text-white text-sm font-bold mb-2">
                Email:
              </label>
              <input
                className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="text"
                value={SlotDetail?.email}
                readOnly
              />
            </div>
            <div className="mb-4">
              <label className="block text-white text-sm font-bold mb-2">
                Advanced Price:
              </label>
              <input
                className="appearance-none border text-red-600 rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
                type="number"
                value={SlotDetail?.advprice}
                readOnly
              />
            </div>
            <div className="mb-4">
              <label className="block text-white text-sm font-bold mb-2">
                How many people will attend:
              </label>
              <div>
                <input
                  className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  type="number"
                  id="peoplecount"
                  name="peoplecount"
                  value={SlotDetail?.peoplecount}
                  onChange={handleInputChange}
                  placeholder="Enter how many people attend"
                />
                {isLessThan ? (
                  <p className="text-red-600">Min 200 peoples required</p>
                ) : (
                  ""
                )}
              </div>
            </div>
            <div className="mb-4">
              <label className="block text-white text-sm font-bold mb-2">
                what is your occassion:
              </label>
              <select
                className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                value={SlotDetail?.occassion}
                onChange={(e) =>
                  setSlotDetail({ ...SlotDetail, occassion: e.target.value })
                }
              >
                <option value="">Select an occasion</option>
                <option value="Town">Town</option>
                <option value="College">College</option>
                <option value="birthday">Birthday</option>
                <option value="anniversary">Anniversary</option>
                <option value="wedding">Wedding</option>
              </select>
            </div>

            <div className="mb-4">
              <label className="block text-white text-sm font-bold mb-2">
                From Date:
              </label>
              <input
                className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="date"
                min={new Date().toISOString().split('T')[0]}
                value={SlotDetail?.fromdate}
                onChange={handleFromDateChange}
              />
            </div>
            <div className="mb-4">
              <label className="block text-white text-sm font-bold mb-2">
                To Date:
              </label>
              <input
                className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="date"
                min={new Date().toISOString().split('T')[0]}
                value={SlotDetail?.todate}
                onChange={handleToDateChange}
              />
              {!isValidDateRange() && (
                <p className="text-red-600">To Date must be after From Date</p>
              )}
            </div>

            <div className="mb-4">
              <label className="block text-white text-sm font-bold mb-2">
                Write a Address:
              </label>
              <textarea
                className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="message"
                value={SlotDetail?.address}
                onChange={(e) =>
                  setSlotDetail({ ...SlotDetail, address: e.target.value })
                }
                placeholder="Add address here"
              />
            </div>
            <div className="mb-4">
              <label className="block text-white text-sm font-bold mb-2">
                Tell Us More:
              </label>
              <textarea
                className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="message"
                value={SlotDetail?.message}
                onChange={(e) =>
                  setSlotDetail({ ...SlotDetail, message: e.target.value })
                }
                placeholder="tell us more. . ."
              />
            </div>
          </div>

          <button className="mb-3 text-white w-11/12 ml-6 mx-auto mt-4 rounded-md p-2.5 text-base font-medium bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl">
            Book Now
          </button>
        </form>
      </div>
    </div>
  );
};

export default SlotBookings;
