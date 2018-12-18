const db = require("../controllers")

//defining the methods for insurance db
module.exports = {
    findAll: function(req,res) {
        db.Insurance
        .find(req.query)
        .sort({date: -1})
        .then(dbModel => res.json(dbModel))
        .catch(err =>res.status(422).json(err))
    }, 

    findById: function(req,res) {
        db.Insurance
            .findById(req.params.id)
            .then(dbModel => res.json(dbModel))
            .catch(err =>res.status(422).json(err))
    },

    create: function(req,res) {
        db.Insurance
            .create(req.body)
            .then(dbModel =>res.json(dbModel))
            .catch(err =>res.status(422).json(err))
    },

    update: function(req,res) {
        db.Insurance
            .findOneAndUpdate({ _id: req.params.id}, req.body)
            .then(dbModel =>res.json(dbModel))
            .catch(err =>res.status(422).json(err))
    },

    remove: function(req,res) {
        db.Insurance
            .findbyId({_id: req.params.id})
            .then(dbModel => dbModel.remove())
            .then(dbModel =res.json(dbModel))
            .catch(err =>res.status(422).json(err))
    }
}