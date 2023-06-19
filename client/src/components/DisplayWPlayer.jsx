import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from 'react-router-dom';

const DisplaynameWinStats = (props) => {
  const { faction } = useParams();
  const [countDataW, setCountDataW] = useState([]); 
  const [countDataL, setCountDataL] = useState([]); 

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/countUserW/" + faction)
      .then((res) => {
        console.log(res);
        setCountDataW(res.data);
      })
      .catch((err) => console.log(err.res));
  }, [faction]);
  useEffect(() => {
    axios
      .get("http://localhost:8000/api/countUserL/" + faction)
      .then((res) => {
        console.log(res);
        setCountDataL(res.data);
      })
      .catch((err) => console.log(err.res));
  }, [faction]);

  return (
    <div>
      <h1>Winning Player's name: {faction}</h1>
      <div className="d-inline-flex">
      <h4 className=" bg-success">Victories: {countDataW.map((Losses, index) => {
          return(
                <div className="border-top border-dark" key={Losses._id}>{Losses._id}, Number of Wins:{Losses.count} </div>
              )})}
        </h4>
        <div className="inbetween"></div>
        <h4 className="bg-danger">Losses: {countDataL.map((wins, index) => {
          return(
                <div className="border-top border-dark" key={wins._id}>{wins._id}, Number of Losses:{wins.count} </div>
              )})}
        </h4>
        </div>
    </div>
  );
};
export default DisplaynameWinStats;