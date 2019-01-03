const router =require("express").Router();
const userRoutes = require("./users");
const medicationRoutes = require("./medication");
const doctorsRoutes = require("./doctors");
const connectionRoutes = require("./connections");
const allergiesRoutes = require("./allergies");

//User Routes
router.use("/users", userRoutes);
router.use("/medications", medicationRoutes);
router.use("/doctors", doctorsRoutes);
router.use("/connections", connectionRoutes);
router.use("/allergies", allergiesRoutes);

module.exports = router;