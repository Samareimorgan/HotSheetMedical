const router = require("express").Router();
const allergiescontroller = require("../../controllers/allergiescontroller");

//Matches /api/allergies
router.route("/")
    .get(allergiescontroller.findAll)
    // .post(allergiescontroller.create);

//Matches /api/allergies/:id
// router
//     .route("/:id")
//     .get(allergiescontroller.findById)
//     .put(allergiescontroller.update)
//     .delete(allergiescontroller.remove);

module.exports = router;