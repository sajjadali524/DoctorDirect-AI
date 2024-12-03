const express = require("express");
const doctorControllers = require("../controllers/doctorControllers");
const singleUpload = require("../middlewares/multerConfig");
const isAuthenticated = require("../middlewares/auth")

const router = express.Router();
router.post("/register", singleUpload, doctorControllers.createDoctor);
router.get("/accept-doctors", isAuthenticated, doctorControllers.acceptedDoctors);
router.get("/:id", isAuthenticated, doctorControllers.getDoctorInfo);

module.exports = router;