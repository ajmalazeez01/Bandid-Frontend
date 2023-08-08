import React, { useEffect, useState } from "react";
import Cards from "../../Components/BandPortal/Cards";
import Graph from "../../Components/BandPortal/Graphs";
import { useSelector } from "react-redux";
import { dashboardDetailsApi } from "../../Helpers/AdminApi";

const Dashboards = () => {

  const { email } = useSelector((state) => state.band);
  const [totalusers, settotalUsers] = useState(0);
  const [pending, setTotalPending] = useState([]);
  const [currentBooking, setCurrentBooking] = useState(0);
  const [totalbands, setTotalBands] = useState(0);
  const [cancelledBooking, setCancelledBooking] = useState(0);
  const [totalSum, setTotalSum] = useState(0);

  useEffect(() => {
    dashboardDetailsApi()
      .then((res) => {
        settotalUsers(res.data.users.length);
        setTotalBands(res.data.bands.length);
        setTotalPending(res.data.pending.length);
        // setCancelledBooking(res.data.cancel.length);
      })
      .catch((error) => {
        console.error('Error fetching dashboard details:', error);
      });
  }, [email]);

 


  return (
    <div className='h-screen w-full bg-yellow-100'>
       <div>
      <h1 className="font-bold text-xl md:text-2xl">Dashboard</h1>
      <div className="flex md:flex-row justify-around mt-2 md:mt-8 flex-col">
        <Cards
          colour={"bg-blue-900"}
          head={"Total Users"}
          body={totalusers}
        />
        <Cards
          colour={" bg-yellow-600"}
          head={"Total Bands"}
          body={totalbands}
        />
        <Cards
          colour={" bg-green-600"}
          head={"Total pending"}
          body={pending}
        />
      </div>
      <Graph
        label1={"Total bands"}
        label2={"Total pending"}
        label3={"Total users"}
        data1={totalbands}
        data2={pending}
        data3={totalusers}
      />
    </div>
    </div>
  )
}

export default Dashboards