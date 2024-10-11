const cloudinary = require("cloudinary").v2;
require("dotenv").config();

cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.CLOUD_API_KEY,
    api_secret: process.env.CLOUD_API_SECRET
});

const uploadFileToCloudinary = (file, resourceType, folderName) => {
    return new Promise((resolve, reject) => {
        cloudinary.uploader.upload_stream({ resource_type: resourceType, folder: folderName }, (error, result) => {
            if (error) {
                return reject(error);
            }
            resolve(result);
        }).end(file.buffer);  // Use file.buffer instead of file.stream.pipe()
    });
};


module.exports = { cloudinary, uploadFileToCloudinary};