
// 2. components/QRShare.js - QR Code Component
import QRCode from 'qrcode.react';

export default function QRShare() {
  const url = typeof window !== 'undefined' ? window.location.origin + '/upload' : '';
  return (
    <div className="bg-white p-4 rounded-xl shadow-md">
      <QRCode value={url} size={200} />
      <p className="mt-2 text-sm text-gray-600">Scan to upload wedding photos</p>
    </div>
  );
}