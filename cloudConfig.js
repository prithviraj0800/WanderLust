const cloudinary = require('cloudinary').v2;
const { CloudinaryStorage } = require('multer-storage-cloudinary');

cloudinary.config({
    cloud_name: process.env.cloud_name,
    api_key: process.env.api_key,
    api_secret:process.env.api_secret
    // cloud_name: 'di6g5le66', 
    // api_key: '883225722151646', 
    // api_secret: 'LapRK5Q2f3fnik-aOO8bioDv23U' 
});

const storage = new CloudinaryStorage({
    cloudinary: cloudinary,
    params: {
      folder: 'project_DEV',
      allowerdFormats: ["png", "jpg", "jpeg"], // supports promises as well
    },
});

module.exports = {
    cloudinary,
    storage,
};