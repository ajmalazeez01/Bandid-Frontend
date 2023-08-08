import React, { useEffect, useState } from "react";
import Cards from "../../Components/BandPortal/Cards";
import Graph from "../../Components/BandPortal/Graphs";
import { useSelector } from "react-redux";
import { dashboardDetailsApi } from "../../Helpers/BandApi";

const Dashboards = () => {

  const { email } = useSelector((state) => state.band);
  const [reviewCount, setReviewCount] = useState(0);
  const [totalRevenue, setTotalRevenue] = useState([]);
  const [currentBooking, setCurrentBooking] = useState(0);
  const [totalBooking, setTotalBooking] = useState(0);
  const [cancelledBooking, setCancelledBooking] = useState(0);
  const [totalSum, setTotalSum] = useState(0);

  useEffect(() => {
    dashboardDetailsApi(email)
      .then((res) => {
        setTotalBooking(res.data.booking.length);
        setReviewCount(res.data.review.length);
        setCancelledBooking(res.data.cancel.length);
        setTotalRevenue(res.data.revenue);
      })
      .catch((error) => {
        console.error('Error fetching dashboard details:', error);
      });
  }, [email]);

  useEffect(() => {
    let sum=0
    totalRevenue.forEach((data) => {
      sum += data.advprice;
    });
    // console.log(sum);
    setTotalSum(sum);
  }, [totalRevenue]);


  return (
    <div className='h-screen w-full bg-yellow-100'>
       <div>
      <h1 className="font-bold text-xl md:text-2xl">Dashboard</h1>
      <div className="flex md:flex-row justify-around mt-2 md:mt-8 flex-col">
        <Cards
          colour={"bg-blue-900"}
          head={"Current Booking"}
          body={currentBooking}
        />
        <Cards
          colour={" bg-yellow-600"}
          head={"Total Booking"}
          body={totalBooking}
        />
        <Cards
          colour={" bg-green-600"}
          head={"Total Revenue"}
          body={`Rs: ${totalSum}`}
        />
      </div>
      <Graph
        label1={"Cancelled Booking"}
        label2={"Total Review"}
        label3={"Total Booking"}
        label4={"Current Booking"}
        data1={cancelledBooking}
        data2={reviewCount}
        data3={totalBooking}
        data4={currentBooking}
      />
    </div>
    </div>
  )
}

export default Dashboards