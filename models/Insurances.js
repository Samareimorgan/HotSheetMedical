const mongoose = require("mongoose");
const ObjectId = mongoose.Schema.Types.ObjectId;
const Schema = mongoose.Schema;

const insSchema = new Schema ({
    ins_id: {
        type: ObjectId,
        required: true
    },

    insurance_info: {
        company_name: 
        {
            type: String, 
            required: true
        },
        plan_type: 
        {
            type: String, 
            required: true
        },
        group_number: 
        {
            type: String, 
            required: false
        },
        company_phone_number: 
        {
            type: Number, 
            required: true
        }
        
    },

})

const Insurances = ("Insurances", insSchema);

module.exports = Insurances;