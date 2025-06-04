"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import ImageUploader from "@/components/ImageUploader";
import axios from "axios";
const imageData = [
  "/images/img-1.jpg",
  "/images/img-2.jpg",
];

export default function HomePage() {
  const [images, setImages] = useState(imageData);

  useEffect(() => {
    fetchImages();
  }, []);

  const fetchImages = async () => {
    const res = await axios.get("/api/images");
    console.log("Fetched images:", res?.data);
    // const data = await res.json();
    // setImages(data);
    setImages((prev) => [res.data, ...prev]);
  };
// 
  const handleUpload = (url) => {
    setImages((prev) => [url, ...prev]);
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-pink-100 to-rose-200 py-12 px-6 text-center">
      <h1 className="text-4xl font-bold text-rose-600 mb-4 animate-pulse">💍 Our Wedding Memories</h1>
      <p className="text-lg mb-6 text-gray-700">Share your special moments with us. Upload your wedding photos!</p>

      
      <div className="mb-10">
        {/* <ImageUploader onUpload={handleUpload} /> */}
        <ImageUploader />
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {images.map((img, i) => (
          <motion.img
            key={i}
            src={img}
            alt={`Guest Upload ${i}`}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.1 }}
            className="rounded-lg shadow-md border-2 border-pink-200"
          />
        ))}
      </div>
    </main>
  );
}




// 'use client';

// import React, { useState } from "react";
// import { motion } from "framer-motion";
// import axios from "axios";
// const { CLOUD_NAME, UPLOAD_PRESET } = process.env; 
// const imageData = [
//   "/images/img-1.jpg",
//   "/images/img-2.jpg",
// ];

// // const CLOUD_NAME = "your_cloud_name"; // Replace with your Cloudinary cloud name
// // const UPLOAD_PRESET = "your_upload_preset"; // Replace with your Cloudinary upload preset

// const LandingPage = () => {
//   const [images, setImages] = useState(imageData);

//   const handleUpload = async (e) => {
//     const files = Array.from(e.target.files);

//     const uploadedImages = await Promise.all(
//       files.map(async (file) => {
//         const formData = new FormData();
//         formData.append("file", file);
//         formData.append("upload_preset", UPLOAD_PRESET);

//         try {
//           const res = await axios.post(
//             `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/image/upload`,
//             formData
//           );
//           return res.data.secure_url;
//         } catch (err) {
//           console.error("Upload error:", err);
//           return null;
//         }
//       })
//     );

//     setImages((prev) => [...prev, ...uploadedImages.filter(Boolean)]);
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-b from-pink-100 to-white font-sans">
//       {/* Header */}
//       <header className="text-center py-10">
//         <h1 className="text-4xl font-bold text-pink-600 animate-bounce">Sarah & Daniel</h1>
//         <p className="text-gray-600 mt-2 text-lg">Join us in celebrating our love story!</p>
//       </header>

//       {/* Upload Portal */}
//       <section className="max-w-3xl mx-auto text-center p-6">
//         <h2 className="text-2xl font-semibold text-pink-500 mb-4">Upload Your Moments</h2>
//         <input
//           type="file"
//           accept="image/*"
//           multiple
//           onChange={handleUpload}
//           className="block mx-auto border border-pink-300 rounded px-4 py-2 cursor-pointer bg-white shadow"
//         />
//       </section>

//       {/* Live Wedding Wall / Gallery */}
//       <section className="px-4 py-8 max-w-6xl mx-auto">
//         <h2 className="text-2xl text-center font-bold text-pink-600 mb-6">Wedding Wall</h2>
//         <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
//           {images.map((img, i) => (
//             <motion.img
//               key={i}
//               src={img}
//               alt={`Guest Upload ${i}`}
//               initial={{ opacity: 0, scale: 0.8 }}
//               animate={{ opacity: 1, scale: 1 }}
//               transition={{ delay: i * 0.1 }}
//               className="rounded-lg shadow-md border-2 border-pink-200"
//             />
//           ))}
//         </div>
//       </section>

//       {/* Footer */}
//       <footer className="text-center py-6 text-gray-500">
//         Made with ❤️ by Sarah & Daniel | Wedding 2025
//       </footer>
//     </div>
//   );
// };

// export default LandingPage;





// import React from "react";
// import { motion } from "framer-motion";
// import { useState } from "react";

// const imageData = [
//     "/images/img-1.jpg",
//     // "/images/img-2.jpg",
// ]

// const LandingPage = () => {
//   const [images, setImages] = useState(imageData);

//   const handleUpload = (e) => {
//     const files = Array.from(e.target.files);
//     const imageURLs = files.map((file) => URL.createObjectURL(file));
//     setImages((prev) => [...prev, ...imageURLs]);
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-b from-pink-100 to-white font-sans">
//       {/* Header */}
//       <header className="text-center py-10">
//         <h1 className="text-4xl font-bold text-pink-600 animate-bounce">Sarah & Daniel</h1>
//         <p className="text-gray-600 mt-2 text-lg">Join us in celebrating our love story!</p>
//       </header>

//       {/* Upload Portal */}
//       <section className="max-w-3xl mx-auto text-center p-6">
//         <h2 className="text-2xl font-semibold text-pink-500 mb-4">Upload Your Moments</h2>
//         <input
//           type="file"
//           accept="image/*"
//           multiple
//           onChange={handleUpload}
//           className="block mx-auto border border-pink-300 rounded px-4 py-4 cursor-pointer bg-white shadow rounded-xl"
//         />
//       </section>

//       {/* Live Wedding Wall / Gallery */}
//       <section className="px-4 py-8 max-w-6xl mx-auto">
//         <h2 className="text-2xl text-center font-bold text-pink-600 mb-6">Wedding Wall</h2>
//         <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
//           {images.map((img, i) => (
//             <motion.img
//               key={i}
//               src={img}
//               alt={`Guest Upload ${i}`}
//               initial={{ opacity: 0, scale: 0.8 }}
//               animate={{ opacity: 1, scale: 1 }}
//               transition={{ delay: i * 0.1 }}
//               className="rounded-lg shadow-md border-2 border-pink-200"
//             />
//           ))}
//         </div>
//       </section>

//       {/* Optional Moderation Panel (simplified, hidden to guests) */}
//       {/* This would be behind an admin route or login */}
//       {/* <section className="px-4 py-4 max-w-3xl mx-auto">
//         <h2 className="text-xl font-semibold mb-2">Moderation Panel (Admin Only)</h2>
//         <button className="bg-red-500 text-white px-4 py-2 rounded">Remove All Images</button>
//       </section> */}

//       {/* Footer */}
//       <footer className="text-center py-6 text-gray-500">
//         Made with ❤️ by Sarah & Daniel | Wedding 2025
//       </footer>
//     </div>
//   );
// };

// export default LandingPage;