import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config()

const app = express();

app.use(cors());


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

const mongoUrl = process.env.MONGODB_URL;

if(!mongoUrl){
    console.error("connection fail to mongodb");
    process.exit(1);
}

mongoose.connect(mongoUrl).then(()=>{
    console.log("Connected to MongoDB")
}).catch((error)=>{
    console.error("Error connecting to MongoDB", error.messege);
})