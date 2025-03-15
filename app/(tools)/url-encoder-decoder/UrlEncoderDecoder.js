"use client"
import Footer from '@/components/Footer';
import React, { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';

const UrlEncoderDecoder = () => {
    const [input, setInput] = useState("");
    const [output, setOutput] = useState("");
    const [mode, setMode] = useState(""); // "encode" or "decode"

    const encodeURL = () => {
        if (!input.trim()) {
            toast.error("Please enter a valid URL or text.");
            return;
        }
        setOutput(encodeURIComponent(input));
        setMode("encode");
        toast.success("URL encoded successfully!");
    };

    const decodeURL = () => {
        if (!input.trim()) {
            toast.error("Please enter a valid URL or text.");
            return;
        }
        try {
            setOutput(decodeURIComponent(input));
            setMode("decode");
            toast.success("URL decoded successfully!");
        } catch (error) {
            toast.error("Invalid input for decoding.");
        }
    };

    // Function to download text as .txt file
    const downloadTextFile = () => {
        const blob = new Blob([output], { type: "text/plain" });
        const link = document.createElement("a");
        link.href = URL.createObjectURL(blob);
        link.download = mode === "encode" ? "encoded-url.txt" : "decoded-url.txt";

        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);

        toast.success(mode === "encode" ? "Encoded URL downloaded!" : "Decoded URL downloaded!");
    };

    return (
        <div className="min-h-screen">
            <div className="flex flex-col items-center justify-center max-w-[65vw] mx-auto gap-5">
                <h1 className="text-3xl md:text-6xl font-bold text-white text-center p-4">
                    URL Encoder/Decoder
                </h1>

                {/* Input Field */}
                <input
                    type="text"
                    placeholder="Enter URL here..."
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    className="border-b outline-none text-xl md:text-2xl text-white w-[350px] text-center bg-transparent"
                />

                {/* Buttons */}
                <div className="flex gap-3">
                    <button
                        onClick={encodeURL}
                        className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-xl px-5 py-2.5 text-center"
                    >
                        Encode
                    </button>

                    <button
                        onClick={decodeURL}
                        className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-xl px-5 py-2.5 text-center"
                    >
                        Decode
                    </button>
                </div>

                {/* Display encoded/decoded text */}
                {output && (
                    <div className="max-h-[50vh] overflow-y-auto text-white bg-[#232121] rounded-lg flex flex-col relative max-w-[80vw] p-3">
                        {/* Buttons section */}
                        <div className="sticky top-0 left-0 flex justify-around bg-[#3c3c3c] p-2">
                            {/* Copy Button */}
                            <button
                                onClick={() => {
                                    navigator.clipboard.writeText(output);
                                    toast.success("Text copied!");
                                }}
                                className="text-white hover:cursor-pointer flex gap-1 justify-center"
                            >
                                <img src="/copy.svg" alt="Copy" className="invert-100 w-5 h-5" />
                                <span>Copy Text</span>
                            </button>

                            {/* Download Button */}
                            <button
                                onClick={downloadTextFile}
                                className="text-white hover:cursor-pointer flex gap-1 justify-center"
                            >
                                <img src="/download.svg" alt="Download" className="w-5 h-5" />
                                <span>Download Text</span>
                            </button>
                        </div>

                        <span className="break-words">{output}</span>
                    </div>
                )}
            </div>

            <Footer title={"URL Encoder/Decoder"} />

            <ToastContainer
                position="top-right"
                autoClose={3000}
                hideProgressBar={false}
                newestOnTop
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="dark"
            />
        </div>
    );
};

export default UrlEncoderDecoder;
