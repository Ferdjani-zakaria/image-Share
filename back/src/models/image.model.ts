import mongoose from "mongoose";

type ImageUploaded = {
    url: string;
};

const imageSchema = new mongoose.Schema<ImageUploaded>({
    url: { type: String, required: true },
});

const Image = mongoose.model<ImageUploaded>("Image", imageSchema);

export default Image;
