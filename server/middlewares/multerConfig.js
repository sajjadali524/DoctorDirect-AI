const multer = require("multer");

const storage = multer.memoryStorage(); // Use memory storage for cloud uploads
const singleUpload = multer({ 
    storage,
    limits: { fileSize: 5 * 1024 * 1024 } // Optional: limit file size to 5 MB
}).fields([
    { name: 'profile_photo', maxCount: 1 },
    { name: 'cv', maxCount: 1 },
    { name: 'document', maxCount: 1 },
    { name: 'file', maxCount: 1 },
]);

module.exports = singleUpload;
