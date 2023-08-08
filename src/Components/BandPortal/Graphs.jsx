
import React, { useEffect, useState } from "react";
import Chart from "chart.js/auto";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';


function Graphs({label1,label2,label3,data1,data2,data3}) {
  ChartJS.register(ArcElement, Tooltip, Legend);




  const data = {
    labels: [label1, label2, label3],
    datasets: [
      {
        label: '# of Votes',
        data: [data1,data2,data3],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          // 'rgba(153, 102, 255, 0.2)',
          // 'rgba(255, 159, 64, 0.2)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          // 'rgba(153, 102, 255, 1)',
          // 'rgba(255, 159, 64, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className=" bg-slate-200 md:w-2/4 w-fit mx-auto mt-3 p-3 rounded-xl shadow-2xl">
      <h1 className="text-sm md:text-xl font-bold"> Pie Chart </h1>
      <div className="w-72 h-72 flex mx-auto">

      <Pie data={data} />
      </div>
    </div>
  );
}

export default Graphs;