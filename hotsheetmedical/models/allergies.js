const mongoose = require("mongoose");
const Schema = mongoose.Schema; 

const allergySchema = new Schema({
    allergan: {
        type: String, 
        required: true
    },
});

const Allergies = ("Allergies", allergySchema);

module.exports = Allergies;