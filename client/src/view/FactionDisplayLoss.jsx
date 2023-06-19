import React from "react";
import DisplayFactionLossStats from "../components/DisplayLFactionStats";
import LoggedNavbar from "../components/LoggedNavbar";
import FactionBar from "../components/FactionBar";

const LossFactionPage = (props) => {
    return (
        <div>
        <div className="col-md-8 mx-auto bg-light">
            <LoggedNavbar/>
                <div className="d-inline-flex" >
                    <div className="donutbox">
                        <FactionBar/>
                        <DisplayFactionLossStats/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LossFactionPage;