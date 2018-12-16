const router = require("express").Router();
const connectionsController = require("../../controllers/connectionscontroller");

//Matches /api/connections
router.route("/")
    .get(connectionsController.findAll)
    .post(connectionsController.create);

//Matches /api/connections/:id
router
    .route("/:id")
    .get(connectionsController.findById)
    .put(connectionsController.update)
    .delete(connectionsController.remove);

module.exports = router;
