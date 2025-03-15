import React from "react";

const Footer = ({ title }) => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-gray-900 text-white text-center flex items-center justify-center px-4 h-16 z-10 w-full">
            <p className="text-sm md:text-base">
                Copyright &copy; {currentYear} {title} — Created with ❤️ by{" "}
                <span className="font-semibold">Abhishek Kumar</span>
            </p>
        </footer>
    );
};

export default Footer;
