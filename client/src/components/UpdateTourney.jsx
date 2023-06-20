import React, { useState, useEffect } from "react";
import axios from "axios";
import {useNavigate, useParams} from 'react-router-dom'
import LoggedNavbar from "./LoggedNavbar";

const UpdateTourney = () => {
    const {id} = useParams();
    const navigate = useNavigate();
    const [newtourneyData, setNewTourneyData] = useState({
        tourneyName: "",
        winningPlayer: "",
        losingPlayer: "",
        datePlayed: "",
        winningFaction: "",
        losingFaction: ""
    })
    useEffect(() => {
        axios
          .get("http://localhost:8000/api/tourney"+ id, newtourneyData, {withCredentials:true})
          .then((res) => {
            console.log(res);
            setNewTourneyData(res.data);
          })
          .catch((err) => console.log(err.res));
      }, [id]);
    
    const handleSubmit = (e) => {
        e.preventDefault()
        if (formValidator()) {
            axios.put("http://localhost:8000/api/tourney/"+ id, newtourneyData, {withCredentials:true})
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
        setNewTourneyData({
            ...newtourneyData,
            [e.target.name]: e.target.value
        })
    }
    const formValidator = () => {
        let isValid = true
        if (newtourneyData.tourneyName.length < 2) {
            return false
        }
        if (newtourneyData.winningPlayer.length < 2) {
            return false
        }
        if (newtourneyData.losingPlayer.length < 2) {
            return false
        }
        if (newtourneyData.winningFaction.length < 2) {
            return false
        }
        if (newtourneyData.losingFaction.length < 2) {
            return false
        }
        return isValid
        
    }
    
  return (
    <div>
        <LoggedNavbar />  
        <h1>Edit Results</h1>  
        <form action="" className="col-md-4 mx-auto" onSubmit={handleSubmit}>
            <div className="form-group">
                <label htmlFor="tourneyName">Tourney Name:</label>
                <input type="text" className="form-control" name="tourneyName" id="tourneyName" value={newtourneyData.tourneyName}  onChange={onChangeHandler}/>
                    {errors.tourneyName? <p className="text-danger">{errors.tourneyName}</p> : ""}
            </div>
            <div className="form-group">
                <label htmlFor="tourneyName">Winnner:</label>
                <input type="text" className="form-control" name="winningPlayer" id="winningPlayer" value={newtourneyData.winningPlayer}  onChange={onChangeHandler}/>
                    {errors.winningPlayer? <p className="text-danger">{errors.winningPlayer}</p> : ""}
            </div>
            <div className="form-group">
                <label htmlFor="losingPlayer">Loser:</label>
                <input type="text" className="form-control" name="losingPlayer" id="losingPlayer" value={newtourneyData.losingPlayer}  onChange={onChangeHandler}/>
                    {errors.losingPlayer? <p className="text-danger">{errors.losingPlayer}</p> : ""}
            </div>
            <div className="form-group">
                <label htmlFor="datePlayed">Date Played:</label>
                <input type="date" className="form-control" name="datePlayed" id="datePlayed" value={newtourneyData.datePlayed}  onChange={onChangeHandler}/>
                {errors.datePlayed? <p className="text-danger">{errors.datePlayed}</p> : ""}
            </div>
            <div>
            <label htmlFor="datePlayed">Winning Faction</label>
            <select type="text" className="form-control" name="winningFaction" id="winningFaction" value={newtourneyData.winningFaction} onChange={onChangeHandler} >
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
            <select type="text" className="form-control" name="losingFaction" id="losingFaction" value={newtourneyData.losingFaction} onChange={onChangeHandler} >
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

export default UpdateTourney;