import React from "react";
import Link from "next/link";
import Image from "next/image";

const Navbar = ({ scrollToSection }) => {
    return (
        <nav className="flex md:flex-row flex-col justify-between items-center py-3 px-6 bg-black bg-opacity-75 backdrop-blur-md z-50 sticky top-0">
            {/* Logo */}
            <Link href="/" className="flex items-center">
                <Image
                    src="/devtools-hub.svg"
                    alt="DevTools Hub"
                    width={160}
                    height={50}
                    priority
                    className="w-auto h-10"
                />
            </Link>

            {/* Navigation Links */}
            <div className="flex justify-center items-center md:gap-10 gap-5">
                <ul className="flex md:gap-8 gap-6 text-white text-lg">
                    <li>
                        <Link href="/" className="hover:text-yellow-200 transition-colors">
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link
                            href="/about"
                            target="_blank"
                            className="hover:text-yellow-200 transition-colors"
                        >
                            About
                        </Link>
                    </li>
                </ul>

                {/* Try Tools Button */}
                <button
                    onClick={() => scrollToSection("dashboard")}
                    className="text-white text-lg px-4 py-2 border-2 rounded-lg transition-all duration-300 hover:bg-sky-500 hover:scale-105"
                >
                    Try Tools
                </button>
            </div>
        </nav>
    );
};

export default Navbar;
