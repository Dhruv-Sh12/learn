
import dotenv from "dotenv"
import express from "express";
import connectDB from "./db/index.js";
import { app } from "./app.js";
dotenv.config({
    path: './.env'
})

connectDB()
.then(()=>{
    app.listen(process.env.PORT || 8000,()=>{
        console.log("Listening");
    })
})
.catch((err)=>{
    console.log(error);
})




// (async()=>{
//     try {
//         await mongoose.connect(`${process.env.MONGODB_URL}/${name}`)
//         app.on("errror",(error)=>{
//             console.log(error)
//             throw error
//         })
//         app.listen(process.env.PORT,()=>{
//             console.log(`RUNNING ON ${process.env.PORT}`);
//         })
//     } catch (error) {
//        console.error("error", error) 

//     }
// })()