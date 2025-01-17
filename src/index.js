//require('dotenv').config({path:'./env'})
import dotenv from "dotenv";
import connectDB from "./db/index.js";


dotenv.config({
    path:'./env'
})
connectDB()
.then(()=>{
    app.listen(process.env.PORT||8000,()=>{
        console.log(`server is running on ${process.env.PORT}`);
    })
})
.catch((error)=>{
    console.log("MongoDB connection failed!!!");
})








/*import express from "express"
const app=express()


(async()=>{
    try {
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        app.on("error",()=>{
            console.log("ERRR: ",error);
            throw error
        })

        app.listen(process.env.PORT,()=>{
            console.log(`App is lstening on port${process.env.PORT}`);
        })
        
    } catch (error) {
        consoele.error("Error",error);
        throw error
        
    }

})()*/