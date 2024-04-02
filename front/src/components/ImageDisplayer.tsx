import { FC } from "react";

interface ImageDisplayerProps {
    theme: boolean;
    imageUrl: string;
}
const ImageDisplayer: FC<ImageDisplayerProps> = ({ theme, imageUrl }) => {
    return (
        <div className="rounded-lg shadow-lg p-4 min-h-80 min-w-128">
            <div
                className={`flex flex-col justify-center items-center  border-dashed border-2 rounded-lg min-h-80 min-w-128
                        ${theme ? "border-customMediumGray" : "border-customGray"}
                        `}
            >
                <img
                    className="rounded-lg w-full h-full object-contain max-h-80 max-w-128"
                    src={imageUrl}
                    alt="loadedPreview"
                />
            </div>
        </div>
    );
};

export default ImageDisplayer;
