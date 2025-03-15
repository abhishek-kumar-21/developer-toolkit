"use client"
import Footer from "@/components/Footer";
import Image from "next/image";
import { useState, useEffect } from "react";
import { ToastContainer, toast } from 'react-toastify';


export default function Home() {
    const [wordCount, setWordCount] = useState(0) // store input number of words
    const [generatedText, setGeneratedText] = useState("") // store output text

    const loremWords = [
        "lorem", "ipsum", "dolor", "sit", "amet", "consectetur",
        "adipiscing", "elit", "sed", "do", "eiusmod", "tempor",
        "incididunt", "ut", "labore", "et", "dolore", "magna", "aliqua",
        "ut", "enim", "ad", "minim", "veniam", "quis", "nostrud",
        "exercitation", "ullamco", "laboris", "nisi", "ut", "aliquip",
        "ex", "ea", "commodo", "consequat"
    ];


    // function to generate text with random selection of words from loremWords
    const generateLoremIpsum = () => {
        // Parse the wordCount to an integer
        let count = parseInt(wordCount, 10);

        // Check if the parsed count is NaN or less than or equal to 0
        if (isNaN(count) || count <= 0) {
            toast("Please enter a valid positive number!");
            return;
        }

        // Limit the count to a maximum of 100,000
        count = Math.min(100000, count);

        let loremText = [];

        for (let i = 0; i < count; i++) {
            // Select a random word from the array
            const randomIndex = Math.floor(Math.random() * loremWords.length);
            loremText.push(loremWords[randomIndex]);
        }

        let text = loremText.join(" "); // Convert array to a string
        setGeneratedText(text);

        toast("Text generated!")
    }


    // function to download text as .txt file
    const downloadTextFile = () => {
        // Create a blob conataing the text
        const blob = new Blob([generatedText], { type: "text/plain" });

        // Create a temporary anchor element
        const link = document.createElement("a");
        link.href = URL.createObjectURL(blob);
        link.download = "generated-text.txt"; // Filename

        // Append the link to the document, trigger click, and remove
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);

        toast("Text downloaded!")
    }


    return (
        <div>
            <div className="first">
                <div className="text-3xl md:text-6xl font-bold text-white text-center md:py-10 py-20 md:mb-10 mb-6">
                    Lorem Ipsum Generator
                </div>

                <div className="input flex flex-col justify-end items-center gap-5">
                    <input
                        type="text"
                        placeholder="Enter number of words"
                        className="border-b-2 outline-0 text-xl md:text-3xl text-white text-center"
                        onChange={(e) => setWordCount(e.target.value)}
                    />

                    <button onClick={generateLoremIpsum} type="button" className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-xl px-5 py-2.5 text-center me-2 mb-2 hover:cursor-pointer">Generate Text</button>
                </div>
            </div>


            <div className="second w-[80vw] mx-[10vw] mt-5 pb-20">
                {
                    generatedText &&
                    <div className="text-white bg-[#232121] rounded flex flex-col relative">

                        {/* Buttons section */}
                        <div className="btn-section sticky top-0 left-0 flex justify-around bg-[#3c3c3c]">
                            {/* Copy Button */}
                            <button
                                onClick={() => {
                                    navigator.clipboard.writeText(generatedText)
                                    toast("Text copied!")
                                }
                                }
                                className=" text-white hover:cursor-pointer flex gap-1 justify-center p-2">
                                <img src="copy.svg" alt="" className="invert-100" />
                                <span>Copy Text</span>
                            </button>

                            {/* Download Button */}
                            <button
                                onClick={() => downloadTextFile()}
                                className=" text-white hover:cursor-pointer flex gap-1 justify-center p-2">
                                <img src="download.svg" alt="" />
                                <span>Download Text</span>
                            </button>
                        </div>

                        <span className="p-3">{generatedText}</span>
                    </div>
                }
            </div>

            <Footer title={"Lorem Ipsum Generator"}/>

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
}
