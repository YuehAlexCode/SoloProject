import React, { useEffect,useState } from "react";
import axios from "axios";


const DisplayAll = (props) => {
    const dayjs = require('dayjs')
    const [tourneyData, setTourneyData] = useState([]);
 
    useEffect(() => {
      axios
        .get("http://localhost:8000/api/tourney")
        .then((res) => {
          console.log(res);
          setTourneyData(res.data);
        })
        .catch((err) => console.log(err.res));
    }, []);

    return (
      <div  className="container bg-light">
        <h1 className= "page-title">40K Tournaments</h1>
        <div className="col-md-6 mx-auto">
        <table className="table table-dark table-striped">
          <thead>
            <tr>
              <th>Tournement Name</th>
              <th>Winner</th>
              <th>Loser</th>
              <th>Date</th>
              <th>Winning Faction</th>
              <th>Losing Faction</th>
            </tr>
          </thead>
          <tbody>
            {tourneyData.map((tourney, index) => {
              return (
                <tr key={tourney._id}>
                  <td >{tourney.tourneyName}</td>
                  <td><a className="text-decoration-none" href={`/wplayer/${tourney.winningPlayer}`}>{tourney.winningPlayer}</a></td>
                    <td><a className="text-decoration-none"  href={`/lplayer/${tourney.losingPlayer}`}>{tourney.losingPlayer}</a></td>
                    <td>{dayjs(tourney.datePlayed).format('MM/DD/YYYY')}</td>
                    <td><a className="text-decoration-none" href={`/Wfaction/${tourney.winningFaction}`}>{tourney.winningFaction}</a></td>
                    <td><a className="text-decoration-none" href={`/Lfaction/${tourney.losingFaction}`}>{tourney.losingFaction}</a></td>
                </tr>
              );
            })}
          </tbody>
        </table>
        </div>
      </div>
    );
  };
export default DisplayAll;