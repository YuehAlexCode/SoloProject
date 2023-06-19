import React, { useState, useEffect } from 'react';
import axios from "axios";
import {  Chart,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend, } from "chart.js";
import { useParams } from 'react-router-dom';
import { Bar } from 'react-chartjs-2';
Chart.register( CategoryScale,LinearScale,BarElement,Title,Tooltip,
Legend);


const FactionBar = (props) => {
  const { faction } = useParams();
  const [bestMatchup, setBestMatchup] = useState([]); 
  const winName = bestMatchup.map(item => item._id);
  const winCount = bestMatchup.map(item => item.count);
  
  useEffect(() => {
    axios
      .get("http://localhost:8000/api/bestmatchup/" + faction)
      .then((res) => {
        console.log(res);
        setBestMatchup(res.data);
      })
      .catch((err) => console.log(err.res));
  }, [faction]);

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

export default FactionBar;