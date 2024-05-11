import multer from 'multer';
import { v2 as cloudinary } from 'cloudinary';
import { config } from "dotenv";
config();

import HttpError from '../models/http-error.js';



// Configure Cloudinary
cloudinary.config({
  cloud_name: process.env.YOUR_CLOUD_NAME,
  api_key: process.env.YOUR_API_KEY,
  api_secret: process.env.YOUR_API_SECRET
});

// Configure Multer for file upload
const storage = multer.diskStorage({});

const upload = multer({
  storage: storage,
  limits: { fileSize: 1024 * 1024 * 5 } // 5MB file size limit
}).single('image');

// Function to handle file upload
export const handleFileUpload = async (req, res) => {
  try {
    upload(req, res, async (err) => {
      if (err instanceof multer.MulterError) {
        return res.status(400).send('Multer error: ' + err.message);
      } else if (err) {
        return res.status(500).send('Unknown error occurred during file upload: ' + err.message);
      }

      if (!req.file) {
        return res.status(400).send('No file uploaded.');
      }

      // Upload file to Cloudinary
      const result = await cloudinary.uploader.upload(req.file.path);

      // Respond with the Cloudinary URL of the uploaded image
      res.status(200).json({ imageUrl: result.secure_url });
    });
  } catch (err) {
    // console.error('Error uploading file:', error);
    // res.status(500).send('');
    const error = new HttpError('Error uploading file.',500);
    return next(error);
  }
};


