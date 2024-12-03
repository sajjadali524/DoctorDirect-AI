const User = require("../models/userModel");
const Doctor = require("../models/doctorModel");
const { sendEmail } = require("../services/emailService");
const { getAccessToken } = require("../config/zoomApi");
const axios = require("axios");

// Endpoint to book an appointment
exports.bookAppointment = async (req, res) => {
  const id = req.params.id;
  const userId = req.userId;
  try {
    const token = await getAccessToken();
    if (!token) {
      return res
        .status(400)
        .json({ message: "no token fount fetching zoom api" });
    }

    const patient = await User.findById(userId);
    if (!patient) {
      res.status(400).json({ message: "patient not found" });
    }

    const doctor = await Doctor.findById(id);
    if (!doctor) {
      res.status(400).json({ message: "doctor not found" });
    }

    const meetingData = {
      topic: "Appointment",
      type: 2,
      start_time: "2024-10-14T15:00:00",
      duration: 60,
      timezone: "Asia/Karachi",
      password: "12345",
      agenda: "appointment booking",
      settings: {
        join_before_host: true,
      },
    };

    const response = await axios.post(
      "https://api.zoom.us/v2/users/me/meetings",
      meetingData,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          Content_Type: "application/json",
        },
      }
    );

    const doctorSubject = "A new appointment has been booked";
    const patientSubject = "Your Appointment has been booked";

    const patientContent = `Hello Dear ${patient.username}, 
        Your Appointment has been booked successfully. to ${doctor.first_name} and schedule for ${response.data.start_time}. You can join through this link ${response.data.join_url} and your meeting password as: ${response.data.password}
        Thank You.`;

    const doctorContent = `Hello Dear ${doctor.first_name}, 
        A new Appointment has been booked successfully by ${patient.username} and schedule for ${response.data.start_time}. You can join through this link ${response.data.join_url} and your meeting password as: ${response.data.password}
        Thank You.`;

    sendEmail(
      doctor.email,
      patient.email,
      patientContent,
      doctorContent,
      doctorSubject,
      patientSubject
    );

    res.status(200).json({ message: "Appointment booked successfully" });
  } catch (error) {
    console.error(error);
    return res
      .status(500)
      .json({ message: "An error occurred while booking the appointment" });
  }
};