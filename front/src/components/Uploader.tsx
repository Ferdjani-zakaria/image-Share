import { FC, DragEvent } from "react";
import SmallLogo from "../assets/logo-small.svg?react";

interface UploaderProps {
    theme: boolean;
    onImageUpload: (file: File) => void;
}

const Uploader: FC<UploaderProps> = ({ theme, onImageUpload }) => {
    // Function to handle file drop
    const handleDrop = (e: DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        const file = e.dataTransfer.files[0];
        handleImageUpload(file);
    };

    // Function to prevent default behavior on drag events
    const handleDragOver = (e: DragEvent<HTMLDivElement>) => {
        e.preventDefault();
    };

    // Function to handle file input change
    const handleFileInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files && e.target.files[0];
        if (file) {
            handleImageUpload(file);
        }
    };

    // Function to handle image upload
    const handleImageUpload = (file: File) => {
        onImageUpload(file);
    };

    return (
        <div className="rounded-lg shadow-lg p-4 min-h-80 min-w-128">
            <div
                className={`flex flex-col justify-center items-center  border-dashed border-2 rounded-lg p-4 min-h-80 min-w-128
                        ${theme ? "border-customMediumGray" : "border-customGray"}
                        `}
                onDrop={handleDrop}
                onDragOver={handleDragOver}
            >
                <SmallLogo className="mb-6" />
                <p>
                    Drag & drop a file or
                    <label
                        htmlFor="file-upload"
                        className="text-customBlue font-bold cursor-pointer"
                    >
                        {" "}
                        browse files
                    </label>
                    <input
                        id="file-upload"
                        type="file"
                        accept=".jpg, .jpeg, .png, .gif"
                        className="hidden"
                        onChange={handleFileInput}
                    />
                </p>
                <p>JPG, PNG or GIF - Max file size 2MB</p>
            </div>
        </div>
    );
};

export default Uploader;
