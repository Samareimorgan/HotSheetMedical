const router = require("express").Router();
const doctorsController = require("../../controllers/doctorscontroller");

//Matches /api/doctors

router.route("/")
    .get(doctorsController.findAll)
    // .post(doctorsController.create);

//Matches /api/doctors/:id
// router
//     .route("/:id")
//     .get(doctorsController.findById)
//     .put(doctorsController.update)
//     .delete(doctorsController.remove);

module.exports = router;