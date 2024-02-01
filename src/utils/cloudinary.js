
import fs from "fs";

import {v2 as cloudinary} from 'cloudinary';
          
cloudinary.config({ 
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME, 
  api_key: process.env.CLOUDINARY_API_KEY, 
  api_secret: process.env.CLOUDINARY_API_SECRET 
});

const uploadoncloudinary=async (localpath)=>{
    try {
        if(!localpath) return null;
        const response=await cloudinary.uploader.upload(localpath,{
            resource_type:"auto"
        })
    } catch (error) {
        fs.unlinkSync(localpath);
        return null;
    }
}

export {cloudinary}