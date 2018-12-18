const db = require("../models")

//define methods for the allergies controller

module.exports = {
    findAll: function(req,res){
        db.Allergies
            .find(req.query)
            .then(dbModel =>res.json(dbModel))
            .catch(err =>res.status(422).json(err))
    }
}