
// // // pages/gallery.js


// 5. pages/gallery.js - Live Wedding Gallery
import useSWR from 'swr';
import ImageGrid from '@/components/ImageGrid';

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function Gallery() {
  const { data, error } = useSWR('/api/images', fetcher);
  if (error) return <div>Error loading gallery.</div>;
  if (!data) return <div>Loading...</div>;

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <h2 className="text-3xl font-bold text-center mb-6">💞 Wedding Gallery</h2>
      <ImageGrid images={data} />
    </div>
  );
}


// import { useEffect, useState } from 'react';

// export default function Gallery() {
//   const [images, setImages] = useState([]);

//   useEffect(() => {
//     fetch('/api/images')
//       .then(res => res.json())
//       .then(data => setImages(data));
//   }, []);

//   return (
//     <div className="p-8">
//       <h1 className="text-2xl font-bold mb-4">Wedding Gallery</h1>
//       <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
//         {images.map(img => (
//           <img key={img.asset_id} src={img.secure_url} alt="wedding" className="rounded-xl" />
//         ))}
//       </div>
//     </div>
//   );
// }





// // import { useEffect, useState } from 'react';

// // export default function Gallery() {
// //   const [images, setImages] = useState([]);

// //   useEffect(() => {
// //     // Simulate fetching Cloudinary images
// //     setImages([
// //       'https://res.cloudinary.com/demo/image/upload/sample.jpg',
// //       'https://res.cloudinary.com/demo/image/upload/v1615991360/wedding1.jpg',
// //       'https://res.cloudinary.com/demo/image/upload/v1615991360/wedding2.jpg',
// //     ]);
// //   }, []);

// //   return (
// //     <div className="min-h-screen bg-[#fdf6f0] p-8">
// //       <h1 className="text-3xl font-bold text-center text-[#e27a00] mb-6">💖 Wedding Photo Gallery</h1>
// //       <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
// //         {images.map((img, index) => (
// //           <img key={index} src={img} alt="Wedding" className="rounded-xl shadow-md hover:scale-105 transition" />
// //         ))}
// //       </div>
// //     </div>
// //   );
// // }
