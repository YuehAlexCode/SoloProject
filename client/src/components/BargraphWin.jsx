import React, { useState, useEffect } from 'react';
import axios from "axios";
import {  Chart,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend, } from "chart.js";
import { Bar } from 'react-chartjs-2';
Chart.register( CategoryScale,LinearScale,BarElement,Title,Tooltip,
Legend);


const BargraphWin = () => {
  const [faction , setFaction]  = useState([]); 
  const winName = faction.map(item => item._id);
  const winCount = faction.map(item => item.count);
  
  useEffect(() => {
    axios
      .get("http://localhost:8000/api/getallwincount")
      .then((res) => {
        console.log(res);
        setFaction(res.data);
      })
      .catch((err) => console.log(err.res));
  }, []);

  const data = {
      labels: winName,
      datasets: [
        {
          label: "wins",
          data: winCount,
          backgroundColor:"lightgreen",
          borderColor:"green",
          borderWidth: 0.5,
        },
      ],
    }; 
    const options = {
      scales: {
        y: {
          beginAtZero: true,
        },
      },
    };

    return(
        <Bar data={data}
         options={options}>
         </Bar>
        
        );
  };

export default BargraphWin;