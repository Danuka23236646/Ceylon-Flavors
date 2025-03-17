import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';


dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());  // To parse JSON request body

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

const mongoUrl = process.env.MONGODB_URL;

if (!mongoUrl) {
  console.error('Connection failed to MongoDB');
  process.exit(1);
}








mongoose.connect(mongoUrl , {
  dbName: 'ceylonFlavors', // Force Mongoose to use the ceylonFlavors database
})











  .then(() => console.log('Connected to MongoDB'))
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error.message);
  });

