import { FC } from "react";
import Logo from "../assets/logo.svg?react";
import Moon from "../assets/Moon_fill.svg?react";
import Sun from "../assets/Sun_fill.svg?react";

interface HeaderProps {
    hanldeThemeChange: () => void;
    theme: boolean;
}

const Header: FC<HeaderProps> = ({ hanldeThemeChange, theme }) => {
    return (
        <div>
            <div className={`container flex justify-between items-center mx-auto py-4`}>
                <Logo />
                <button
                    className={`p-2  border rounded-lg
                ${
                    theme
                        ? "bg-customDarkGray border-customLightGray"
                        : "bg-customWhite border-customMediumGray"
                }
                `}
                    onClick={() => hanldeThemeChange()}
                >
                    {theme ? <Sun /> : <Moon />}
                </button>
            </div>
            <div
                className={`w-full border-t 
            ${theme ? " border-customMediumGray" : " border-customGray"}
            `}
            ></div>
        </div>
    );
};

export default Header;
