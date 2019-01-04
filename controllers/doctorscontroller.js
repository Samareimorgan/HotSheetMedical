const db = require("../models");

//defining methods for the doctors controller

module.exports = {
        findAll: function(req,res) {
            db.Doctors
                .find(req.query)
                .sort({date:-1})
                .then(dbModel => res.json(dbModel))
                .catch(err =>res.status(422).json(err))
        }, 

        findById: function(req,res){
            db.Doctors
                .find(req.params.id)
                .then(dbModel => res.json(dbModel))
                .catch(err =>res.status(422).json(err))
        },

        create: function(req,res) {
            db.Doctors
                .create(req.body)
                .then(dbModel =>res.json(dbModel))
                .catch(err => res.status(422).json(err))
        }, 

        update: function(req,res) {
            db.Doctors  
                .findOneAndUpdate({_id:req.params.id}, req.body)
                .then(dbModel => res.json(dbModel))
                .catch(err => res.status(422).json(err))
        },

        remove: function(req,res) {
            db.Doctors
                .findById({_id:req.params.id})
                .then(dbModel => dbModel.remove())
                .then(dbModel => res.json(dbModel))
                .catch(err =>res.status(422).json(err))
        }

};