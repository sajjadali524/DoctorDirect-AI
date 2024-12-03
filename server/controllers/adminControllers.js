const User = require("../models/userModel");
const Doctor = require("../models/doctorModel");

// get all users
exports.getAllUsers = async(req, res) => {
    const id = req.params.id;
    try {
        const allUsers = await User.find(id);
        if(!allUsers) {
            return res.status(400).json({message: "No user found!"})
        };

        const length = allUsers.length;
        return res.status(200).json({message: "all users retrieved", allUsers, length})
    } catch (error) {
        console.log(error)
    }
};

// get all doctors
exports.getAllDoctors = async(req, res) => {
    const id = req.params.id;
    try {
        const allDoctor = await Doctor.find(id);
        if(!allDoctor) {
            return res.status(400).json({message: "No doctor found!"})
        };

        const length = allDoctor.length;
        return res.status(200).json({message: "all doctors retrieved", allDoctor, length})
    } catch (error) {
        console.log(error)
    }
};

// get accepted doctors
exports.getAcceptedDoctors = async(req, res) => {
    try {
        const acceptedDoctors = await Doctor.find({status: "accepted"});
        if(!acceptedDoctors) {
            return res.status(400).json({message: "No doctor found!"})
        };

        const length = acceptedDoctors.length;
        return res.status(200).json({message: "accepted doctors retrieved", acceptedDoctors, length})
    } catch (error) {
        console.log(error)
    }
};

// get pending doctors
exports.getPendingDoctors = async(req, res) => {
    try {
        const pendingDoctors = await Doctor.find({status: "pending"});
        if(!pendingDoctors) {
            return res.status(400).json({message: "No doctor found!"})
        };

        const length = pendingDoctors.length;
        return res.status(200).json({message: "pending doctors retrieved", pendingDoctors, length})
    } catch (error) {
        console.log(error)
    }
};

// get rejected doctors
exports.getRejectedDoctors = async(req, res) => {
    try {
        const rejectedDoctors = await Doctor.find({status: "rejected"});
        if(!rejectedDoctors) {
            return res.status(400).json({message: "No doctor found!"})
        };

        const length = rejectedDoctors.length;
        return res.status(200).json({message: "rejected doctors retrieved", rejectedDoctors, length})
    } catch (error) {
        console.log(error)
    }
};

// delete user
exports.deleteUser = async (req, res) => {
    const id = req.params.id;
    try {
        const user = await User.findByIdAndDelete(id);
        if(!user) {
            return res.status(400).json({message: "user does not exist"})
        }

        return res.status(200).json({message: "user deleted", user})
    } catch (error) {
        console.log(error)
    }
};

// delete doctor
exports.deleteDoctor = async (req, res) => {
    const id = req.params.id;
    try {
        const doctor = await Doctor.findByIdAndDelete(id);
        if(!doctor) {
            return res.status(400).json({message: "user does not exist"})
        }

        return res.status(200).json({message: "user deleted", doctor})
    } catch (error) {
        console.log(error)
    }
};

// reject doctor
exports.updateDoctortoReject = async (req, res) => {
    const id = req.params.id;
    try {
        const doctor = await Doctor.findByIdAndUpdate(id, {status: "rejected", new: true});
        if(!doctor) {
            return res.status(400).json({message: "user does not exist"})
        }

        return res.status(200).json({message: "doctor rejectetd", doctor})
    } catch (error) {
        console.log(error)
    }
};

// accept doctor
exports.updateDoctortoAccept = async (req, res) => {
    const id = req.params.id;
    try {
        const doctor = await Doctor.findByIdAndUpdate(id, {status: "accepted", new: true});
        if(!doctor) {
            return res.status(400).json({message: "user does not exist"})
        }

        return res.status(200).json({message: "doctor accepted", doctor})
    } catch (error) {
        console.log(error)
    }
};