import React from "react";
import Link from "next/link";
import Image from "next/image";

const Navbar = ({ scrollToSection }) => {
    return (
        <nav className="flex md:flex-row flex-col justify-between items-center pt-3 pb-0.5 px-6 bg-opacity-75 backdrop-blur-xs z-50 sticky top-0">
            {/* Logo */}
            <Link href="/" className="flex items-center">
                <Image
                    src="/devtools-hub.svg"
                    alt="DevTools Hub"
                    width={300}
                    height={100}
                    priority
                    className="w-auto h-18"
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
                    className="text-white text-lg px-4 py-2 border-2 rounded-lg transition-all duration-300 hover:bg-sky-500 hover:scale-105 hover:cursor-pointer"
                >
                    Try Tools
                </button>
            </div>
        </nav>
    );
};

export default Navbar;
