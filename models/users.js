const mongoose = require("mongoose");
const ObjectId = mongoose.Schema.Types.ObjectId;
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
            type: Number,
            required: true
        },
    },
    
    email: {
        type: String,
        required: true,
        // validate: { $regex: /@mongodb\.com$/ } 
    },

    phone: {
        type: Number,
        required: true,
        // validate:input => {
        //     if (input.length !== 10) {
        //         "Please enter the 10 digits for your phone number"
        //     }
        // }
    },

    birthdate: {
        type: Date,
        required: true,
        // validate: input => {
        //     if (input.length !== 8) {
        //         "Please enter 8 digits for your full birthdate"
        //     }
        // }
    },

    pin: {
        type: Number,
        required: true,
        // validate:input => {
        //     if (input.length !== 6) {
        //         "Your PIN does not have 6 numbers"
        //     }
        // }
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

});
    //Additional Items for Users in Next Iteration of Program 
    // dnr: (Do Not Resusitate Order)
    // living_will: (Living Will)
const Users = mongoose.model("Users", usersSchema);

module.exports = Users;