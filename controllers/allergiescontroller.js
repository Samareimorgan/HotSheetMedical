const db = require("../models")

//define methods for the allergies controller

module.exports = {
    findAll: function(req,res){
        db.Allergies
            .find(req.query)
            .then(dbModel =>res.json(dbModel))
            .catch(err =>res.status(422).json(err))
    },

    findById: function(req,res){
        db.Allergies
            .findById(req.params.id)
            .then(dbModel => res.json(dbModel))
            .catch(err =>res.status(422).json(err))
    },

    create: function(req,res) {
        db.Allergies
            .create(req.body)
            .then(dbModel=>res.json(dbModel))
            .catch(err =>res.status(422).json(err))
    },

    update: function(req,res) {
        db.Allergies
            .findOneAndUpdate({_id:req.params.id},req.body)
            .then(dbModel => res.json(dbModel))
            .catch(err =>res.status(422).json(err))
    },
    
    remove: function(req,res) {
        db.Allergies
            .findById({_id:req.params.id})
            .then(dbModel=>dbModel.remove())
            .then(dbModel =>res.json(dbModel))
            .catch(err =>res.status(422).json(err))
    }
};