const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    isProfileCompletd: {
        type: Boolean,
        default: false
    }
})

const User = mongoose.model("users", UserSchema);
module.exports = User;