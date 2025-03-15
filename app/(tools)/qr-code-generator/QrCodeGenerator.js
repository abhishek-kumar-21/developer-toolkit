"use client"
import React, { useRef, useState } from 'react'
import { QRCodeCanvas } from 'qrcode.react';
import Footer from '@/components/Footer';

const QrCodeGenerator = () => {
    const [input, setInput] = useState("") // input for QR Content
    const [color, setColor] = useState("#000000"); // Default QR color
    const qrRef = useRef(null)

    // Function to download QR code as an image
    const downloadQRCode = () => {
        const canvas = qrRef.current.querySelector("canvas");
        if (canvas) {
            const url = canvas.toDataURL("image/png"); // Convert to image
            const link = document.createElement("a");
            link.href = url;
            link.download = "qr-code.png";
            link.click();
        }
    };


    return (
        <div className='min-h-screen'>
            <div className='flex flex-col items-center justify-center max-w-[65vw] mx-auto gap-5'>
                <h1 className="text-3xl md:text-6xl font-bold text-white text-center p-4">QR Code Generator</h1>

                {/* Input Field */}
                <input
                    type="text"
                    placeholder='Enter text or URL'
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    className="border-b-1 outline-0 text-xl md:text-2xl text-white w-[350px] text-center"
                />

                {/* Pick a color */}
                <label className="flex items-center gap-2 mb-4 text-white text-xl">
                    <span className='text-white'>Pick Color:</span>
                    <input
                        type="color"
                        value={color}
                        onChange={(e) => setColor(e.target.value)}
                        className="w-10 h-10 rounded-lg hover:cursor-pointer"
                    />
                </label>

                {/* QR Code Display */}
                {input && (
                    <div ref={qrRef} className="bg-white p-4 rounded-lg shadow-md text-center">
                        <QRCodeCanvas value={input} size={200} fgColor={color} />
                    </div>
                )}

                {/* Download Button */}
                {input && (
                    <button
                        onClick={downloadQRCode}
                        className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-xl px-5 py-2.5 text-center me-2 mb-2 hover:cursor-pointer"
                    >
                        Download QR Code
                    </button>
                )}
            </div>

            <Footer title={"QR Code Generator"}/>
        </div>
    )
}

export default QrCodeGenerator
