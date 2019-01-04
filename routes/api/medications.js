const router = require("express").Router();
const medicationController = require("../../controllers/medicationcontroller");

//Matches api/medication
router.route("/")
    .get(medicationController.findAll)
    // .post(medicationController.create);

//Matches with api/medication/:id

// router
//     .route("/:id")
//     .get(medicationController.findById)
//     .put(medicationController.update)
//     .delete(medicationController.remove);

module.exports = router;

