import "./App.css"
import { Routes, Route} from "react-router-dom";

import TournamentDisplayLoggedin from "./view/TournamentDisplayLoggedin";
import TournamentDisplay from "./view/TournamentDisplay";
import CreateTourney from "./components/CreateTourney";
import UpdateTourney from "./components/UpdateTourney";
import Register from './view/Register';
import Login from './view/Login';
import LossFactionPage from "./view/FactionDisplayLoss";
import WinFactionPage from "./view/FactionDisplayWin";
import WinPlayerPage from "./view/PlayerDisplayWin";
import LossPlayerPage from "./view/PlayerDisplayLoss";
import Graphs from "./view/Graphs";
import LoggedGraphs from "./view/LoggedGraphs";


function App() {
    return (
        <div className="App">
            <Routes>
                <Route path="/graphs" element={<Graphs/>} />
                <Route path="/loggedgraphs" element={<LoggedGraphs/>} />
                <Route  path="players/register" element={<Register/>}/>
                <Route path="players/login" element={<Login/>} />
                <Route path="/logged" element={<TournamentDisplayLoggedin/>}/>
                <Route path="/" element={<TournamentDisplay/>}/>
                <Route path="/tourney/create" element={<CreateTourney />}  />
                <Route path="/tourney/edit/:id" element={<UpdateTourney />}  />    
                <Route path="/Lfaction/:faction" element={<LossFactionPage />}  />   
                <Route path="/Wfaction/:faction" element={<WinFactionPage />}  />   
                <Route path="/wplayer/:faction" element={<WinPlayerPage />}  /> 
                <Route path="/lplayer/:faction" element={<LossPlayerPage />}  />
                <Route  path="*" element={<h1>404- Not found!</h1>}/>         
            </Routes>
        </div>
    );
}

export default App;