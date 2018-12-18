const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const usersSchema = new Schema ({
    user_id: {
        type: Number,
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

    email: {
        type: String,
        required: true,
        validation:
    },

    phone: {
        type: Number,
        required: true,
        validation:
    },

    birthdate: {
        type: Number,
        required: true,
        validation:
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

    doctors: {
        
    }
    medications:
    allergies:
    dnr:
    living_will:
    key:
})