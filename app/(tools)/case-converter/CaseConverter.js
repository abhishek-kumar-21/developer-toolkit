"use client"
import Footer from "@/components/Footer";
import Image from "next/image";
import { useState, useEffect } from "react";
import { ToastContainer, toast } from 'react-toastify';


export default function Home() {
    const [inputText, setInputText] = useState("") // store input number of words
    const [generatedText, setGeneratedText] = useState("") // store output text

    const btnStyleString = "relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 hover:cursor-pointer";


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
        <div className="min-h-screen pb-20">
            <div className="first">
                <div className="text-3xl md:text-6xl font-bold text-white text-center md:py-10 py-20 md:mb-10 mb-6">
                    Case Converter
                </div>

                <div className="input flex flex-col justify-end items-center gap-5">
                    {/* <input
                        type="text"
                        placeholder="Enter number of words"
                        className="border-b-2 outline-0 text-xl md:text-3xl text-white"
                        onChange={(e) => setInputText(e.target.value)}
                    /> */}

                    <textarea
                        placeholder="Enter text here"
                        className="border-2 border-gray-600 text-white p-2 w-[95%] max-w-3xl h-28 mx-auto"
                        value={inputText}
                        onChange={(e) => setInputText(e.target.value)}
                    >
                    </textarea>

                    <div className="btns grid-cols-4 md:w-[60vw] md:mx-auto mx-10 flex gap-2 flex-wrap">
                        <button type="button" className={`${btnStyleString}`} onClick={() => setGeneratedText(inputText.toUpperCase())}>
                            <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-transparent group-hover:dark:bg-transparent">
                                UPPER CASE
                            </span>
                        </button>

                        <button type="button" className={`${btnStyleString}`} onClick={() => setGeneratedText(inputText.toLowerCase())}>
                            <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-transparent group-hover:dark:bg-transparent">
                                lower case
                            </span>
                        </button>

                        <button type="button" className={`${btnStyleString}`} onClick={() => setGeneratedText(inputText.replace(/\b\w/g, (char) => char.toUpperCase()))}>
                            <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-transparent group-hover:dark:bg-transparent">
                                Title Case
                            </span>
                        </button>

                        <button type="button" className={`${btnStyleString}`} onClick={() => setGeneratedText(inputText.charAt(0).toUpperCase() + inputText.slice(1).toLowerCase())}>
                            <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-transparent group-hover:dark:bg-transparent">
                                Sentence case
                            </span>
                        </button>

                        <button type="button" className={`${btnStyleString}`} onClick={() => setGeneratedText(inputText.replace(/(?:^\w|[A-Z]|\b\w)/g, (word, index) =>
                            index === 0 ? word.toLowerCase() : word.toUpperCase()
                        ).replace(/\s+/g, ''))}>
                            <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-transparent group-hover:dark:bg-transparent">
                                camelCase
                            </span>
                        </button>

                        <button type="button" className={`${btnStyleString}`} onClick={() => setGeneratedText(inputText.replace(/(?:^\w|[A-Z]|\b\w)/g, (word) => word.toUpperCase()).replace(/\s+/g, ''))}>
                            <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-transparent group-hover:dark:bg-transparent">
                                PascalCase
                            </span>
                        </button>

                        <button type="button" className={`${btnStyleString}`} onClick={() => setGeneratedText(inputText.toLowerCase().replace(/\s+/g, '_'))}>
                            <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-transparent group-hover:dark:bg-transparent">
                                snake_case
                            </span>
                        </button>

                        <button type="button" className={`${btnStyleString}`} onClick={() => setGeneratedText(inputText.toLowerCase().replace(/\s+/g, '-'))}>
                            <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-transparent group-hover:dark:bg-transparent">
                                kebab-case
                            </span>
                        </button>

                        <button type="button" className={`${btnStyleString}`} onClick={() => setGeneratedText(inputText.replace(/\b\w/g, (char) => char.toUpperCase()).replace(/\s+/g, '-'))}>
                            <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-transparent group-hover:dark:bg-transparent">
                                Train-Case
                            </span>
                        </button>

                        <button type="button" className={`${btnStyleString}`} onClick={() => setGeneratedText(inputText.split('').map((char, i) => i % 2 === 0 ? char.toUpperCase() : char.toLowerCase()).join(''))}>
                            <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-transparent group-hover:dark:bg-transparent">
                                aLtErNaTiNg cAsE
                            </span>
                        </button>

                        <button type="button" className={`${btnStyleString}`} onClick={() => setInputText("")}>
                            <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-transparent group-hover:dark:bg-transparent">
                                Clear
                            </span>
                        </button>
                    </div>
                </div>
            </div>


            <div className="second w-[80vw] mx-auto mt-5">
                {
                    generatedText &&
                    <div className="text-white bg-[#232121] rounded flex flex-col relative max-w-[80vw] overflow-x-auto">

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
            
            <Footer title={"Case Converter"}/>



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
