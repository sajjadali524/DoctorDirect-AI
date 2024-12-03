const express = require("express");
const isAdmin = require("../middlewares/adminVerify");
const adminControllers = require("../controllers/adminControllers");
const router = express.Router();

router.get("/all-users", adminControllers.getAllUsers);
router.get("/all-doctors", adminControllers.getAllDoctors);
router.get("/accepted-doctors", adminControllers.getAcceptedDoctors);
router.get("/pending-doctors", adminControllers.getPendingDoctors);
router.get("/rejected-doctors", adminControllers.getRejectedDoctors);
router.delete("/delete-user/:id", adminControllers.deleteUser);
router.delete("/delete-doctor/:id", adminControllers.deleteDoctor);
router.put("/reject-doctor/:id", adminControllers.updateDoctortoReject);
router.put("/accept-doctor/:id", adminControllers.updateDoctortoAccept);
module.exports = router;