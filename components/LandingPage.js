"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import axios from "axios";
import ImageUploader from "@/components/ImageUploader";
import ImageGrid from "@/components/ImageGrid";
import Footer from "@/components/Footer";
import { Loader } from "@/components/Loader";
import CountdownTimer from "@/components/CountdownTimer"

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
    try {
      const { data } = await axios.get("/api/images");
      const urls = data.map((img) => img.secure_url);
      setImages((prev) => [...urls, ...prev]);
    } catch (error) {
      console.error("Error fetching images:", error);
    }
  };

  // if(!images.length) {
  //   return (
  //     <div className="min-h-[80vh]"><Loader/></div>
  //   );
  // }

  return (
    <main className="min-h-screen bg-gradient-to-br from-rose-100 via-pink-50 to-white dark:from-gray-800 dark:via-gray-900 dark:to-black px-4 sm:px-6 pt-24 transition-colors duration-300 font-sans">
      <div className=""></div>
      {/* Header */}
      <motion.header
        className="text-center mb-12"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-rose-600 dark:text-pink-300 tracking-tight">
          💞 Tinsae & Wubit's Wedding Wall
        </h1>
        <p className="text-lg sm:text-xl mt-4 text-gray-700 dark:text-gray-300">
          Share your love, joy, and unforgettable moments with us!
        </p>
      </motion.header>

      <CountdownTimer />

      {/* Upload Section */}
      <section className="max-w-3xl mx-auto mb-16 px-4">
        <motion.div
          className="bg-white dark:bg-gray-800 backdrop-blur-sm border border-rose-200 dark:border-gray-700 shadow-xl rounded-2xl p-6 md:p-8"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
        >
          <h2 className="text-center text-xl sm:text-2xl font-semibold text-rose-500 dark:text-pink-300 mb-4">
            📸 Upload Your Wedding Photos
          </h2>
          <p className="text-center text-sm text-gray-600 dark:text-gray-400 mb-6">
            Whether it's a smile, a kiss, or a candid moment—upload and cherish it here.
          </p>
          <ImageUploader />
        </motion.div>
      </section>

      {/* Gallery Section */}
      <section className="max-w-7xl mx-auto px-2 sm:px-6">
        <motion.h2
          className="text-2xl sm:text-3xl text-center font-bold text-rose-600 dark:text-pink-300 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          ✨ Wedding Gallery
        </motion.h2>
        <ImageGrid images={images} />
      </section>

      {/* Footer */}
      <div className="mt-20">
        <Footer />
      </div>
    </main>
  );
}






// "use client";

// import React, { useEffect, useState } from "react";
// import { motion } from "framer-motion";
// import ImageUploader from "@/components/ImageUploader";
// import axios from "axios";
// import ImageGrid from "@/components/ImageGrid";
// const imageData = [
//   "/images/img-1.jpg",
//   "/images/img-2.jpg",
// ];

// export default function HomePage() {
//   const [images, setImages] = useState(imageData);

//   useEffect(() => {
//     fetchImages();
//   }, []);

//   const fetchImages = async () => {
//     const {data} = await axios.get("/api/images");
//     const response = data.map(img => img.secure_url);
//     setImages((prev) => [...response, ...prev]);
//   };


//   return (
//     <main className="min-h-screen bg-gradient-to-br from-pink-100 to-rose-200 py-12 px-6 text-center">
//       <h1 className="text-4xl font-bold text-rose-600 mb-4 animate-pulse">💍 Our Wedding Memories</h1>
//       <p className="text-lg mb-6 text-gray-700">Share your special moments with us. Upload your wedding photos!</p>

      
//       <div className="mb-10">
//         <ImageUploader />
//       </div>

//       <ImageGrid images={images} />
//     </main>
//   );
// }
