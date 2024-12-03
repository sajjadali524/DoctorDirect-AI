const express = require("express");
const appointmentControllers = require("../controllers/appointmentControllers");
const isAuthenticated = require("../middlewares/auth");
const router = express.Router();

router.post("/book/:id", isAuthenticated, appointmentControllers.bookAppointment)
module.exports = router;