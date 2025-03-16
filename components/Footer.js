import React from "react";

const Footer = ({ title }) => {
    const currentYear = new Date().getFullYear();
    console.log(title + "hey")

    return (
        <footer className="bg-gray-900 text-white flex items-center justify-center px-4 h-16 z-10  fixed bottom-0 w-full">
            <p className="text-sm md:text-base text-center">
                Copyright &copy; {currentYear} {title || "Developer Toolkit"} - Created with ❤️ by{" "}
                <span className="font-semibold">Abhishek Kumar</span>
            </p>
        </footer>
    );
};

export default Footer;
