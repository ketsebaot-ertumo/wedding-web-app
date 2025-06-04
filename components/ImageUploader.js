"use client";
import React, { useState } from "react";
import { uploadImageToCloudinary } from "../utils/cloudinary";

export default function ImageUploader({ onUpload }) {
  const [file, setFile] = useState(null);
  const [uploading, setUploading] = useState(false);

  const handleFileChange = (e) => setFile(e.target.files[0]);

  const handleUpload = async (e) => {
    const files = Array.from(e.target.files);

    const uploadedImages = await Promise.all(
      files.map(async (file) => {
        // setFile(file);
        const url = await uploadImageToCloudinary(file);
        // onUpload(url);
      })
    );

    // setImages((prev) => [...prev, ...uploadedImages.filter(Boolean)]);
  };

  // const handleUpload = async () => {
  //   if (!file) return;
  //   setUploading(true);
  //   try {
  //     const url = await uploadImageToCloudinary(file);
  //     onUpload(url);
  //   } catch (err) {
  //     console.error("Upload failed:", err);
  //   } finally {
  //     setUploading(false);
  //   }
  // };

  return (
    <div className="flex flex-col gap-3 items-center">
      {/* <input type="file" onChange={handleFileChange} /> */}
      {/* Upload Portal */}
      <section className="max-w-3xl mx-auto text-center p-6">
        <h2 className="text-2xl font-semibold text-pink-500 mb-4">Upload Your Moments</h2>
        <input
          type="file"
          accept="image/*"
          multiple
          onChange={handleUpload}
          className="bg-pink-600 text-white py-2 px-4 rounded hover:bg-pink-700 disabled:opacity-50"
          placeholder="Choose an image to upload"
        />
      </section>
      {/* <button
        onClick={handleUpload}
        className="bg-pink-600 text-white py-2 px-4 rounded hover:bg-pink-700 disabled:opacity-50"
        disabled={uploading}
      >
        {uploading ? "Uploading..." : "Upload Image"}
      </button> */}
    </div>
  );
}






// 4. components/ImageUploader.js - Upload to Cloudinary
// "use client";
// import { useState } from 'react';

// export default function ImageUploader() {
//   const [file, setFile] = useState(null);
//   const [url, setUrl] = useState('');

//   const uploadImage = async () => {
//     const formData = new FormData();
//     formData.append('file', file);
//     formData.append('upload_preset', 'your_preset');

//     const res = await fetch('https://api.cloudinary.com/v1_1/your_cloud_name/image/upload', {
//       method: 'POST',
//       body: formData,
//     });
//     const data = await res.json();
//     setUrl(data.secure_url);
//   };

//   return (
//     <div className="flex flex-col items-center">
//       <input type="file" onChange={e => setFile(e.target.files[0])} className="mb-4" />
//       <button onClick={uploadImage} className="bg-rose-500 text-white px-4 py-2 rounded-lg">Upload</button>
//       {url && <img src={url} alt="Uploaded" className="mt-4 rounded-lg shadow-md w-60" />}
//     </div>
//   );
// }