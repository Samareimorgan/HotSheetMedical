const mongoose = require("mongoose");
const ObjectId = mongoose.Schema.Types.ObjectId;
const Schema = mongoose.Schema;

const docSchema = new Schema ({
    doctor_id:{
        type: ObjectId, 
        required: true
    },
    doctor_type: {
        type: String, 
        required: true
    },
    doctor_info: {
        doc_first_name: 
        {
            type: String, 
            required: true
        },

        doc_last_name: 
        {
            type: String, 
            required: true
        }

    },
    doctor_location: {
        office_name:
        {
            type: String,
            required: true
        },
        office_street_address: {
            type: String,
            required: true
        },
        office_city: {
            type: String, 
            required: true
        },
        office_state: {
            type: String, 
        },
        office_zip_code: {
            type: Number,
            required: true,
            // validate: input => {
            //     if (input.length !== 5) {
            //         "Please enter the 5 digits for the zip code"
            //     }
            // }
        }, 
    },
    doctor_phone_number: {
        type: Number,
        required: true, 
        // //validate: input => {
        //     if (input.length !== 10) {
        //         "Please enter the 10 digits for the doctor's phone number"
        //     }
        }
    });

const Doctors = ("Doctors", docSchema);

module.exports = Doctors;