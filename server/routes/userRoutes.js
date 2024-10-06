const express = require("express");
const authControllers = require("../controllers/authControllers");
const isAuthenticated = require("../middlewares/auth");
const router = express.Router();

router.post("/register", authControllers.registerUser);
router.post("/login", authControllers.loginUser);
router.post("/logout", isAuthenticated, authControllers.logoutUser);

module.exports = router;