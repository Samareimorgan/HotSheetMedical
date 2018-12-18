const db = require("../controllers");

//define methods for medications

module.exports = {
    findAll: function(req,res) {
        db.Medications
            .find(req.query)
            .sort({date: -1})
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err))
    },

    findById: function(req,res) {
        db.Medications
            .findById(req.params.id)
            .then(dbModel => res.json(dbModel))
            .catch(err=> res.status(422).json(err))
    },

    create: function(req,res) {
        db.Medications
            .create(req.body)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err))
    },

    update: function(req,res) {
        db.Medications
            .findOneAndUpdate({ _id: req.params.id}, req.body)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err))
    },

    remove: function(req,res) {
        db.Medications
            .findById({_id: req.params.id})
            .then(dbModel => dbModel.remove())
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err))
    },
};
