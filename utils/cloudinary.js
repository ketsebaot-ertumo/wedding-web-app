// utils/cloudinary.js
'use client';

import axios from "axios";

// Upload image to Cloudinary
export async function uploadImageToCloudinary(file) {
    const CLOUD_NAME = process.env.NEXT_PUBLIC_CLOUD_NAME;
    const UPLOAD_PRESET = process.env.NEXT_PUBLIC_UPLOAD_PRESET;

    if (!CLOUD_NAME || !UPLOAD_PRESET) {
        throw new Error("CLOUD_NAME or UPLOAD_PRESET is not defined in environment variables");
    }
  
    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", UPLOAD_PRESET);
    formData.append("folder", "wedding_uploads");
  
    // const res = await fetch(`https://api.cloudinary.com/v1_1/${cloudName}/image/upload`, {
    //   method: "POST",
    //   body: formData,
    // });

    const res = await axios.post(
        `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/image/upload`,
        formData
      );
  
    // const data = await res.json();
    console.log("Cloudinary upload response:", res?.data?.url, res?.data?.secure_url);
    return res?.data?.secure_url;

  }
  
  // fetch images from Cloudinary
  export async function fetchCloudinaryImages() {
    const cloudName = process.env.NEXT_PUBLIC_CLOUD_NAME;
    const folder = "wedding_uploads";
  
    const res = await axios.get(
      `https://res.cloudinary.com/${cloudName}/image/list/${folder}.json`
    );
  
    if (!res.ok) throw new Error("Failed to fetch images from Cloudinary");
    // const data = await res.json();
    return res?.data?.resources;
  }
  



// // import { v2 as cloudinary } from 'cloudinary';
// const cloudinary = require('cloudinary').v2;
// require('dotenv').config();

// const { CLOUD_NAME, API_KEY, API_SECRET } = process.env;

// if(!CLOUD_NAME || !API_KEY || !API_SECRET){
//   throw new Error("No Credintial on environment.");
// }

// cloudinary.config({
//     cloud_name: CLOUD_NAME, 
//     api_key: API_KEY, 
//     api_secret: API_SECRET,
//     secure: true
// });

// // const async handler(req, res) {
// const handler = async function(req, res) {
//   try {
//     const result = await cloudinary.api.resources({
//       type: 'upload',
//       prefix: 'weddings/', // folder prefix if used
//       max_results: 1000,
//     });
//     res.status(200).json(result.resources);
//   } catch (err) {
//     res.status(500).json({ error: 'Failed to fetch images' });
//   }
// }

// module.exports = { handler, cloudinary }
// module.exports = cloudinary, handler;



// export const uploadToCloudinary = async (file) => {
//     const formData = new FormData();
//     formData.append('file', file);
//     formData.append('upload_preset', 'wedding_upload_preset'); // Create this preset in Cloudinary
  
//     const res = await fetch(
//       'https://api.cloudinary.com/v1_1/dq6mvqivd/image/upload',
//       {
//         method: 'POST',
//         body: formData,
//       }
//     );
  
//     if (!res.ok) {
//       throw new Error('Upload failed');
//     }
  
//     return await res.json();
//   };




// const cloudinary = require('cloudinary').v2;
// // import { v2 as cloudinary } from 'cloudinary';
// require('dotenv').config();

// const { CLOUD_NAME, API_KEY, API_SECRET } = process.env;

// if(!CLOUD_NAME || !API_KEY || !API_SECRET){
//   throw new Error("No Credintial on environment.");
// }

// cloudinary.config({ 
//     cloud_name: process.env.CLOUD_NAME, 
//     api_key: process.env.API_KEY, 
//     api_secret: process.env.API_SECRET,
//     secure: true
//   });

  
//   module.exports = cloudinary;