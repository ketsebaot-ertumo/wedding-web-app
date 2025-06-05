'use client';
import React, { useState, useCallback, useEffect } from 'react';
import { useDropzone } from 'react-dropzone';
import { uploadImageToCloudinary } from '../utils/cloudinary';
import { X } from 'lucide-react'; 
import { Loader } from './Loader'; 

export default function ImageUploader() {
  const [files, setFiles] = useState([]);
  const [uploading, setUploading] = useState(false);
  const MAX_SIZE = 10 * 1024 * 1024; // 10MB
  const MAX_FILES = 10;

  const onDrop = useCallback(
    (acceptedFiles) => {
      const tooLarge = acceptedFiles.find((file) => file.size > MAX_SIZE);
      if (tooLarge) {
        alert(`One or more files are too large. Maximum allowed size is 10MB.`);
        return;
      }

      if (files.length + acceptedFiles.length > MAX_FILES) {
        alert('You can upload a maximum of 10 images.');
        return;
      }

      const newFiles = acceptedFiles.map((file) =>
        Object.assign(file, {
          preview: URL.createObjectURL(file),
        })
      );
      setFiles((prev) => [...prev, ...newFiles]);
    },
    [files]
  );

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      'image/*': [],
      'video/*': [],
    },
    multiple: true,
    maxFiles: 10,
  });

  const handleUpload = async () => {
    if (files.length === 0) return;

    setUploading(true);
    try {
      await Promise.all(
        files.map(async (file) => {
          await uploadImageToCloudinary(file);
        })
      );
      alert('All files uploaded successfully!');
      setFiles([]);
    } catch (err) {
      console.error('Upload failed:', err);
      alert('Upload failed. Check console for error.');
    } finally {
      setUploading(false);
    }
  };

  const handleRemove = (indexToRemove) => {
    const removedFile = files[indexToRemove];
    URL.revokeObjectURL(removedFile.preview);
    setFiles(files.filter((_, i) => i !== indexToRemove));
  };

  useEffect(() => {
    return () => {
      files.forEach((file) => URL.revokeObjectURL(file.preview));
    };
  }, [files]);

  return (
    <div className="flex flex-col gap-5 items-center">
      <section className="w-full max-w-lg mx-auto p-8 border-2 border-dashed border-pink-400 rounded-lg bg-pink-50 text-center transition hover:bg-pink-100 cursor-pointer">
        <div {...getRootProps()}>
          <input {...getInputProps()} />
          {isDragActive ? (
            <p className="text-pink-600 font-semibold">Drop the files here ...</p>
          ) : (
            <p className="text-pink-500 font-medium">
              Drag and drop images here, or click to select files (max 10)
            </p>
          )}
        </div>
      </section>

      {files.length > 0 && (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 w-full max-w-4xl">
          {files.map((file, i) => (
            <div key={i} className="relative group">
              <img
                src={file.preview}
                alt={`preview-${i}`}
                className="rounded-lg object-cover w-full h-32 shadow"
              />
              <button
                onClick={() => handleRemove(i)}
                className="absolute top-1 right-1 bg-white rounded-full p-1 shadow hover:bg-red-500 hover:text-white transition-opacity opacity-70 group-hover:opacity-100"
                title="Remove"
              >
                <X size={16} />
              </button>
            </div>
          ))}
        </div>
      )}

      <button
        onClick={handleUpload}
        className="bg-pink-600 text-white py-2 px-6 rounded hover:bg-pink-700 disabled:opacity-50"
        disabled={uploading || files.length === 0}
      >
        {uploading ? <Loader/> : `Upload ${files.length} Image(s)`}
      </button>
    </div>
  );
}





// 'use client';
// import React, { useState, useCallback, useEffect } from 'react';
// import { useDropzone } from 'react-dropzone';
// import { uploadImageToCloudinary } from '../utils/cloudinary';

// export default function ImageUploader() {
//   const [files, setFiles] = useState([]);
//   const [uploading, setUploading] = useState(false);
//   const MAX_SIZE = 10 * 1024 * 1024; // 10MB
//   const MAX_FILES = 10; 

//   const onDrop = useCallback((acceptedFiles) => {
//     const tooLarge = acceptedFiles.find((file) => file.size > MAX_SIZE);
//     if (tooLarge) {
//       alert(`One or more files are too large. Maximum allowed size is 10MB.`);
//       return;
//     }
  
//     if (files.length + acceptedFiles.length > MAX_FILES) {
//       alert('You can upload a maximum of 10 images.');
//       return;
//     }
  
//     const newFiles = acceptedFiles.map((file) =>
//       Object.assign(file, {
//         preview: URL.createObjectURL(file),
//       })
//     );
//     setFiles((prev) => [...prev, ...newFiles]);
//   }, [files]);

//   const { getRootProps, getInputProps, isDragActive } = useDropzone({
//     onDrop,
//     accept: {
//       'image/*': [],
//       'video/*': [],
//     },
//     multiple: true,
//     maxFiles: 10,
//   });

//   const handleUpload = async () => {
//     if (files.length === 0) return;

//     setUploading(true);
//     try {
//       await Promise.all(
//         files.map(async (file) => {
//           await uploadImageToCloudinary(file);
//         })
//       );
//       alert('All files uploaded successfully!');
//       setFiles([]);
//     } catch (err) {
//       console.error('Upload failed:', err);
//       alert('Upload failed. Check console for error.');
//     } finally {
//       setUploading(false);
//     }
//   };

//   useEffect(() => {
//     return () => {
//       files.forEach((file) => URL.revokeObjectURL(file.preview));
//     };
//   }, [files]);
  

//   return (
//     <div className="flex flex-col gap-5 items-center">
//       <section className="w-full max-w-lg mx-auto p-8 border-2 border-dashed border-pink-400 rounded-lg bg-pink-50 text-center transition hover:bg-pink-100 cursor-pointer">
//         <div {...getRootProps()}>
//           <input {...getInputProps()} />
//           {isDragActive ? (
//             <p className="text-pink-600 font-semibold">Drop the files here ...</p>
//           ) : (
//             <p className="text-pink-500 font-medium">
//               Drag and drop images here, or click to select files (max 10)
//             </p>
//           )}
//         </div>
//       </section>

//       {files.length > 0 && (
//         <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 w-full max-w-4xl">
//           {files.map((file, i) => (
//             <div key={i} className="relative">
//               <img
//                 src={file.preview}
//                 alt={`preview-${i}`}
//                 className="rounded-lg object-cover w-full h-32 shadow"
//               />
//             </div>
//           ))}
//         </div>
//       )}

//       <button
//         onClick={handleUpload}
//         className="bg-pink-600 text-white py-2 px-6 rounded hover:bg-pink-700 disabled:opacity-50"
//         disabled={uploading || files.length === 0}
//       >
//         {uploading ? 'Uploading...' : `Upload ${files.length} Image(s)`}
//       </button>
//     </div>
//   );
// }
