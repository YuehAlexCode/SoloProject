import React from "react";
import DisplayAll from "../components/DisplayAll";
import Navbar from "../components/Navbar";


const TournamentDisplay = (props) => {
    return (
        <div>
            <Navbar/>
            <DisplayAll/>
        </div>
    );
};

export default TournamentDisplay;