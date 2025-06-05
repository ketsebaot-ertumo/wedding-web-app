// /api/images/route.js or similar (must be server-side)
import axios from "axios";
// require('dotenv').config();


export async function GET() {
  const CLOUD_NAME = process.env.NEXT_PUBLIC_CLOUD_NAME;
  const API_KEY = process.env.CLOUDINARY_API_KEY;
  const API_SECRET = process.env.CLOUDINARY_API_SECRET;
  const FOLDER = "wedding_uploads";

  if (!CLOUD_NAME || !API_KEY || !API_SECRET) {
    return new Response("Cloudinary environment variables missing", { status: 500 });
  }

  const url = `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/resources/image`;
  const auth = {
    username: API_KEY,
    password: API_SECRET,
  };

  try {
    const res = await axios.get(url, {
      auth,
      params: {
        type: "upload",
        prefix: `${FOLDER}/`,
        max_results: 100,
      },
    });

    return new Response(JSON.stringify(res.data.resources), { status: 200 });
  } catch (error) {
    console.error("Error fetching images from Cloudinary:", error.response?.data || error);
    return new Response(JSON.stringify({ error: "Failed to fetch images" }), { status: 500 });
  }
}





// import { fetchCloudinaryImages } from "@/utils/cloudinary";
// import axios from "axios";


// export async function GET() {
//   const cloudName = process.env.NEXT_PUBLIC_CLOUD_NAME;
//     const folder = "wedding_uploads";

//     if (!cloudName) {
//       throw new Error("CLOUD_NAME is not defined in environment variables");
//     }

//     try {
//       const images = await fetchCloudinaryImages(); // Your logic
//       return new Response(JSON.stringify(images), { status: 200 });
//     } catch (error) {
//       console.error("API error in /api/images:", error);
//       return new Response(JSON.stringify({ error: "Internal Server Error" }), { status: 500 });
//     }
  
//     // const res = await fetch(
//     //   // `https://res.cloudinary.com/${cloudName}/image/list/${folder}.json`
//     //   `https://api.cloudinary.com/v1_1/${cloudName}/resources/image/upload?type=upload&prefix=${folder}`
//     // );

//     // console.log("Fetching images from Cloudinary:", res)
//     // if (!res.ok) throw new Error("Failed to fetch images from Cloudinary", res);
//     // const data = await res.json();
//     // return data.resources;
  
//     // try {
//     //   const res = await axios.get(
//     //     `https://res.cloudinary.com/${cloudName}/image/list/${folder}.json`
//     //   );
//     //   // const urls = res.data.resources.map((img) => `https://res.cloudinary.com/${cloudName}/image/upload/${img.public_id}.${img.format}`);
//     //   // return Response.json(urls);
//     //   console.log("Fetched images from Cloudinary:", res.data?.resources);
//     //   return res.data?.resources
//     // } catch (error) {
//     //   return new Response(JSON.stringify([]), { status: 500 });
//     // }
//   }
  