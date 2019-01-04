const db = require("../models");

//defining the methods for insurance db
module.exports = {
    findAll: function(req,res) {
        db.Insurances
            .find(req.query)
            .sort({date: -1})
            .then(dbModel => res.json(dbModel))
            .catch(err =>res.status(422).json(err))
    }, 

    findById: function(req,res) {
        db.Insurances
            .findById(req.params.id)
            .then(dbModel => res.json(dbModel))
            .catch(err =>res.status(422).json(err))
    },

    create: function(req,res) {
        db.Insurances
            .create(req.body)
            .then(dbModel =>res.json(dbModel))
            .catch(err =>res.status(422).json(err))
    },

    update: function(req,res) {
        db.Insurances
            .findOneAndUpdate({ _id: req.params.id}, req.body)
            .then(dbModel =>res.json(dbModel))
            .catch(err =>res.status(422).json(err))
    },

    remove: function(req,res) {
        db.Insurances
            .findbyId({_id: req.params.id})
            .then(dbModel => dbModel.remove())
            .then(dbModel =>res.json(dbModel))
            .catch(err =>res.status(422).json(err))
    }
}