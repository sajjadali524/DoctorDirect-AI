const jwt = require("jsonwebtoken");
const User = require("../models/userModel");

const isAdmin = async (req, res, next) => {
  try {
    const token = req.cookies.token;

    // Check if token is present
    if (!token) {
      return res.status(401).json({ message: "Unauthorized! Admin access required." });
    }

    // Verify the token
    const decode = jwt.verify(token, process.env.TOKEN_SECRET);

    // Fetch the user from the database
    const user = await User.findById(decode.userId);

    // Check if the user exists and is an admin
    if (user.role !== "user") {
      req.userId = decode.userId;
    }

    next();
  } catch (error) {
    return res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = isAdmin;