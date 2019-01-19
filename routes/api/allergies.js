const express = require("express");
const router = express.Router();


//allergies Model
const Allergies = require("../../models/allergies");

//Matches /api/allergies
//Create Get api/allergies Route
// Get All allergies
router.get ('/', (req, res) => {
    Allergies.find()
        .then(allergies =>res.json(allergies))
});

//Create a New allergies and Post to the Database
router.post ('/', (req, res) => {
    
    const newAllergies = new Allergies({
        medName: req.body.medName,
    });
    newAllergies.save().then(allergies => res.json(allergies));
        
});

//Delete a allergies by ID
router.delete ('/:id', (req, res) => {
    Allergies.findById(req.params.id)
        .then(allergies =>allergies.remove().then(() => res.json({success:true})))
        .catch(err => res.status(404).json({success: false}));

})

module.exports = router;