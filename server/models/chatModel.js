const mongoose = require("mongoose");

const chatSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    status: { type: String, enum: ["active", "completed"], default: "active" },
    messages: [
        {
            sender: { type: String, enum: ["User", "Ai"], required: true },
            message: { type: String},
            fileUrl: { type: String },  // Store the file URL
            fileName: { type: String }, // Store the original file name
        },
    ],
});

const Chat = mongoose.model("Chat", chatSchema);

module.exports = Chat;