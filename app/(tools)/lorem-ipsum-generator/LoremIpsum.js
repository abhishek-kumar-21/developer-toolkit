"use client"
import Footer from "@/components/Footer";
import Image from "next/image";
import { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';

export default function Home() {
    const [wordCount, setWordCount] = useState("") // store input number of words
    const [generatedText, setGeneratedText] = useState("") // store output text

    const loremWords = [
        "lorem", "ipsum", "dolor", "sit", "amet", "consectetur",
        "adipiscing", "elit", "sed", "do", "eiusmod", "tempor",
        "incididunt", "ut", "labore", "et", "dolore", "magna", "aliqua",
        "ut", "enim", "ad", "minim", "veniam", "quis", "nostrud",
        "exercitation", "ullamco", "laboris", "nisi", "ut", "aliquip",
        "ex", "ea", "commodo", "consequat"
    ];

    // Function to generate lorem ipsum text
    const generateLoremIpsum = () => {
        let count = parseInt(wordCount, 10);

        if (isNaN(count) || count <= 0) {
            toast.error("Please enter a valid positive number!");
            return;
        }

        count = Math.min(100000, count); // Limit max words

        const loremText = Array.from({ length: count }, () =>
            loremWords[Math.floor(Math.random() * loremWords.length)]
        ).join(" ");

        setGeneratedText(loremText);
        toast.success("Text generated!");
    };

    // Function to download text as .txt file
    const downloadTextFile = () => {
        const blob = new Blob([generatedText], { type: "text/plain" });
        const link = document.createElement("a");
        link.href = URL.createObjectURL(blob);
        link.download = "generated-text.txt";

        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);

        toast.success("Text downloaded!");
    };

    return (
        <div>
            <div className="first">
                <div className="text-3xl md:text-6xl font-bold text-white text-center md:py-10 py-20 md:mb-10 mb-6">
                    Lorem Ipsum Generator
                </div>

                <div className="input flex flex-col justify-end items-center gap-5">
                    <input
                        type="number"
                        min="1"
                        placeholder="Enter number of words"
                        className="border-b-2 outline-0 text-xl md:text-3xl text-white text-center bg-transparent"
                        value={wordCount}
                        onChange={(e) => setWordCount(e.target.value)}
                    />

                    <button
                        onClick={generateLoremIpsum}
                        type="button"
                        className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-xl px-5 py-2.5 text-center me-2 mb-2 hover:cursor-pointer"
                    >
                        Generate Text
                    </button>
                </div>
            </div>

            <div className="second w-[80vw] mx-[10vw] mt-5 pb-20">
                {generatedText && (
                    <div className="text-white bg-[#232121] rounded flex flex-col relative">
                        {/* Buttons Section */}
                        <div className="btn-section sticky top-0 left-0 flex justify-around bg-[#3c3c3c]">
                            {/* Copy Button */}
                            <button
                                onClick={() => {
                                    navigator.clipboard.writeText(generatedText);
                                    toast.success("Text copied!");
                                }}
                                className="text-white hover:cursor-pointer flex gap-1 justify-center p-2"
                            >
                                <Image
                                    src="/copy.svg"
                                    alt="Copy"
                                    width={20}
                                    height={20}
                                    className="invert"
                                />
                                <span>Copy Text</span>
                            </button>

                            {/* Download Button */}
                            <button
                                onClick={downloadTextFile}
                                className="text-white hover:cursor-pointer flex gap-1 justify-center p-2"
                            >
                                <Image
                                    src="/download.svg"
                                    alt="Download"
                                    width={20}
                                    height={20}
                                />
                                <span>Download Text</span>
                            </button>
                        </div>

                        <span className="p-3">{generatedText}</span>
                    </div>
                )}
            </div>

            <Footer title={"Lorem Ipsum Generator"} />

            <ToastContainer
                position="top-right"
                autoClose={3000}
                hideProgressBar={false}
                newestOnTop={true}
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
