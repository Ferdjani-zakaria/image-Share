import express from "express";
import cors from "cors";
import "dotenv/config";
import mongoose from "mongoose";
import path from "path";
import { v2 as cloudinary } from "cloudinary";
import uploadRoutes from "./src/routes/uploadRoutes";

mongoose.connect(process.env.MONGODB_CONNECTION_STRING as string);

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
});

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use(express.static(path.join(__dirname, "../front/dist")));

app.use("/api/upload", uploadRoutes);

app.listen(7000, () => {
    console.log("Server running on localhost:7000");
});
