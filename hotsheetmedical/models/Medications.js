const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const medSchema = new Schema ({
    med_id: {
        type: ObjectId,
        required: true
    },

    medName: {
        type: String, 
        trim: true
    },
    medDose: {
        type: String

    },

    medTimes: {
        type: String
    }
})

const Medications =mongoose.connect("Medications", medSchema);

module.exports = Medications;