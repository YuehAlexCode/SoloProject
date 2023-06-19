import React from "react";
import DisplayLPlayer from "../components/DisplayLPlayer";
import LoggedNavbar from "../components/LoggedNavbar";

const LossFactionPage = (props) => {
    return (
        <div className="container">
            <LoggedNavbar/>
            <div  className="col-md-12 mx-auto bg-light">
                <DisplayLPlayer/>
            </div>
        </div>
    );
};

export default LossFactionPage;