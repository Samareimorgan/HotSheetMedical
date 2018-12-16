const router = require("express").Router();
const insuranceController = require("../../controllers/insurancecontroller");

//Matches api/insurance
router.route("/")
    .get(insuranceController.findAll)
    .post(insuranceController.create);

//Matches 
router
    .route("/:id")
    .get(insuranceController.findById)
    .put(insuranceController.update)
    .delete(insuranceController.remove);
    
module.exports = router;