const express = require("express");
const router = express.Router();


//User Model
const User = require("../../models/users");





//Matches /api/users
//Create Get api/users Route
// Get All Users
router.get ('/', (req, res) => {
    User.find()
        .then(users =>res.json(users))
});

//Create a New User and Post to the Database
router.post ('/', (req, res) => {
    const newUser = new User({
        first_name: req.body.first_name,
        middle_name:req.body.middle_name,
        last_name: req.body.last_name,
        address: {
            street_address: req.body.address.street_address,
            city: req.body.address.city,
            state: req.body.address.state,
            zipcode: req.body.address.zipcode
        },
        email: req.body.email,
        phone: req.body.phone,
        birthdate: req.body.birthdate,
        password: req.body.password,
        // doctors: req.body.doctors.id,
        // medications:req.body.medications.id,
        // allergies: req.body.allergies.id


    });

    newUser.save().then(users => res.json(users));
        
});

//Delete a User by ID
router.delete ('/:id', (req, res) => {
    User.findById(req.params.id)
        .then(users =>users.remove().then(() => res.json({success:true})))
        .catch(err => res.status(404).json({success: false}));

})

module.exports = router;