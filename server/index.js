const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const dotenv = require("dotenv");
const bodyParser = require("body-parser")
const connectDB = require("./config/db");
const userRoutes = require("./routes/userRoutes");
const userProfileRoutes = require("./routes/userProfileRoutes");
const doctorRoutes = require("./routes/doctorRoutes");
const adminRoutes = require("./routes/adminRoutes");
const appointmentRoutes = require("./routes/appointmentRoutes");
const chatRoutes = require("./routes/chatRoutes");
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
app.use(bodyParser.json());

const port = process.env.PORT || 3000;

//apis
app.use("/api/auth", userRoutes);
app.use("/api/user", userProfileRoutes);
app.use("/api/doctor", doctorRoutes);
app.use("/api/admin", adminRoutes);
app.use("/api/appointment", appointmentRoutes);
app.use("/api/chat", chatRoutes);

// check connection
app.listen(port, () => {
    console.log(`app is listening at PORT ${port}`)
});