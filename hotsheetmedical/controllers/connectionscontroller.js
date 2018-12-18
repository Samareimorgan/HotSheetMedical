const db = require("../models")

//define methods for the connections controller
module.exports = {
    findAll: function(req,res) {
        db.Connections
            .find(req.query)
            .then(dbModel =>res.json(dbModel))
            .catch(err => res.status(422).json(dbModel))
    },

    findById: function(req,res) {
        db.Connections
            .findbyId(req.params.id)
            .then(dbModel =>res.json(dbModel))
            .catch(err => res.status(422).json(dbModel))
    },

    create: function(req,res){
        db.Connections
            .create(req.body)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(dbModel))
    },

    update: function(req,res) {
        db.Connections
        .findOneAndUpdate({_id:req.params.id},req.body)
        .then(dbModel =>res.json(dbModel))
        .catch(err => res.status(422).json(dbModel))
    },

    remove: function(req,res) {
        db.Connections
        .findById({_id:req.params.id})
        .then(dbModel => dbModel.remove())
        .then(dbModel =>res.json(dbModel))
        .catch(err => res.status(422).json(dbModel))

    }
};