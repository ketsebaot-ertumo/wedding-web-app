// pages/index.js

"use client";
import LandingPage from '../components/LandingPage'; 

export default function Home() {
  return (
    // <div className="min-h-screen bg-pink-50 flex flex-col items-center justify-center text-center p-6">
    <div>
      <LandingPage />
    </div>
  );
}



// export default function Home() {
//   return (
//     <div className="min-h-screen bg-pink-50 flex flex-col items-center justify-center p-8 font-sans">
//       <motion.h1 className="text-5xl font-bold text-[#e27a00] mb-4" initial={{ y: -50, opacity: 0 }} animate={{ y: 0, opacity: 1 }}>
//         💍 Tinsae & Wubit's Wedding
//       </motion.h1>
//       <motion.p className="text-lg text-center text-gray-700 mb-8" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}>
//       {/* <motion.p className="text-lg text-center text-gray-700 mb-8" initial={{ opacity: 0 }} animate={{ opacity: 1, delay: 0.5 }}> */}
//         Share your precious moments and celebrate love. Scan, Upload, and Relive!
//       </motion.p>
//       <Link href="/upload">
//         <div className="bg-[#e27a00] text-white px-6 py-3 rounded-full shadow-lg hover:bg-[#c86500] transition">
//           📸 Upload Wedding Photos
//         </div>
//       </Link>
//     </div>
//   );
// }