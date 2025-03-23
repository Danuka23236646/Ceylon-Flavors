import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import bodyParser  from "body-parser";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());
const PORT = 5000;

// Importing routes
import menuRoutes from "./routes/menuroute.js";


// Use routes
app.use('/api/menu', menuRoutes);


// Serve uploaded images as static files
app.use("/uploads", express.static("uploads"));

if (!process.env.MONGODB_URL) {
    console.error("Error: MONGODB_URL is not defined in .env file.");
    process.exit(1);
}

const mongoUrl = process.env.MONGODB_URL;

// Connect to MongoDB (without deprecated options)
mongoose.connect(mongoUrl)
    .then(() => {
        console.log("MongoDB connection successfully");

        // Start server only if DB connection is successful
        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`);
        });

    }).catch((err) => {
        console.error("MongoDB connection error:", err);
    });



