"use client";
import React, { useState } from "react";
import Footer from "@/components/Footer";
import Image from "next/image";
import { ToastContainer, toast } from "react-toastify";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/esm/styles/prism";

const JsonFormatter = () => {
    const [input, setInput] = useState("");
    const [formattedJson, setFormattedJson] = useState("");
    const [error, setError] = useState("");

    // Function to handle JSON formatting
    const handleFormat = () => {
        try {
            const parsedJson = JSON.parse(input);
            const prettyJson = JSON.stringify(parsedJson, null, 2);
            setFormattedJson(prettyJson);
            setError("");
            toast("JSON formatted!");
        } catch (e) {
            setError("Invalid JSON: " + e.message);
            setFormattedJson("");
            toast("Invalid input!");
        }
    };

    // Function to download text as .json file
    const downloadTextFile = () => {
        const blob = new Blob([formattedJson], { type: "application/json" });
        const link = document.createElement("a");
        link.href = URL.createObjectURL(blob);
        link.download = "formatted-data.json";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        toast("JSON file downloaded!");
    };

    return (
        <div>
            <div className="first">
                <div className="text-3xl md:text-6xl font-bold text-white text-center md:py-10 py-20 md:mb-10 mb-6">
                    JSON Formatter
                </div>

                <div className="input flex flex-col justify-end items-center gap-5">
                    <textarea
                        placeholder="Enter JSON here..."
                        className="border-2 border-gray-600 text-white p-2 w-[95%] max-w-3xl h-28 mx-auto bg-transparent rounded-lg"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                    />

                    <button
                        onClick={handleFormat}
                        type="button"
                        className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-xl px-5 py-2.5 text-center mb-2 hover:cursor-pointer"
                    >
                        Format JSON
                    </button>
                </div>
            </div>

            <div className="second w-[80vw] mx-auto mt-5 pb-20">
                {error && (
                    <p className="bg-red-500 p-1 w-full text-center">{error}</p>
                )}

                {formattedJson && (
                    <div className="text-white bg-[#232121] rounded flex flex-col relative max-w-[80vw] overflow-x-auto">
                        {/* Buttons section */}
                        <div className="btn-section sticky top-0 flex justify-around bg-[#3c3c3c] p-2">
                            {/* Copy Button */}
                            <button
                                onClick={() => {
                                    navigator.clipboard.writeText(formattedJson);
                                    toast("JSON copied!");
                                }}
                                className="text-white hover:cursor-pointer flex gap-1 justify-center items-center"
                            >
                                <Image
                                    src="/copy.svg"
                                    alt="Copy JSON"
                                    width={20}
                                    height={20}
                                    className="invert"
                                />
                                <span>Copy JSON</span>
                            </button>

                            {/* Download Button */}
                            <button
                                onClick={downloadTextFile}
                                className="text-white hover:cursor-pointer flex gap-1 justify-center items-center"
                            >
                                <Image
                                    src="/download.svg"
                                    alt="Download JSON"
                                    width={20}
                                    height={20}
                                />
                                <span>Download JSON</span>
                            </button>
                        </div>

                        <SyntaxHighlighter language="json" style={dracula}>
                            {formattedJson}
                        </SyntaxHighlighter>
                    </div>
                )}
            </div>

            <Footer title={"JSON Formatter"} />

            <ToastContainer
                position="top-right"
                autoClose={3000}
                hideProgressBar={false}
                newestOnTop={true}
                closeOnClick={true}
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="dark"
            />
        </div>
    );
};

export default JsonFormatter;
