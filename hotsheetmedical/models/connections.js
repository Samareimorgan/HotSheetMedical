const mongoose = require("Mongoose");
const ObjectId = mongoose.Schema.Types.ObjectId;
const Schema = mongoose.Schema;

const connectSchema = new Schema ({
    connect_id: 
    {
        type:ObjectId, 
        required: true
    },

    user_info: [ {
        user_name:
        {
            type: Schema.Types.ObjectId, 
            ref: "Users"
        },
        user_email:
        {
            type: Schema.Types.ObjectId, 
            ref: "Users"
        },
        accepted:
        {
            type: Boolean,
            required: true
        },
        invited:
        {
            type:Boolean,
            required: true
        },
        requested:
        {
            type: Boolean, 

        }
    }
    ]
});

const Connections = ("Connections",connectSchema);

module.exports = Connections;