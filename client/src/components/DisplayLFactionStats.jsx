import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from 'react-router-dom';

const DisplayFactionLossStats = (props) => {
  const { faction } = useParams();
  const [countDataL, setCountDataL] = useState([]); 
  const [countDataW, setCountDataW] = useState([]); 
  const [worstMatchup, setWorstMatchup] = useState([]); 
  const [bestMatchup, setBestMatchup] = useState([]); 
  useEffect(() => {
    axios
      .get("http://localhost:8000/api/Lfaction/" + faction)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.log(err.res));
  }, [faction]);

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/countL/" + faction)
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
  useEffect(() => {
    axios
      .get("http://localhost:8000/api/worstmatchup/" + faction)
      .then((res) => {
        console.log(res);
        setWorstMatchup(res.data);
      })
      .catch((err) => console.log(err.res));
  }, [faction]);
  useEffect(() => {
    axios
      .get("http://localhost:8000/api/bestmatchup/" + faction)
      .then((res) => {
        console.log(res);
        setBestMatchup(res.data);
      })
      .catch((err) => console.log(err.res));
  }, [faction]);


  return (
    <div>
      <h1>Losing Faction: {faction}</h1>
      <h2 >Loss Percentage {Math.round(countDataL / (countDataW + countDataL)*100)}%</h2>
      <h3>Faction Particiaption: {countDataW + countDataL}</h3>
      <div className="d-inline-flex">
      <h4 className="bg-success">Win per Faction: {bestMatchup.map((winMatchup, index) => {
           return(
            <div className="border-top border-dark" key={winMatchup._id}>{winMatchup._id}, Number of wins:{winMatchup.count} </div>
          )})}
          </h4>
          <div className="inbetween"></div>
          <h4 className="bg-danger">Loss per Faction: {worstMatchup.map((lossMatchuo, index) => {
          return(
                <div className="border-top border-dark" key={lossMatchuo._id}>{lossMatchuo._id}, Number of Losses:{lossMatchuo.count} </div>
              )})}
      </h4>
      </div>
    </div>
  );
};
export default DisplayFactionLossStats;