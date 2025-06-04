"use client";

import React from "react";
import { QRCodeCanvas } from "qrcode.react";

const WeddingQRCode = () => {
  const qrSize = 256;
  const logoSize = qrSize * 0.2;

  return (
    <div style={{ position: "relative", width: qrSize, height: qrSize }}>
      <QRCodeCanvas
        value="https://weeding.vercel.app"
        size={qrSize}
        level="H"
        includeMargin={true}
        bgColor="#ffffff"
        fgColor="#000000"
      />
      <img
        src="/images/img-1.jpg" // Make sure this exists in /public/images/
        alt="Wedding Logo"
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          width: logoSize,
          height: logoSize,
          transform: "translate(-50%, -50%)",
          borderRadius: "8px", // optional rounded look
        }}
      />
    </div>
  );
};

export default WeddingQRCode;





// "use client";

// import React, { useEffect, useRef } from "react";
// import { QRCodeCanvas } from "qrcode.react";

// const WeddingQRCode = () => {
//   const canvasWrapperRef = useRef(null);
//   const logoSrc = "/images/img-1.jpg"; // Ensure this is in your public/images/ folder

//   useEffect(() => {
//     const timeout = setTimeout(() => {
//       const canvas = canvasWrapperRef.current?.querySelector("canvas");
//       if (!canvas) return;

//       const ctx = canvas.getContext("2d");
//       if (!ctx) return;

//       const logoImg = new Image();
//       logoImg.src = logoSrc;
//       logoImg.crossOrigin = "anonymous";

//       logoImg.onload = () => {
//         const qrSize = canvas.width;
//         const logoSize = qrSize * 0.2; // 20% of the QR code size
//         const x = (qrSize - logoSize) / 2;
//         const y = (qrSize - logoSize) / 2;

//         ctx.drawImage(logoImg, x, y, logoSize, logoSize);
//       };
//     }, 300); // Allow QR to fully render

//     return () => clearTimeout(timeout);
//   }, []);

//   return (
//     <div ref={canvasWrapperRef}>
//       <QRCodeCanvas
//         value="https://weeding.vercel.app"
//         size={256}
//         level="H"
//         includeMargin={true}
//         bgColor="#ffffff"
//         fgColor="#000000"
//       />
//     </div>
//   );
// };

// export default WeddingQRCode;







// "use client";

// import React, { useEffect, useRef } from "react";
// import { QRCodeCanvas } from "qrcode.react";

// const WeddingQRCode = () => {
//   const canvasRef = useRef(null);
//   const logoSrc = "/images/img-1.jpg"; // Ensure this image exists in the public folder

//   useEffect(() => {
//     const timer = setTimeout(() => {
//       const canvas = canvasRef.current?.querySelector("canvas");
//       if (!canvas) return;

//       const ctx = canvas.getContext("2d");
//       const logo = new Image();
//       logo.src = logoSrc;
//       logo.crossOrigin = "anonymous"; // Optional, but useful if image is hosted
//       logo.onload = () => {
//         const imageSize = canvas.width * 0.2; // 20% of the QR code size
//         const x = (canvas.width - imageSize) / 2;
//         const y = (canvas.height - imageSize) / 2;
//         ctx.drawImage(logo, x, y, imageSize, imageSize);
//       };
//     }, 100); // Delay ensures QR code is rendered

//     return () => clearTimeout(timer);
//   }, []);

//   return (
//     <div ref={canvasRef}>
//       <QRCodeCanvas
//         value="https://weeding.vercel.app"
//         size={256}
//         level="H" // High error correction
//         includeMargin={true}
//         bgColor="#ffffff"
//         fgColor="#000000"
//       />
//     </div>
//   );
// };

// export default WeddingQRCode;





// "use client";

// import React, { useEffect, useRef } from "react";
// import { QRCodeCanvas } from "qrcode.react";

// const WeddingQRCode = () => {
//   const canvasRef = useRef(null);
//   const logoSrc = "/images/img-1.jpg"; // Make sure this path is correct (public/wedding.png)

//   useEffect(() => {
//     const canvas = canvasRef.current.querySelector("canvas");
//     const ctx = canvas.getContext("2d");

//     const logo = new Image();
//     logo.src = logoSrc;
//     logo.onload = () => {
//       const imageSize = canvas.width * 0.2; // 20% of the QR size
//       const x = (canvas.width - imageSize) / 2;
//       const y = (canvas.height - imageSize) / 2;
//       ctx.drawImage(logo, x, y, imageSize, imageSize);
//     };
//   }, []);

//   return (
//     <div ref={canvasRef}>
//       <QRCodeCanvas
//         value="https://weeding.vercel.app"
//         size={256}
//         level="H"
//         includeMargin={true}
//         bgColor="#ffffff"
//         fgColor="#000000"
//       />
//     </div>
//   );
// };

// export default WeddingQRCode;
