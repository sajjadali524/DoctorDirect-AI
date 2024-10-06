const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const userRoutes = require("./routes/userRoutes");
const userProfileRoutes = require("./routes/userProfileRoutes");
dotenv.config();
const app = express();

// calling the database
connectDB();

// middlewares
app.use(express.json());
app.use(cookieParser());
app.use(cors({
    origin: ["http://localhost:5173"],
    credentials: true
}));

const port = process.env.PORT || 3000;

//apis
app.use("/api/auth", userRoutes);
app.use("/api/user", userProfileRoutes);

// check connection
app.listen(port, () => {
    console.log(`app is listening at PORT ${port}`)
});