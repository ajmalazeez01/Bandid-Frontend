import React from "react";
import { useSelector } from "react-redux";
import { Navigate, useParams } from "react-router-dom";
import {
  bookingDetailFetchApi,
  buybandInCheckOut,
  verifyApi,
} from "../../Helpers/UserApi";
import { useEffect } from "react";
import { useState } from "react";
import { toast } from "react-toastify";
import useRazorpay from "react-razorpay";

const BookingDetails = () => {
  const userEmail = useSelector((state) => state.user.email);

  const { name } = useParams();

  const Razorpay = useRazorpay();

  const [SlotDetail, setSlotDetail] = useState();

  useEffect(() => {
    bookingDetailFetchApi(userEmail)
      .then((res) => {
        // console.log(res.data.message);
        setSlotDetail(res.data.message);
      })
      .catch((error) => {
        console.log("catch");
        console.log(error);
      });
  }, []);

  const initPayment = async (data, detail, bookingDetails) => {
    try {
      // console.log(bookingDetails, "!!!!!!!");
      const amount = data.order.amount;
      const bandId = detail._id;
      const options = {
        key: process.env.REACT_APP_RAZORPAY_KEY_ID,
        amount: amount,
        currency: data.order.currency,
        name: detail.band,
        order_id: data.order.id,

        handler: async (response) => {
          console.log(response);
          try {
            const { data } = await verifyApi(bandId, response, bookingDetails);
            console.log(data, "Response data");
            if (response) {
              toast.success("Order successfully placed", {
                autoClose: 3000,
                position: toast.POSITION.TOP_CENTER,
              });
              // Navigate('/user/')
            }
          } catch (error) {
            toast.error(error.message);
          }
        },
        theme: {
          color: "#3399cc",
        },
      };

      const rzp1 = new Razorpay(options);

      rzp1.open();
    } catch (error) {
      console.log(error, "KKKKK");
    }
  };

  const onSubmit = async (values) => {
    try {
      const bookingDetails = values;
      const { data } = await buybandInCheckOut(SlotDetail?._id);
      // console.log(data);
      const detail = SlotDetail;
      if (values) {
        initPayment(data, detail, bookingDetails);
      } else {
        toast.error("Payment method temporarily unavailable");
      }
    } catch (error) {
      console.log(error, "HHHHH");
      toast.error(error.message);
    }
  };

  return (
    <div>
      <div className="w-full h-28 bg-gray-900 rounded-xl border-2">
        <h1 className="font-serif text-2xl text-white text-center py-9">
          Booking details
        </h1>
      </div>

      <div className="bg-gray-900 p-6 my-36  rounded-lg shadow-md max-w-lg mx-auto">
        <h2 className="text-2xl font-bold mb-4 border-b-2 border-blue-500 text-white">
          Booking Details
        </h2>
        <p className="py-1 text-white font-serif text-lg">
          <strong>Booking ID : </strong> {SlotDetail?._id}
        </p>
        <p className="py-1 text-white font-serif text-lg">
          <strong>Name : </strong> {name} Band
        </p>
        <p className="py-1 text-white font-serif text-lg">
          <strong>Email : </strong> {userEmail}
        </p>
        <p className="py-1 text-white font-serif text-lg">
          <strong>From Date : </strong> {SlotDetail?.fromdate}
        </p>
        <p className="py-1 text-white font-serif text-lg">
          <strong>To Date : </strong> {SlotDetail?.todate}
        </p>
        <p className="py-1 text-white font-serif text-lg">
          <strong>No of peoples attend : </strong> {SlotDetail?.peoplecount}
        </p>
        <p className="py-1 text-white font-serif text-lg">
          <strong>Advance Price : </strong> ₹{SlotDetail?.advprice}
        </p>
        <p className="py-1 text-white font-serif text-lg">
          <strong>Total Price : </strong> ₹{SlotDetail?.advprice}
        </p>
        <button
          className="mb-3 text-white font-serif text-lg w-11/12 ml-3 mx-auto mt-4 rounded-md p-2.5  font-medium bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl"
          onClick={onSubmit}
        >
          Proceed to pay
        </button>
      </div>
    </div>
  );
};

export default BookingDetails;
