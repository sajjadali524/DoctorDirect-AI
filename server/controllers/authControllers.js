const User = require("../models/userModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");


// register user
exports.registerUser = async (req, res) => {
    const {username, email, password} = req.body;

    try {
        // find when user already exist or not
        const existingUser = await User.findOne({email});
        if(existingUser) {
            return res.status(409).json({message: "User Already Exist"})
        }
        //hash the password
        const hashPassword = await bcrypt.hash(password, 10);

        const user = await User.create({username, email, password: hashPassword});
        return res.status(200).json({message: "User Register Success", user})
        
    } catch (error) {
        return res.status(500).json({error: "Intrenal Server Error"})
    }
};


// login user
exports.loginUser = async (req, res) => {
    const {email, password} = req.body;

    try {
        const user = await User.findOne({ email });

        if(!user) {
            return res.status(409).json({message: "user not found"});
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if(!isMatch) {
            return res.status(409).json({message: "email and password is incorrect"});
        }

        const token = jwt.sign({userId: user.id}, process.env.TOKEN_SECRET, {expiresIn: "1d"});
        res.cookie("token", token, {httpOnly: true, maxAge: 24 * 60 * 60 * 1000});
        return res.status(200).json({message: "user login", user, token})
        
    } catch (error) {
        return res.status(500).json({error: "Intrenal Server Error"})
    }
}

// logout user
exports.logoutUser = (req, res) => {
    res.cookie("token", "", {httpOnly: true, maxAge: (0)});
    return res.status(200).json({message: "user logout"})
};