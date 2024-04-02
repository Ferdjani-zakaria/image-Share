import { FC, useState } from "react";
import Layout from "../layouts/Layout";
import ImageDisplayer from "../components/ImageDisplayer";
import LinkLogo from "../assets/Link.svg?react";
import DowndLoadLogo from "../assets/download.svg?react";
import { useParams } from "react-router-dom";

const DownloadPage: FC = () => {
    const [isDarkTheme, setIsDarkTheme] = useState<boolean>(false);
    const { id } = useParams();
    const urlCloudName = id?.split("/image/")[0];
    const lastUrlPart = id?.split("/upload")[1];

    const handleThemeChange = () => {
        setIsDarkTheme(!isDarkTheme);
    };
    const handleCopyLink = async () => {
        try {
            if (id) await navigator.clipboard.writeText(id);
        } catch (error) {
            console.error("Failed to copy url: ", error);
        }
    };

    return (
        <Layout isDarkTheme={isDarkTheme} handleThemeChange={handleThemeChange}>
            <ImageDisplayer theme={isDarkTheme} imageUrl={id || ""} />
            <div
                className={`flex justify-center gap-x-8 pt-6
            ${isDarkTheme ? "bg-customBlack" : "bg-customWhite"}`}
            >
                <button
                    disabled={!id}
                    onClick={handleCopyLink}
                    className="flex items-center justify-between w-24  bg-customBlue hover:bg-blue-700 text-white  py-2 px-4 rounded-lg"
                >
                    <LinkLogo /> Share
                </button>
                <button className="flex items-center justify-between w-28 bg-customBlue hover:bg-blue-700 text-white py-2 px-2 rounded-lg">
                    <DowndLoadLogo />
                    <a
                        href={`${urlCloudName}/image/upload/fl_attachment:new_sample${lastUrlPart}`}
                        download
                        target="_blank"
                        rel="noreferrer"
                    >
                        Download
                    </a>
                </button>
            </div>
        </Layout>
    );
};

export default DownloadPage;
