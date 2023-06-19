import React, { useState } from "react";
import axios from "axios";
import {useNavigate} from 'react-router-dom'
import LoggedNavbar from "./LoggedNavbar";

const CreateTourney = () => {
    const navigate = useNavigate();
    const [tourneyData, setTourneyData] = useState({
        tourneyName: "",
        winningPlayer: "",
        losingPlayer: "",
        datePlayed: "",
        winningFaction: "",
        losingFaction: ""
    })

    const handleSubmit = (e) => {
        e.preventDefault()
        if (formValidator()) {
            axios.post("http://localhost:8000/api/tourney", tourneyData)
                .then(res => console.log(res),
                navigate("/logged"))
                
                .catch(err => console.log(err))
            }
            else{
                setErrors({
                    tourneyName: "Name Needed",
                    winningPlayer: "Winner Needed",
                    losingPlayer: "Loser Needed",
                    datePlayed: "Date Needed",
                    winningFaction: "Faction must be selected",
                    losingFaction: "Faction must be selected"
                })
        }
    
    } 
    const [errors, setErrors] = useState({})

    const onChangeHandler = (e) => {
        setTourneyData({
            ...tourneyData,
            [e.target.name]: e.target.value
        })
    }
    const formValidator = () => {
        let isValid = true
        if (tourneyData.tourneyName.length < 2) {
            return false
        }
        if (tourneyData.winningPlayer.length < 2) {
            return false
        }
        if (tourneyData.losingPlayer.length < 2) {
            return false
        }
        if (tourneyData.winningFaction.length < 2) {
            return false
        }
        if (tourneyData.losingFaction.length < 2) {
            return false
        }
        return isValid
        
    }
    
  return (
    <div>
        <LoggedNavbar />    
        <form action="" className="col-md-4 mx-auto" onSubmit={handleSubmit}>
            <div className="form-group">
                <label htmlFor="tourneyName">Tourney Name:</label>
                <input type="text" className="form-control" name="tourneyName" id="tourneyName" value={tourneyData.tourneyName}  onChange={onChangeHandler}/>
                    {errors.tourneyName? <p className="text-danger">{errors.tourneyName}</p> : ""}
            </div>
            <div className="form-group">
                <label htmlFor="tourneyName">Winnner:</label>
                <input type="text" className="form-control" name="winningPlayer" id="winningPlayer" value={tourneyData.winningPlayer}  onChange={onChangeHandler}/>
                    {errors.winningPlayer? <p className="text-danger">{errors.winningPlayer}</p> : ""}
            </div>
            <div className="form-group">
                <label htmlFor="losingPlayer">Loser:</label>
                <input type="text" className="form-control" name="losingPlayer" id="losingPlayer" value={tourneyData.losingPlayer}  onChange={onChangeHandler}/>
                    {errors.losingPlayer? <p className="text-danger">{errors.losingPlayer}</p> : ""}
            </div>
            <div className="form-group">
                <label htmlFor="datePlayed">Date Played:</label>
                <input type="date" className="form-control" name="datePlayed" id="datePlayed" value={tourneyData.datePlayed}  onChange={onChangeHandler}/>
                {errors.datePlayed? <p className="text-danger">{errors.datePlayed}</p> : ""}
            </div>
            <div>
            <label htmlFor="datePlayed">Winning Faction</label>
            <select type="text" className="form-control" name="winningFaction" id="winningFaction" value={tourneyData.winningFaction} onChange={onChangeHandler} >
                <option value="n">Choose Here</option>
                <option value="Space Marines">Space Marines</option>
                <option value="Eldar">Eldar</option>
                <option value="Tau">Tau</option>
                <option value="Necrons">Necrons</option>
                <option value="Imperial Guard">Imperial Guard</option>
            </select>
            {errors.winningFaction? <p className="text-danger">{errors.winningFaction}</p> : ""}
            </div>
            <div>
            <label htmlFor="losingFaction">Losing Faction</label>
            <select type="text" className="form-control" name="losingFaction" id="losingFaction" value={tourneyData.losingFaction} onChange={onChangeHandler} >
                <option value="n">Choose Here</option>
                <option value="Space Marines">Space Marines</option>
                <option value="Eldar">Eldar</option>
                <option value="Tau">Tau</option>
                <option value="Necrons">Necrons</option>
                <option value="Imperial Guard">Imperial Guard</option>
            </select>
            {errors.losingFaction? <p className="text-danger">{errors.losingFaction}</p> : ""}
            </div>
            <button className="btn btn-primary" type="submit">
            Submit
            </button>
        </form>
        </div>
    );
};

export default CreateTourney;