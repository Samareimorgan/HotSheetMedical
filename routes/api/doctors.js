const express = require("express");
const router = express.Router();


//Medication Model
const Doctors = require("../../models/doctors");

//Matches /api/medications
//Create Get api/medications Route
// Get All medications
router.get ('/', (req, res) => {
    Doctors.find()
        .then(doctors =>res.json(doctors))
});

//Create a New Medication and Post to the Database
router.post ('/', (req, res) => {
    
    const newDoctors = new Doctors({
        medName: req.body.medName,
    });
    newDoctors.save().then(doctors => res.json(doctors));
        
});

//Delete a Medication by ID
router.delete ('/:id', (req, res) => {
    Doctors.findById(req.params.id)
        .then(doctors =>doctors.remove().then(() => res.json({success:true})))
        .catch(err => res.status(404).json({success: false}));

})

module.exports = router;