const router =require("express").Router();
const userRoutes = require("./users");
// const medicationRoutes = require("./medications");
// const doctorsRoutes = require("./doctors");
// const connectionRoutes = require("./connections");
// const allergiesRoutes = require("./allergies");
// const insuranceRoutes = require("./insurances");


//User Routes
router.use("/users", userRoutes);
// router.use("/medications", medicationRoutes);
// router.use("/doctors", doctorsRoutes);
// router.use("/connections", connectionRoutes);
// router.use("/allergies", allergiesRoutes);
// router.use("/insurances",insuranceRoutes);

module.exports = router;