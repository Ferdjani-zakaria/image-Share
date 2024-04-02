import { FC, useEffect, useState } from "react";

interface LoadingBarProps {
    progressStart: number;
    theme: boolean;
}

const LoadingBar: FC<LoadingBarProps> = ({ progressStart, theme }) => {
    const [progress, setProgress] = useState<number>(progressStart);

    useEffect(() => {
        const interval = setInterval(() => {
            if (progress >= 660) {
                setProgress(-80);
            }
            setProgress((prev) => prev + 10);
        }, 50); // interval

        return () => clearInterval(interval);
    }, [progress]);

    return (
        <div className="flex flex-col items-center justify-center p-4 rounded-lg shadow-lg min-h-32 min-w-128">
            <h1 className="text-sm  mb-8">
                <span className="font-bold">Uploading</span>, please wait..
            </h1>
            <div
                className={`relative w-96 h-2  rounded-md overflow-hidden 
                ${theme ? "bg-customMediumGray" : "bg-customGray"}
            `}
            >
                <div
                    className="absolute top-0 left-0 h-full bg-customBlue rounded-lg"
                    style={{ width: "15%", transform: `translateX(${progress}%)` }}
                ></div>
            </div>
        </div>
    );
};

export default LoadingBar;
