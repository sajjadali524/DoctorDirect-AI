const Doctor = require("../models/doctorModel");
const {uploadFileToCloudinary} = require("../config/cloudinaryConfig");

exports.createDoctor = async (req, res) => {
    try {
        // create a folder for files in the cloudinary
        const folderName = `DoctorDirectAi/doctors/${req.body.first_name}_${req.body.last_name}`;

        // check if files are provided or not 
        if(!req.files || !req.files["profile_photo"] || !req.files["cv"] || !req.files["document"]) {
            return res.status(400).json({message: "All Fields are required"});
        };

        // uploads files to cloudinary 
        const profilePhotoResult = await uploadFileToCloudinary(req.files["profile_photo"][0], "image", folderName);
        const cvResult = await uploadFileToCloudinary(req.files["cv"][0], "raw", folderName);
        const documentResult = await uploadFileToCloudinary(req.files["document"][0], "raw", folderName);

         // Create Doctor document
         const doctor = new Doctor({
            first_name: req.body.first_name,
            last_name: req.body.last_name,
            dob: req.body.dob,
            profile_photo: profilePhotoResult.secure_url,
            cv: cvResult.secure_url,
            email: req.body.email,
            phone_number: req.body.phone_number,
            country: req.body.country,
            document_number: req.body.document_number,
            expiration_date: req.body.expiration_date,
            document: documentResult.secure_url,
            experience: req.body.experience,
            publication: req.body.publication,
            specialities: req.body.specialities,
            subspeciality: req.body.subspeciality,
            procedures_performed: req.body.procedures_performed,
            icd_codes: req.body.icd_codes,
            biography: req.body.biography,
        });


        // Save the doctor document to the database
        await doctor.save();

        res.status(201).json({ message: 'Doctor registered successfully', doctor });
    } catch (error) {
        console.log(error)
    }
};

exports.acceptedDoctors = async (req, res) => {
    try {
        const acceptedDoctors = await Doctor.find({status: "accepted"});
        if(!acceptedDoctors) {
            return res.status(400).json({message: "There is no accepted doctors"})
        }
        return res.status(200).json({message: "doctors retrieved", acceptedDoctors})
    } catch (error) {
        console.log(error)
    }
};

exports.getDoctorInfo = async (req, res) => {
    const id = req.params.id;
    try {
        const doctor = await Doctor.findById(id);
        if(!doctor) {
            return res.status(400).json({message: "doctor not exist"})
        }
        return res.status(200).json({message: "retrived data", doctor});
    } catch (error) {
        console.log(error)
    }
};