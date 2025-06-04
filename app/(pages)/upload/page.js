

// 3. pages/upload.js - Guest-Friendly Image Upload Portal
import ImageUploader from '@/components/ImageUploader';

export default function Upload() {
  return (
    <div className="min-h-screen bg-white flex flex-col items-center p-6">
      <h2 className="text-3xl font-bold mb-4">Upload Your Memories 💕</h2>
      <ImageUploader />
    </div>
  );
}






// // pages/upload.js
// "use client";
// import { useState } from 'react';
// import axios from 'axios';
// import QRCode from 'qrcode.react';
// import { motion } from 'framer-motion';

// export default function WeddingUploader() {
//   const [images, setImages] = useState([]);
//   const [preview, setPreview] = useState([]);
//   const [qrUrl, setQrUrl] = useState('https://yourdomain.com/upload');
//   const [uploading, setUploading] = useState(false);
//   const [uploadedUrls, setUploadedUrls] = useState([]);

//   const handleFilesChange = (e) => {
//     const files = Array.from(e.target.files);
//     setImages(files);
//     setPreview(files.map(file => URL.createObjectURL(file)));
//   };

//   const uploadImages = async () => {
//     setUploading(true);
//     const uploads = await Promise.all(images.map(async (img) => {
//       const formData = new FormData();
//       formData.append('file', img);
//       formData.append('upload_preset', 'your_upload_preset');
//       const res = await axios.post('https://api.cloudinary.com/v1_1/your_cloud_name/image/upload', formData);
//       return res.data.secure_url;
//     }));
//     setUploadedUrls(uploads);
//     setUploading(false);
//   };

//   return (
//     <div className="min-h-screen bg-[#fdf6f0] flex flex-col items-center p-8 font-sans">
//       <motion.h1 className="text-4xl font-bold mb-4 text-[#e27a00]" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
//         📸 Share Your Wedding Memories
//       </motion.h1>

//       <div className="bg-white p-6 rounded-2xl shadow-xl w-full max-w-md mb-6">
//         <h2 className="text-xl font-semibold mb-2">Upload Your Photos</h2>
//         <input type="file" accept="image/*" multiple onChange={handleFilesChange} className="mb-4" />
//         <div className="flex flex-wrap gap-2 mb-4">
//           {preview.map((src, i) => (
//             <img key={i} src={src} alt="preview" className="w-20 h-20 object-cover rounded-xl" />
//           ))}
//         </div>
//         <button onClick={uploadImages} disabled={uploading} className="bg-[#e27a00] text-white px-4 py-2 rounded-xl">
//           {uploading ? 'Uploading...' : 'Upload'}
//         </button>
//         {uploadedUrls.length > 0 && (
//           <p className="text-green-600 mt-2">Uploaded successfully! 🎉</p>
//         )}
//       </div>

//       <div className="bg-white p-4 rounded-xl shadow-md">
//         <h2 className="text-lg font-semibold mb-2">Scan QR to Access Uploader</h2>
//         <QRCode value={qrUrl} size={200} />
//         <p className="text-xs mt-2">Link: <a href={qrUrl} className="text-blue-500 underline">{qrUrl}</a></p>
//       </div>
//     </div>
//   );
// }