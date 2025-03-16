import React, { useEffect, useRef } from "react";
import Typed from "typed.js";

const MainPage = ({ scrollToSection }) => {
    const typedElement = useRef(null); // Reference for Typed.js

    useEffect(() => {
        const typed = new Typed(typedElement.current, {
            strings: [
                "Lorem Ipsum Generator",
                "Base64 Encoder Decoder",
                "Case Converter",
                "JSON Formatter",
                "QR Code Generator",
                "Random Color Generator",
                "URL Encoder Decoder",
            ],
            typeSpeed: 50,
            backSpeed: 30,
            backDelay: 1500,
            loop: true,
        });

        return () => typed.destroy(); // Cleanup to prevent memory leaks
    }, []);

    return (
        <div className="flex items-center justify-center px-4 relative z-10 md:h-[calc(100vh-116px-64px)] h-[86vh]">
            <div className="max-w-3xl text-center">
                <h1 className="mb-6 text-4xl font-bold tracking-tight sm:text-6xl lg:text-7xl text-white">
                    Welcome to Developer Toolkit
                </h1>

                <p className="mx-auto mb-6 max-w-2xl text-xl text-slate-300">
                    A collection of various developer tools, including &nbsp;
                    <br />
                    <span ref={typedElement} className="text-white font-semibold" />
                </p>

                <div className="flex flex-wrap justify-center gap-4">
                    <button
                        onClick={() => scrollToSection("dashboard")}
                        className="rounded-lg px-6 py-3 font-medium border-2 text-white transition-all duration-300 hover:bg-sky-500 hover:scale-105 hover:cursor-pointer"
                    >
                        Try Now
                    </button>


                </div>
            </div>
        </div>
    );
};

export default MainPage;
