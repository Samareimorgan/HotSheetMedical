const mongoose = require("mongoose");
const ObjectId = mongoose.Schema.Types.ObjectId;
const Schema = mongoose.Schema; 


const allergySchema = new Schema({
    allergan_id:{
        type: ObjectId,
        required: true
    },
    allergan: {
        type: String, 
        required: true
    },
    
});

const Allergies = mongoose.model("Allergies", allergySchema);

module.exports = Allergies;