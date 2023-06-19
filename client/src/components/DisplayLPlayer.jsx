import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from 'react-router-dom';

const DisplaynameWinStats = (props) => {
  const { faction } = useParams();
  const [countDataW, setCountDataW] = useState([]); 
  const [countDataL, setCountDataL] = useState([]); 

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/countLUserW/" + faction)
      .then((res) => {
        console.log(res);
        setCountDataW(res.data);
      })
      .catch((err) => console.log(err.res));
  }, [faction]);
  useEffect(() => {
    axios
      .get("http://localhost:8000/api/countLUserL/" + faction)
      .then((res) => {
        console.log(res);
        setCountDataL(res.data);
      })
      .catch((err) => console.log(err.res));
  }, [faction]);

  return (
    <div>
      <h1>Losing Player's name: {faction}</h1>
      <div className="d-inline-flex">
      <div className=" container bg-danger">
          <h4 >Losses with: {countDataL.map((Losses, index) => {
            return(
                  <div className="border-top border-dark" key={Losses._id}>{Losses._id}, {Losses.count} </div>
                )})}
          </h4>
        </div>
        <div className="inbetween"></div>
        <div className=" container bg-success">
          <h4 >loss against: {countDataW.map((wins, index) => {
            return(
                  <div className="border-top border-dark" key={wins._id}>{wins._id}, {wins.count} </div>
                )})}
          </h4>
        </div>
      </div>
    </div>
  );
};
export default DisplaynameWinStats;