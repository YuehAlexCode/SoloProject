import React from "react";
import DisplayFactionWinStats from "../components/DisplayWFactionStats";
import LoggedNavbar from "../components/LoggedNavbar";
import FactionBar from "../components/FactionBar";

const WinFactionPage = (props) => {
    return (
     <div>
        <div className="col-md-8 mx-auto bg-light">
            <LoggedNavbar/>
                <div className="d-inline-flex" >
                    <div className="donutbox">
                        <FactionBar/>
                        <DisplayFactionWinStats/>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default WinFactionPage;