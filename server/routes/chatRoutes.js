const express = require("express");
const router = express.Router();
const chatControllers = require("../controllers/chatControllers");
const isAuthenticated = require("../middlewares/auth");
const singleUpload = require("../middlewares/multerConfig");

router.post("/newChat", isAuthenticated, singleUpload, chatControllers.createOrContinueChat);
router.put("/chats", isAuthenticated, chatControllers.completeChat);
router.get("/activeChat", isAuthenticated, chatControllers.getActiveChat);
router.get("/completeChat", isAuthenticated, chatControllers.getCompletedChat);
router.get("/specificChat/:id", isAuthenticated, chatControllers.getSpecificChat);
router.put("/changestatustoactive/:id", isAuthenticated, chatControllers.changeStatusToActive);
router.get("/lastChat", isAuthenticated, chatControllers.getLastChat);
module.exports = router;