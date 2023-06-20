const Tourney = require("../models/tourney.model.js"); 

module.exports.createTourney = (req, res) =>{
    
    Tourney.create(req.body)
        .then((newTourney)=>res.json(newTourney))
        .catch(err=> res.json({message: 'Something went wrong', error: err}))
},

module.exports.findAllTourneys = (req, res) =>{
    Tourney.find({})
        .then((allTourneys) => {res.json(allTourneys);})
        .catch(err=> res.json({message: 'Something went wrong', error: err}))
},

module.exports.getOneTourney = (req, res) =>{
    Tourney.findOne({_id: req.params.id })
        .then((oneTourney) => res.json(oneTourney))
        .catch((err) => console({message: 'Something went wrong', error: err}))

},

module.exports.updateTourney = (req, res) => {
    Tourney.findById({ _id: req.params.id }, req.body, {
        new: true, 
        runValidators: true,})
        .then((updatedTourney) => res.json(updatedTourney))
        .catch((err) => console({message: 'Something went wrong', error: err}))
},

module.exports.updateTourney = (req, res) => {
    Tourney.findByIdAndUpdate({ _id: req.params.id }, req.body, {
        new: true, 
        runValidators: true,})
        .then((updatedTourney) => res.json(updatedTourney))
        .catch((err) => console({message: 'Something went wrong', error: err}))
},

module.exports.deleteTourney = (req, res) => {
    Tourney.deleteOne({ _id: req.params.id })
        .then((deletedId) => res.json(deletedId))
        .catch((err) => console({message: 'Something went wrong', error: err}))

}
module.exports.getOneWFaction = (req, res) =>{
    const{ faction }= req.params;
    Tourney.find({winningFaction: faction})
        .then((oneFaction) => res.json(oneFaction))
        .catch((err) => console({message: 'Something went wrong', error: err}))

}
module.exports.getOneLFaction = (req, res) =>{
    const{ faction }= req.params;
    Tourney.find({losingFaction: faction})
        .then((oneFaction) => res.json(oneFaction))
        .catch((err) => console({message: 'Something went wrong', error: err}))

}
module.exports.countAll = (req, res) =>{
    Tourney.count({})
        .then((oneFaction) => res.json(oneFaction))
        .catch((err) => console({message: 'Something went wrong', error: err}))
}

module.exports.countFactionW = (req, res) =>{
    const{ faction }= req.params;
    Tourney.count({winningFaction: faction})
        .then((oneFaction) => res.json(oneFaction))
        .catch((err) => console({message: 'Something went wrong', error: err}))
}
module.exports.countFactionL = (req, res) =>{
    const{ faction }= req.params;
    Tourney.count({losingFaction: faction})
        .then((oneFaction) => res.json(oneFaction))
        .catch((err) => console({message: 'Something went wrong', error: err}))
}

module.exports.bestMatchup = (req, res) =>{
    const{ faction }= req.params;
        Tourney.aggregate([
            { $match : { winningFaction : faction} },
            {$group: { _id: '$losingFaction',count: { $sum: 1 }}},
        ])
    .then((bestMatchup) => res.json(bestMatchup))
    .catch((err) => console({message: 'Something went wrong', error: err}))
}
module.exports.worstMatchup = (req, res) =>{
    const{ faction }= req.params;
        Tourney.aggregate([
            { $match : { losingFaction : faction} },
            {$group: { _id: '$winningFaction',count: { $sum: 1 }}},

        ])
    .then((worstMatchup) => res.json(worstMatchup))
    .catch((err) => console({message: 'Something went wrong', error: err}))
}

module.exports.countUserW = (req, res) =>{
    const{ faction }= req.params;
    Tourney.aggregate([
        { $match : { winningPlayer : faction} },
        {$group: { _id: '$winningFaction',count: { $sum: 1 }}},
    ])
        .then((oneFaction) => res.json(oneFaction))
        .catch((err) => console({message: 'Something went wrong', error: err}))
}
module.exports.countUserL = (req, res) =>{
    const{ faction }= req.params;
    Tourney.aggregate([
        { $match : { winningPlayer : faction} },
        {$group: { _id: '$losingFaction',count: { $sum: 1 }}},
    ])
        .then((oneFaction) => res.json(oneFaction))
        .catch((err) => console({message: 'Something went wrong', error: err}))
}

module.exports.countLUserW = (req, res) =>{
    const{ faction }= req.params;
    Tourney.aggregate([
        { $match : { losingPlayer : faction} },
        {$group: { _id: '$winningFaction',count: { $sum: 1 }}},
    ])
        .then((oneFaction) => res.json(oneFaction))
        .catch((err) => console({message: 'Something went wrong', error: err}))
}
module.exports.countLUserL = (req, res) =>{
    const{ faction }= req.params;
    Tourney.aggregate([
        { $match : { losingPlayer : faction} },
        {$group: { _id: '$losingFaction',count: { $sum: 1 }}},
    ])
        .then((oneFaction) => res.json(oneFaction))
        .catch((err) => console({message: 'Something went wrong', error: err}))
}

module.exports.getAllWinCount = (req, res) =>{
    Tourney.aggregate([
        {$group: { _id: '$winningFaction',count: { $sum: 1 }}},
    ])
.then((worstMatchup) => res.json(worstMatchup))
.catch((err) => console({message: 'Something went wrong', error: err}))
}

module.exports.getAllLossCount = (req, res) =>{
    Tourney.aggregate([
        {$group: { _id: '$losingFaction',count: { $sum: 1 }}},
    ])
.then((worstMatchup) => res.json(worstMatchup))
.catch((err) => console({message: 'Something went wrong', error: err}))
}