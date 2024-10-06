const mongoose = require("mongoose");

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.DB_KEY);
        console.log("Database connected")
    } catch (error) {
        console.log("error connected to database", error)
    }
}
module.exports = connectDB;