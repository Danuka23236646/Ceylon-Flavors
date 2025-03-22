import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import bodyParser from "body-parser";

//  Load environment variables FIRST
dotenv.config();

//  Declare app FIRST before using it
const app = express();
const PORT = 5000;

//  Middleware
app.use(cors());
app.use(bodyParser.json()); // Parses JSON data
app.use(bodyParser.urlencoded({ extended: true })); // Parses form data
app.use(express.json()); // Alternative JSON parsing




//  Importing routes

import reservationRouter from "./routes/reservationRoutes.js";

//  Use routes

app.use("/api/reservation", reservationRouter);




//  Serve uploaded images as static files
app.use("/uploads", express.static("uploads"));

//  Ensure MongoDB URL is defined
if (!process.env.MONGODB_URL) {
    console.error(" Error: MONGODB_URL is not defined in .env file.");
    process.exit(1);
}

//  Connect to MongoDB
mongoose.connect(process.env.MONGODB_URL)
    .then(() => {
        console.log(" MongoDB connected successfully");

        //  Start server only after DB connection
        app.listen(PORT, () => {
            console.log(` Server is running on port ${PORT}`);
        });

    }).catch((err) => {
        console.error(" MongoDB connection error:", err);
    });
