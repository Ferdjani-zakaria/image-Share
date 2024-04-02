import { FC, ReactNode } from "react";
import Header from "../components/Header"; // Import Header component

interface LayoutProps {
    children: ReactNode;
    isDarkTheme: boolean;
    handleThemeChange: () => void;
}

const Layout: FC<LayoutProps> = ({ children, isDarkTheme, handleThemeChange }) => {
    return (
        <div
            className={`min-h-screen flex flex-col ${
                isDarkTheme ? "bg-customBlack text-customLightGray" : "bg-customWhite"
            }`}
        >
            <Header hanldeThemeChange={handleThemeChange} theme={isDarkTheme} />
            <div className="grow flex justify-center items-center w-full bg-inherit">
                <div
                    className={`rounded-lg ${
                        isDarkTheme ? "bg-customDarkGray" : "bg-customWhite"
                    }`}
                >
                    {children}
                </div>
            </div>
        </div>
    );
};

export default Layout;
