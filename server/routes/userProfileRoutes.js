const express = require("express");
const isAuthenticated = require("../middlewares/auth");
const userProfileControllers = require("../controllers/userProfileControllers");
const router = express.Router();

router.post("/profile", isAuthenticated, userProfileControllers.addUserProfile);
router.get("/overview", isAuthenticated, userProfileControllers.getUserProfile);
router.put("/overview/update", isAuthenticated, userProfileControllers.updateUserProfile);
module.exports = router;