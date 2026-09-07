import { v2 as cloudinary } from "cloudinary";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export default async function handler(req, res) {
  try {
    const result = await cloudinary.search
      .expression(`asset_folder="${process.env.CLOUDINARY_FOLDER}"`)
      .execute();

    if (!result.resources) {
      throw new Error("Cloudinary returned no resources!");
    }

    const images = result.resources.map((resource) => ({
      id: resource.public_id,
      url: resource.secure_url,
      width: resource.width,
      height: resource.height,
    }));

    console.log(images);

    return res.status(200).json(images);
  } catch (error) {
    console.error("Cloudinary error:", error);

    return res.status(500).json({
      error: error.message,
    });
  }
}
