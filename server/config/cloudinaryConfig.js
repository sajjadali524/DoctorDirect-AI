const cloudinary = require("cloudinary").v2;
require("dotenv").config();

cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.CLOUD_API_KEY,
    api_secret: process.env.CLOUD_API_SECRET
});

const uploadFileToCloudinary = (file, resourceType, folderName) => {
    return new Promise((resolve, reject) => {
        const uploadOptions = {
            resource_type: resourceType, // raw for documents, image for images
            folder: folderName,
            public_id: file.originalname, // Using original name to store file with the same name
            overwrite: true, // Overwrite if file with the same name exists
        };

        cloudinary.uploader.upload_stream(uploadOptions, (error, result) => {
            if (error) {
                return reject(error);
            }
            resolve(result); // File upload result with URL
        }).end(file.buffer); // Upload file buffer
    });
};


module.exports = { cloudinary, uploadFileToCloudinary};