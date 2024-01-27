import mongoose from "mongoose";
import { name } from "../constants.js";

const connectDB=async()=>{
    try {
        const connectionInstance=await mongoose.connect(`${process.env.MONGODB_URL}/${name}`)
        console.log(connectionInstance.connection.host);
    } catch (error) {
        console.log("MONGODB ERROR",error);
        process.exit(1);
    }
}
export default connectDB