import React, { useEffect, useRef } from 'react'
import Typed from "typed.js";

const MainPage = ({ scrollToSection }) => {
    const typedElement = useRef(null); // for typed.js' dynamic texting

    useEffect(() => {
        const typed = new Typed(typedElement.current, {
            strings: ["Lorem Ipsum Generator", "Base64 Encoder Decoder", "Case Converter", "JSON Formatter",
                "QR Code Generator", "Random Color Generator", "URL Encoder Decoder"
            ],
            typeSpeed: 50,
            loop: true,
        });

        return () => typed.destroy(); // Cleanup when unmounted
    },);


    return (
        <>
            <div className="flex-1 flex items-center justify-center px-4 relative z-10 md:h-[calc(100vh-116px-64px)] h-[86vh]">
                <div className="max-w-3xl text-center">
                    <h1 className="mb-8 text-4xl font-bold tracking-tight sm:text-6xl lg:text-7xl text-white">
                        Welcome to Developer Toolkit
                    </h1>

                    <p className="mx-auto mb-8 max-w-2xl text-xl text-slate-300">
                        A collection of various developer tools consisting of &nbsp; <br />
                        <span ref={typedElement} className="text-white" />
                    </p>

                    <div className="flex flex-wrap justify-center gap-4">
                        <button onClick={() => scrollToSection("dashboard")} className="rounded-lg px-6 py-3 font-medium border-2 text-white hover:bg-sky-500 hover:cursor-pointer">
                            Try Now
                        </button>

                        {/* <button className="rounded-lg border px-6 py-3 font-medium bg-[rgba(30,41,59,0.5)] text-white hover:bg-slate-700 hover:cursor-not-allowed">
                            Read More
                        </button> */}
                    </div>
                </div>
            </div>
        </>
    );
};

export default MainPage
