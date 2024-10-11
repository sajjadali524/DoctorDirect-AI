const mongoose = require("mongoose");

const doctorSchema = new mongoose.Schema({
    first_name: {
        type: String,
        required: true
    },
    last_name: {
        type: String,
        required: true
    },
    dob: {
        type: String,
        required: true
    },
    profile_photo: {
        type: String,
    },
    cv: {
        type: String,
    },
    email: {
        type: String,
        required: true
    },
    phone_number: {
        type: String,
        required: true
    },
    country: {
        type: String,
        required: true
    },
    document_number: {
        type: Number,
    },
    expiration_date: {
        type: Number,
        required: true
    },
    document: {
        type: String,
    },
    experience: {
        type: Number,
        required: true
    },
    publication: {
        type: Number,
        required: true
    },
    specialities: {
        type: String,
        required: true
    },
    subspeciality: {
        type: String,
        required: true
    },
    procedures_performed: {
        type: String,
        required: true
    },
    icd_codes: {
        type: String,
        required: true
    },
    biography: {
        type: String,
        required: true
    },
    status:{
        type: String,
        enum: ["pending", "rejected", "accepted"],
        default: "pending"
    }
});

const Doctor = mongoose.model("doctors", doctorSchema);
module.exports = Doctor;