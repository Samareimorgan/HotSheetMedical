const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const usersSchema = new Schema ({
    user_id: {
        type: ObjectId,
        required: true
    },
    first_name: {
        type: String,
        required: true
    },
    middle_name: {
        type: String,
        required: false
    },
    last_name: {
        type: String,
        required: true
    },

    address: {
        street_address: {
            type: String,
            required: false
        },
        city: {
            type: String,
            required: false
        },
    
        state: {
            type: String,
            required: false
        },
    
        zipcode: {
            type: Integer,
            required: true
        },
    },
    
    email: {
        type: String,
        required: true,
        validate:
    },

    phone: {
        type: Integer,
        required: true,
        validate:
    },

    birthdate: {
        type: Date,
        required: true,
        validate:
    },

    pin: {
        type: Number,
        required: true,
        validate:input => {
            if (input.length !== 6) {
                "Your PIN does not have 6 numbers"
            }
        }
    },

    password: {
        type: String,
        required: true,
        
    },

    doctors: [ 
        {
            type: Schema.Types.ObjectId,
            ref: "Doctors"
        } 
    ],

    medications: [
        {
            type: Schema.Types.ObjectId, 
            ref: "Medications"
        }
    ], 

    allergies:[
        {
            type: Schema.Types.ObjectId,
            ref:"Allergies"
        }
    ],

    connections: [
        {
            type: Schema.Types.ObjectId, 
            ref: "Connections"
        }
    ],

    insurances: [
        {
            type: Schema.Types.ObjectId, 
            ref: "Insurances"
        }
    ]
    }

    // dnr:
    // living_will:
    // key:
});