const axios = require("axios");

const sendEmail = async (
  doctorEmail,
  patientEmail,
  patientContent,
  doctorContent,
  patientSubject,
  doctorSubject
) => {
  const apiKey = process.env.BREVO_API_KEY;
  const url = "https://api.brevo.com/v3/smtp/email";

  // Function to send an individual email
  const sendSingleEmail = async (emailData) => {
    try {
      const response = await axios.post(url, emailData, {
        headers: {
          "api-key": apiKey,
          "Content-Type": "application/json",
        },
      });

      console.log("Email sent successfully:", response.data);
      return response.data;
    } catch (error) {
      console.error(
        "Error sending email:",
        error.response ? error.response.data : error.message
      );
      throw error;
    }
  };

  // Prepare email data for doctor
  const doctorEmailData = {
    sender: {
      name: "DoctorDirectAI",
      email: process.env.EMAIL_USER,
    },
    to: [
      {
        email: doctorEmail,
        name: "Doctor",
      },
    ],
    subject: patientSubject,
    htmlContent: doctorContent,
  };

  // Prepare email data for patient
  const patientEmailData = {
    sender: {
      name: "DoctorDirectAI",
      email: process.env.EMAIL_USER,
    },
    to: [
      {
        email: patientEmail,
        name: "Patient",
      },
    ],
    subject: doctorSubject,
    htmlContent: patientContent,
  };

  // Send email to doctor and patient separately
  await sendSingleEmail(doctorEmailData);
  await sendSingleEmail(patientEmailData);
};

module.exports = { sendEmail };