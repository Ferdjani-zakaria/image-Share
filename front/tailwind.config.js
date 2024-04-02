/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                customBlue: "#3662E3",
                customBlack: "#121826",
                customGray: "#E5E7EB",
                customWhite: "#FFFFFF",
                customOffWhite: "#F9FAFB",
                customDarkGray: "#212936",
                customMediumGray: "#4D5562",
                customLightGray: "#F9FAFBCC",
            },
            minWidth: {
                112: "28rem",
                128: "32rem",
            },
        },
    },
    plugins: [],
};
