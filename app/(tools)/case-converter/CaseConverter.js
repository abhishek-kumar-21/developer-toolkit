"use client";
import Footer from "@/components/Footer";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import Image from "next/image";

export default function CaseConverter() {
    const [inputText, setInputText] = useState("");
    const [generatedText, setGeneratedText] = useState("");

    const btnStyleString =
        "relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 hover:cursor-pointer";

    // Function to download the text as a .txt file
    const downloadTextFile = () => {
        const blob = new Blob([generatedText], { type: "text/plain" });
        const link = document.createElement("a");
        link.href = URL.createObjectURL(blob);
        link.download = "converted-text.txt";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        toast("Text downloaded!");
    };

    return (
        <div className="min-h-screen pb-20">
            <div className="text-3xl md:text-6xl font-bold text-white text-center md:py-10 py-20 md:mb-10 mb-6">
                Case Converter
            </div>

            <div className="flex flex-col items-center gap-5">
                {/* Textarea Input */}
                <textarea
                    placeholder="Enter text here..."
                    className="border-2 border-gray-600 text-white p-2 w-[95%] max-w-3xl h-28 mx-auto"
                    value={inputText}
                    onChange={(e) => setInputText(e.target.value)}
                />

                {/* Buttons */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-2 w-full max-w-4xl px-4">
                    <button className={btnStyleString} onClick={() => setGeneratedText(inputText.toUpperCase())}>
                        UPPER CASE
                    </button>
                    <button className={btnStyleString} onClick={() => setGeneratedText(inputText.toLowerCase())}>
                        lower case
                    </button>
                    <button className={btnStyleString} onClick={() => setGeneratedText(inputText.replace(/\b\w/g, (char) => char.toUpperCase()))}>
                        Title Case
                    </button>
                    <button className={btnStyleString} onClick={() => setGeneratedText(inputText.replace(/(^\s*\w|[.!?]\s*\w)/g, (char) => char.toUpperCase()))}>
                        Sentence case
                    </button>
                    <button className={btnStyleString} onClick={() => setGeneratedText(inputText.replace(/(?:^\w|[A-Z]|\b\w)/g, (word, index) =>
                        index === 0 ? word.toLowerCase() : word.toUpperCase()).replace(/\s+/g, ""))}>
                        camelCase
                    </button>
                    <button className={btnStyleString} onClick={() => setGeneratedText(inputText.replace(/\b\w/g, (char) => char.toUpperCase()).replace(/\s+/g, ""))}>
                        PascalCase
                    </button>
                    <button className={btnStyleString} onClick={() => setGeneratedText(inputText.toLowerCase().replace(/\s+/g, "_"))}>
                        snake_case
                    </button>
                    <button className={btnStyleString} onClick={() => setGeneratedText(inputText.toLowerCase().replace(/\s+/g, "-"))}>
                        kebab-case
                    </button>
                    <button className={btnStyleString} onClick={() => setGeneratedText(inputText.replace(/\b\w/g, (char) => char.toUpperCase()).replace(/\s+/g, "-"))}>
                        Train-Case
                    </button>
                    <button className={btnStyleString} onClick={() => setGeneratedText(inputText.split("").map((char, i) => (i % 2 === 0 ? char.toUpperCase() : char.toLowerCase())).join(""))}>
                        aLtErNaTiNg cAsE
                    </button>
                    <button className={btnStyleString} onClick={() => setInputText("")}>
                        Clear
                    </button>
                </div>
            </div>

            {/* Generated Text Display */}
            {generatedText && (
                <div className="w-[80vw] mx-auto mt-5 text-white bg-[#232121] rounded flex flex-col overflow-x-auto">
                    {/* Buttons Section */}
                    <div className="sticky top-0 left-0 flex justify-between p-2 bg-[#3c3c3c]">
                        {/* Copy Button */}
                        <button
                            onClick={() => {
                                navigator.clipboard.writeText(generatedText);
                                toast("Text copied!");
                            }}
                            className="text-white hover:cursor-pointer flex gap-1 items-center"
                        >
                            <Image src="/copy.svg" alt="Copy" width={24} height={24} className="invert-100" />
                            <span>Copy Text</span>
                        </button>

                        {/* Download Button */}
                        <button
                            onClick={downloadTextFile}
                            className="text-white hover:cursor-pointer flex gap-1 items-center"
                        >
                            <Image src="/download.svg" alt="Download" width={24} height={24} />
                            <span>Download Text</span>
                        </button>
                    </div>

                    <span className="p-3 break-words">{generatedText}</span>
                </div>
            )}

            <Footer title={"Case Converter"} />

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
}
