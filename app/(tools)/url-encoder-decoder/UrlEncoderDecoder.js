"use client"
import Footer from '@/components/Footer'
import React, { useState } from 'react'
import { toast, ToastContainer } from 'react-toastify'

const UrlEncoderDecoder = () => {
    const [input, setInput] = useState("")
    const [output, setOutput] = useState("")
    const [state, setState] = useState("generated-text")

    const encodeURL = () => {
        try {
            setOutput(encodeURIComponent(input))
            setState("encode")
            toast("URL encoded")
        } catch (e) {
            toast("Invalid input for encoding.")
        }
    }

    const decodeURL = () => {
        try {
            setOutput(decodeURIComponent(input))
            setState("decode")
            toast("URL decoded")
        } catch (e) {
            toast("Invalid input for decoding.")
        }
    }

    // function to download text as .txt file
    const downloadTextFile = () => {
        // Create a blob conataing the text
        const blob = new Blob([output], { type: "text/plain" });

        // Create a temporary anchor element
        const link = document.createElement("a");
        link.href = URL.createObjectURL(blob);
        link.download = state == "encode" ? "encoded-url.txt" : "decoded-url.txt"; // Filename

        // Append the link to the document, trigger click, and remove
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);

        state == "encode" ? toast("Encoded URL downloaded!") : toast("Decoded URL downloaded!")
    }

    return (
        <div className='min-h-screen'>
            <div className='flex flex-col items-center justify-center max-w-[65vw] mx-auto gap-5'>
                <h1 className="text-3xl md:text-6xl font-bold text-white text-center p-4">URL Encoder/Decoder</h1>

                {/* Input Field */}
                <input
                    type="text"
                    placeholder='Enter URL here...'
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    className="border-b-1 outline-0 text-xl md:text-2xl text-white w-[350px] text-center"
                />

                {/* Buttons */}
                <div className="btn-section flex gap-2 justify-center">
                    <button
                        onClick={encodeURL}
                        className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-xl px-5 py-2.5 text-center me-2 mb-2 hover:cursor-pointer"
                    >
                        Encode
                    </button>

                    <button
                        onClick={decodeURL}
                        className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-xl px-5 py-2.5 text-center me-2 mb-2 hover:cursor-pointer"
                    >
                        Decode
                    </button>
                </div>


                {/* Display encode/decoded text here */}
                {
                    output &&
                    <div className="md:max-h-[53vh] max-h-[62vh] overflow-y-auto text-white bg-[#232121] rounded flex flex-col relative max-w-[80vw] overflow-x-auto">

                        {/* Buttons section */}
                        <div className="btn-section sticky top-0 left-0 flex justify-around bg-[#3c3c3c]">
                            {/* Copy Button */}
                            <button
                                onClick={() => {
                                    navigator.clipboard.writeText(output)
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

                        <span className="p-3">{output}</span>
                    </div>
                }
            </div>

            <Footer title={"URL Encoder Decoder"}/>


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
    )
}

export default UrlEncoderDecoder
