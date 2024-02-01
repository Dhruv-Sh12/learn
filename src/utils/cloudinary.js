import { v2 as cloudinary } from "cloudinary";
import fs from "fs";


          
cloudinary.config({ 
  cloud_name: 'doxzwve5p', 
  api_key: '654688788527251', 
  api_secret: 'HCnqoI77P6TsJ4XI8Ze3NvkybVo' 
});
const uploadOnCloudinary = async (localFilePath) => {
  try {
    if (!localFilePath) {
      console.error("Local file path is missing.");
      return null;
    }

    // upload the file on Cloudinary
    const response = await cloudinary.uploader.upload(localFilePath, {
      resource_type: "auto",
    });

    // file has been uploaded successfully
    console.log("File uploaded on Cloudinary:", response.url);

    // remove the locally saved temporary file as the upload operation succeeded
    fs.unlinkSync(localFilePath);

    return response;
  } catch (error) {
    console.error("Error during Cloudinary upload:", error);

    // remove the locally saved temporary file as the upload operation failed
    fs.unlinkSync(localFilePath);

    return null;
  }
};

export { uploadOnCloudinary };
