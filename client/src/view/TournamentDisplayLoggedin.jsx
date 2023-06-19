import React from "react";
import DisplayAllLoggedIn from "../components/DisplayAllLoggedIn";
import LoggedNavbar from "../components/LoggedNavbar";


const TournamentDisplay = (props) => {
    return (
        <div>
            <LoggedNavbar/>
            <DisplayAllLoggedIn/>
        </div>
    );
};

export default TournamentDisplay;