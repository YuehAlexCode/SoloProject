import React from "react";
import DonutFront from "../components/DonutFront";
import Navbar from "../components/Navbar";
import BargraphWin from "../components/BargraphWin";
import BargraphLoss from "../components/BargraphLoss";

const Main = (props) => {
    return (
        <div className="container">
            <Navbar/>
            <div className="col-md-12 mx-auto bg-light">
                <div className="d-inline-flex w-60 p3" >
                    <div className="donutbox">
                        <DonutFront/>
                    </div >
                    <div className="barbox">
                        <BargraphWin />
                        <BargraphLoss />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Main;