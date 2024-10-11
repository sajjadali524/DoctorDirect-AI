const express = require("express");
const isAdmin = require("../middlewares/adminVerify");
const adminControllers = require("../controllers/adminControllers");
const router = express.Router();

router.post("/response", isAdmin, adminControllers.sendResponse )
module.exports = router;