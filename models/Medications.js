const mongoose = require("mongoose");
// const ObjectId = mongoose.Schema.Types.ObjectId;
const Schema = mongoose.Schema;

const medSchema = new Schema ({
    
    medName: {
        type: String,
        trim: true
    }
    // medDose: {
    //     type: String

    // },

    // medTimes: {
    //     type: String
    // }
})

const Medications = mongoose.model("Medications", medSchema);

module.exports = Medications;