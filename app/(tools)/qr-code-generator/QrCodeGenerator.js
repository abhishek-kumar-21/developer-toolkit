"use client"
import React, { useRef, useState, useEffect } from 'react';
import { QRCodeCanvas } from 'qrcode.react';
import Footer from '@/components/Footer';

const QrCodeGenerator = () => {
    const [input, setInput] = useState(""); // QR Content
    const [color, setColor] = useState("#000000"); // Default QR color
    const qrRef = useRef(null);

    // Function to download QR code as an image
    const downloadQRCode = () => {
        const canvas = qrRef.current?.querySelector("canvas");
        if (!canvas) return;

        canvas.toBlob((blob) => {
            const link = document.createElement("a");
            link.href = URL.createObjectURL(blob);
            link.download = "qr-code.png";
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        });
    };

    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-black text-white">
            <div className="w-full max-w-lg p-5 flex flex-col items-center gap-5">
                <h1 className="text-3xl md:text-5xl font-bold text-center">QR Code Generator</h1>

                {/* Input Field */}
                <input
                    type="text"
                    placeholder="Enter text or URL"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    className="border-b-2 border-gray-500 bg-transparent text-xl md:text-2xl w-full text-center focus:border-white outline-none p-2 transition-all duration-200"
                />

                {/* Pick a color */}
                <label className="flex items-center gap-3 text-lg">
                    <span>Pick Color:</span>
                    <input
                        type="color"
                        value={color}
                        onChange={(e) => setColor(e.target.value)}
                        className="w-10 h-10 rounded-lg border-none cursor-pointer"
                    />
                </label>

                {/* QR Code Display */}
                {input && (
                    <div ref={qrRef} className="bg-white p-4 rounded-lg shadow-md">
                        <QRCodeCanvas value={input} size={200} fgColor={color} />
                    </div>
                )}

                {/* Download Button */}
                {input && (
                    <button
                        onClick={downloadQRCode}
                        className="bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-lg px-6 py-3 transition-all duration-200"
                    >
                        Download QR Code
                    </button>
                )}
            </div>

            <Footer title="QR Code Generator" />
        </div>
    );
};

export default QrCodeGenerator;
