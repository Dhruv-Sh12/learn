import { User } from "../models/user.models";
import { ApiError } from "../utils/ApiError";
import { asyncHandler } from "../utils/asyncHandler";
import jwt from "jsonwebtoken";
export const verifyJWT=asyncHandler(async (req,res,next)=>{
    try {
        const token=req.cookies?.acessToken || req.header("Authoriztion")?.replace("Bearer","")
    
        if(!token){
            throw new ApiError(401,"Unauthorized Request")
    
        }
        const decodeToken=jwt.verify(token, process.env.ACCESS_TOKEN_SECRET)
        const user=await User.findById(decodeToken._id).select("-password -refreshToken")
    
        if(!user){
            throw new ApiError(401,"Invalid Acess token")
        }
        req.user=user;
        next()
    } catch (error) {
        throw new ApiError(401,error?.message || "Invlid Access Token")
    }

})