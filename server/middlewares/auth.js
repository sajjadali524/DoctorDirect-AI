const jwt = require("jsonwebtoken");
const User = require("../models/userModel");

const isAuthenticated = async (req, res, next) => {
  const token = req.cookies.token;
  try {
    if(!token) {
      return res.status(400).json({message: "Unauthorized user"})
    }
  
    const decode = jwt.verify(token, process.env.TOKEN_SECRET);
    const user = await User.findById(decode.userId);
    if(user.role !== "admin") {
      req.userId = decode.userId;
    };
    next();
  } catch (error) {
    console.log(error)
  }
};

module.exports = isAuthenticated;