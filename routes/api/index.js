const router =require("express").Router();
const userRoutes = require("./users");
const medicationRoutes = require("./medications");
const doctorsRoutes = require("./doctors");
const allergiesRoutes = require("./allergies");



//Database API Routes
router.use("/users", userRoutes);
router.use("/medications", medicationRoutes);
router.use("/doctors", doctorsRoutes);
router.use("/allergies", allergiesRoutes);


module.exports = router;