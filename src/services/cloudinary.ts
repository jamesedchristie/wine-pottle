import cloudinary from 'cloudinary/lib/v2/index.js';
import dotenv from 'dotenv';

dotenv.config();

cloudinary.config({
    cloud_name: import.meta.env.VITE_CLOUDINARY_CLOUD_NAME,
    api_key: process.env['CLOUDINARY_API_KEY'],
    api_secret: process.env['CLOUDINARY_API_SECRET']
});

export default cloudinary; 

