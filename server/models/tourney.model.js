const mongoose = require("mongoose");

const TourneySchema= new mongoose.Schema(
    {
        tourneyName: {
          type: String,
          required: [true, "Tourney name is required"],
          minlength: [2, "Tourney Name must be at least 2 characters"],
        },  
        winningPlayer: {
          type: String,
          required: [true, "player name is required"],
          minlength: [2, "Player Name must be at least 2 characters"],
        },  
        losingPlayer: {
          type: String,
          required: [true, "player name is required"],
          minlength: [2, "Player Name must be at least 2 characters"],
        },  
        datePlayed: {
            type: Date
          },
        winningFaction: {
            type: String,
            enum: ["Space Marines", "Eldar", "Tau","Necrons","Imperial Guard","etc"],
            required: [true, "Player faction must not be blank"]
        },
        losingFaction: {
            type: String,
            enum: ["Space Marines", "Eldar", "Tau","Necrons","Imperial Guard","etc"],
            required: [true, "Opponent faction must not be blank"]
        },    
      },
     { timestamps: true });

const Tourney = mongoose.model("Tourney", TourneySchema);
module.exports = Tourney;