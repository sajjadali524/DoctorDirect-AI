const jwt = require("jsonwebtoken");
const User = require("../models/userModel");

const isAdmin = async (req, res, next) => {
    try {
        const token = await req.cookies.token;
    if(!token) {
        return res.status(400).josn({message: "Unauthorized! Admin"})
    }
    const decode = jwt.verify(token, process.env.TOKEN_SECRET);
    const user = await User.findById(decode.userId);
    if(user.role !== "user") {
        req.userId = decode.userId;
    }
    next();
    } catch (error) {
        console.log(error)
    }
}
module.exports = isAdmin;