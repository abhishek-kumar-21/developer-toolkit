"use client";

import Footer from '@/components/Footer';
import Image from 'next/image';
import React, { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';

// Import icons for Next.js compatibility
import CopyIcon from '@/public/copy.svg';
import DownloadIcon from '@/public/download.svg';

const Base64EncoderDecoder = () => {
    const [input, setInput] = useState("");
    const [output, setOutput] = useState("");
    const [state, setState] = useState("generated-text");

    const encodeBase64 = () => {
        if (!input.trim()) {
            toast.error("⚠️ Please enter text to encode.");
            return;
        }

        try {
            setOutput(btoa(input));
            setState("encode");
            toast.success("✅ Text encoded successfully!");
        } catch (e) {
            toast.error("❌ Invalid input for encoding.");
        }
    };

    const decodeBase64 = () => {
        if (!input.trim()) {
            toast.error("⚠️ Please enter Base64 text to decode.");
            return;
        }

        try {
            setOutput(atob(input));
            setState("decode");
            toast.success("✅ Text decoded successfully!");
        } catch (e) {
            toast.error("❌ Invalid Base64 input for decoding.");
        }
    };

    // Function to download text as .txt file
    const downloadTextFile = () => {
        const blob = new Blob([output], { type: "text/plain" });
        const link = document.createElement("a");
        link.href = URL.createObjectURL(blob);
        link.download = state === "encode" ? "encoded-base64.txt" : "decoded-base64.txt";

        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);

        toast.success(`📥 ${state === "encode" ? "Encoded" : "Decoded"} text downloaded!`);
    };

    return (
        <div className="min-h-screen pb-20 flex flex-col items-center justify-center">
            <div className="max-w-[65vw] mx-auto gap-5">
                <h1 className="text-3xl md:text-6xl font-bold text-white text-center p-4">
                    Base64 Encoder/Decoder
                </h1>

                {/* Input Field */}
                <textarea
                    placeholder="Enter text here..."
                    className="border-2 border-gray-600 text-white p-2 w-[95%] max-w-3xl h-28 mx-auto bg-transparent rounded-lg"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                />

                {/* Buttons */}
                <div className="btn-section flex gap-2 justify-center">
                    <button
                        onClick={encodeBase64}
                        className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-xl px-5 py-2.5"
                    >
                        Encode
                    </button>

                    <button
                        onClick={decodeBase64}
                        className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-xl px-5 py-2.5"
                    >
                        Decode
                    </button>
                </div>

                {/* Output Display */}
                {output && (
                    <div className="text-white bg-[#232121] rounded flex flex-col relative max-w-[80vw] overflow-x-auto p-3">
                        {/* Buttons Section */}
                        <div className="btn-section flex justify-around bg-[#3c3c3c] p-2">
                            {/* Copy Button */}
                            <button
                                onClick={() => {
                                    navigator.clipboard.writeText(output);
                                    toast.success("📋 Text copied!");
                                }}
                                className="text-white flex gap-1 items-center hover:cursor-pointer"
                            >
                                <Image src={CopyIcon} alt="Copy" width={20} height={20} className="invert" />
                                <span>Copy Text</span>
                            </button>

                            {/* Download Button */}
                            <button
                                onClick={downloadTextFile}
                                className="text-white flex gap-1 items-center hover:cursor-pointer"
                            >
                                <Image src={DownloadIcon} alt="Download" width={20} height={20} />
                                <span>Download Text</span>
                            </button>
                        </div>

                        <span className="p-3">{output}</span>
                    </div>
                )}
            </div>

            <Footer title="Base64 Encoder Decoder" />

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

export default Base64EncoderDecoder;
