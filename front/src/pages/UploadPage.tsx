import { useState } from "react";
import Uploader from "../components/Uploader";
import LoadingBar from "../components/LoadingBar";
import Layout from "../layouts/Layout";
import { useNavigate } from "react-router-dom";

const UploadPage = () => {
    const [uploading, setUploading] = useState<boolean>(false);
    const [isDarkTheme, setIsDarkTheme] = useState<boolean>(false);
    const navigate = useNavigate();

    const handleThemeChange = () => {
        setIsDarkTheme(!isDarkTheme);
    };

    const handleImageUpload = async (file: File) => {
        // Set uploading to true to show the loading bar
        setUploading(true);
        let url;

        // Create a FormData object to send the file
        const formData = new FormData();
        formData.append("imageFile", file);

        try {
            // Send the image data to the API endpoint
            const response = await fetch("/api/upload", {
                method: "POST",
                body: formData,
            });

            if (response.ok) {
                // If upload is successful
                url = await response.text();
            } else {
                // If upload fails, handle the error
                console.error("Upload failed:", response.statusText);
            }
        } catch (error) {
            // Handle network errors
            console.error("Network error:", error);
        } finally {
            // Set uploading to false to hide the loading bar
            setUploading(false);
            // If url is defined, construct the navigation URL
            if (url) {
                const encodedUrl = encodeURIComponent(url);
                const newUrl: string = `/download/${encodedUrl}`;
                navigate(newUrl);
            }
        }
    };

    return (
        <Layout isDarkTheme={isDarkTheme} handleThemeChange={handleThemeChange}>
            {uploading ? (
                <LoadingBar progressStart={-80} theme={isDarkTheme} />
            ) : (
                <Uploader theme={isDarkTheme} onImageUpload={handleImageUpload} />
            )}
        </Layout>
    );
};

export default UploadPage;
