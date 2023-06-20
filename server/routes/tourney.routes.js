const TourneyController = require("../controllers/tourney.controller");
const {authenticate} = require("../config/jwt.config");

module.exports = (app)=>{
    app.post("/api/tourney", TourneyController.createTourney);
    app.get("/api/tourney", TourneyController.findAllTourneys);
    app.get("/api/protectedtourney", authenticate, TourneyController.findAllTourneys);
    app.get("/api/tourney/:id",authenticate, TourneyController.getOneTourney);
    app.put("/api/tourney/:id",authenticate, TourneyController.updateTourney);
    app.delete("/api/tourney/:id", TourneyController.deleteTourney);
    app.get("/api/wfaction/:faction", TourneyController.getOneWFaction);
    app.get("/api/lfaction/:faction", TourneyController.getOneLFaction);
    app.get("/api/count", TourneyController.countAll);
    app.get("/api/countW/:faction", TourneyController.countFactionW);
    app.get("/api/countL/:faction", TourneyController.countFactionL);
    app.get("/api/worstmatchup/:faction", TourneyController.worstMatchup);
    app.get("/api/bestmatchup/:faction", TourneyController.bestMatchup);
    app.get("/api/getallwincount", TourneyController.getAllWinCount);
    app.get("/api/getalllosscount", TourneyController.getAllLossCount);
    app.get("/api/countUserW/:faction", TourneyController.countUserW);
    app.get("/api/countUserL/:faction", TourneyController.countUserL);
    app.get("/api/countLUserW/:faction", TourneyController.countLUserW);
    app.get("/api/countLUserL/:faction", TourneyController.countLUserL);
    
    
}