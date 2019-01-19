const mongoose = require("mongoose");
// const ObjectId = mongoose.Schema.Types.ObjectId;
const Schema = mongoose.Schema;

const usersSchema = new Schema ({
    // user_id: {
    //     type: ObjectId,
    //     required: true
    // },
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
        // validate: {
        //     validator: function(v) {
        //         return/@mongodb\.com$/.test(v);
        //     }
        // }
    },

    phone: {
        type: Number,
        required: [true, 'User phone number required in 000-000-0000 format']
    },

    

    birthdate: {
        type: Date,
        default: Date.now,
        required: true,
        validate:{
            validator: input => {
                if (input.length <10) {
                   return "Please enter your full birthdate. mm-dd-yyyy"
                } else if (input.length >10) {
                    return "You have too many digits in your birthdate"
                }
            }
        }
    },

    // pin: {
    //     type: Number,
    //     required: true,
    //     validate:{
    //         validator: input => {
    //             if (input.length !== 6) {
    //                return "Your PIN does not have 6 numbers"
    //             }
    //         }
    //     }
    // },

    password: {
        type: String,
        required: true,
        validate:{
            validator: input => {
                if (input.length < 6) {
                   return "Your PIN does not have  more than 6 characters"
                }
            }
        }
        
    },

    // doctors: [ 
    //     {
    //         type: Schema.Types.ObjectId,
    //         ref: "Doctors"
    //     } 
    // ],

    // medications: [
    //     {
    //         type: Schema.Types.ObjectId, 
    //         ref: "Medications"
    //     }
    // ], 

    // allergies:[
    //     {
    //         type: Schema.Types.ObjectId,
    //         ref:"Allergies"
    //     }
    // ],

    // connections: [
    //     {
    //         type: Schema.Types.ObjectId, 
    //         ref: "Connections"
    //     }
    // ],

    // insurances: [
    //     {
    //         type: Schema.Types.ObjectId, 
    //         ref: "Insurances"
    //     }
    // ]

});
    //Additional Items for Users in Next Iteration of Program 
    // dnr: (Do Not Resusitate Order)
    // living_will: (Living Will)
const Users = mongoose.model("Users", usersSchema);

module.exports = Users;