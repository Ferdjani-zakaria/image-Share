import express, { Request, Response } from "express";
import multer, { MulterError } from "multer";
import cloudinary from "cloudinary";
import Image from "../models/image.model";

const router = express.Router();

const storage = multer.memoryStorage();

const fileFilter = (
    req: Request,
    file: Express.Multer.File,
    cb: multer.FileFilterCallback
) => {
    // Allowed file types
    const allowedTypes = ["image/jpeg", "image/png", "image/gif"];
    if (!allowedTypes.includes(file.mimetype)) {
        const error = new MulterError("LIMIT_UNEXPECTED_FILE", "Invalid file type");
        cb(error);
    } else {
        cb(null, true);
    }
};

const upload = multer({
    storage: storage,
    limits: {
        fileSize: 2 * 1024 * 1024, // 2MB
    },
    fileFilter: fileFilter,
});

router.post("/", upload.single("imageFile"), async (req: Request, res: Response) => {
    try {
        const imageFile = req.file as Express.Multer.File;
        const b64 = Buffer.from(imageFile.buffer).toString("base64");
        let dataURI = "data:" + imageFile.mimetype + ";base64," + b64;
        const C_res = await cloudinary.v2.uploader.upload(dataURI);
        const imageUrl = C_res.url;
        const image = new Image({ url: imageUrl });
        await image.save();
        res.status(201).send(imageUrl);
    } catch (e) {
        console.log(e);
        res.status(500).json({ message: "Something went wrong" });
    }
});

export default router;
