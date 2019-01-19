const express = require("express");
const router = express.Router();


//Medication Model
const Medication = require("../../models/medications");

//Matches /api/medications
//Create Get api/medications Route
// Get All medications
router.get ('/', (req, res) => {
    Medication.find()
        .then(medications =>res.json(medications))
});

//Create a New Medication and Post to the Database
router.post ('/', (req, res) => {
    
    const newMedication = new Medication({
        medName: req.body.medName,
    });
    newMedication.save().then(medications => res.json(medications));
        
});

//Delete a Medication by ID
router.delete ('/:id', (req, res) => {
    Medication.findById(req.params.id)
        .then(medications =>medications.remove().then(() => res.json({success:true})))
        .catch(err => res.status(404).json({success: false}));

})

module.exports = router;



