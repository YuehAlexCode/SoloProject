import React from "react";
import DisplayWPlayer from "../components/DisplayWPlayer";
import LoggedNavbar from "../components/LoggedNavbar";

const WinPlayerPage = (props) => {
    return (
        <div className="container">
            <LoggedNavbar/>
            <div  className="col-md-12 mx-auto bg-light">
                <DisplayWPlayer/>
            </div>
        </div>
    );
};
export default WinPlayerPage;