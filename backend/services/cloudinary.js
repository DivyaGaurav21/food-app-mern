import { v2 as cloudinary } from "cloudinary";

cloudinary.config({
  cloud_name: "dq0jrieog",
  api_key: "569736593621861",
  api_secret: "jkbRbzeNl3lnMmlN6EC_7vyhZQ8",
});
// cloudinary.config({
//   cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
//   api_key: process.env.CLOUDINARY_API_KEY,
//   api_secret: process.env.CLOUDINARY_API_SECRET,
// });

export default cloudinary;