import React, { useState, useEffect } from 'react';
import axios from "axios";
import {Chart, ArcElement} from 'chart.js'
import { Doughnut } from 'react-chartjs-2';
Chart.register(ArcElement);


const Donut = () => {
  const [faction , setFaction]  = useState();
  const [countDataL, setCountDataL] = useState([]); 
  const [countDataW, setCountDataW] = useState([]); 
  useEffect(() => {
    axios
      .get('http://localhost:8000/api/countL/' + faction)
      .then((res) => {
        console.log(res);
        setCountDataL(res.data);
      })
      .catch((err) => console.log(err.res));
  }, [faction]);
  useEffect(() => {
    axios
      .get("http://localhost:8000/api/countW/" + faction)
      .then((res) => {
        console.log(res);
        setCountDataW(res.data);
      })
      .catch((err) => console.log(err.res));
  }, [faction]);

  
  
    const data = {
        labels: ['loss', 'win'],
        datasets: [
          {
            label: 'Meta Pick',
            data: [countDataL,countDataW],
            backgroundColor:[ "salmon","lightgreen"],
            borderColor:["red","green" ],
            borderWidth: 0.5,
            
            
          },
        ],
      };
      
      const options = {
        width:"100",
        height:"100",

      };
    

      return(
        <div>
          <label htmlFor="Faction">Faction</label>
          <select onChange={e => setFaction(e.target.value)}
             value={faction}
          >
              <option value="Space Marines">Space Marines</option>
              <option value="Eldar">Eldar</option>
              <option value="Tau">Tau</option>
              <option value="Necrons">Necrons</option>
              <option value="Imperial Guard">Imperial Guard</option>
          </select>
          <Doughnut data={data} options={options} />
        </div>
        
         
         );
    };
    
  
export default Donut;