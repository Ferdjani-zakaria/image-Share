import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createHashRouter, RouterProvider } from "react-router-dom";
import UploadPage from "./pages/UploadPage";
import ErrorPage from "./pages/ErrorPage";
import DownloadPage from "./pages/DownloadPage";

const router = createHashRouter([
    {
        path: "/",
        element: <UploadPage />,
        errorElement: <ErrorPage />,
    },
    {
        path: "/download/:id",
        element: <DownloadPage />,
        errorElement: <ErrorPage />,
    },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);
