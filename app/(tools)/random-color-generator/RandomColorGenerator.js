"use client"
import React, { useState } from "react";
import Footer from "@/components/Footer";
import { ToastContainer, toast } from "react-toastify";

const RandomColorGenerator = () => {
  const [color, setColor] = useState(generateRandomColor());
  const [copied, setCopied] = useState(false);

  // Function to generate a random color
  function generateRandomColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, "0")}`;
  }

  // Handle copying color to clipboard
  const handleCopyColor = () => {
    navigator.clipboard.writeText(color);
    setCopied(true);
    toast("Color copied!");

    // Reset copied state after 1.5s
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <div className="w-full h-screen flex flex-col items-center justify-center" style={{ backgroundColor: color }}>
      <h1 className="text-3xl md:text-6xl font-bold text-white text-center p-4">
        Random Color Generator
      </h1>
      <p className="text-white text-lg md:text-xl text-center">
        Click the color code to copy
      </p>

      {/* Display Random Color */}
      <div className="flex flex-col items-center justify-center mt-5">
        <span
          className="text-4xl md:text-6xl font-mono bg-black/40 px-6 py-2 rounded-lg cursor-pointer transition-all duration-300 hover:scale-105"
          onClick={handleCopyColor}
        >
          {color}
        </span>

        {copied && <p className="text-white mt-2">Copied!</p>}

        {/* Generate New Color Button */}
        <button
          className="mt-6 text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-lg px-5 py-2.5"
          onClick={() => setColor(generateRandomColor())}
        >
          Generate New Color
        </button>
      </div>

      <Footer title={"Random Color Generator"} />

      <ToastContainer position="top-right" autoClose={3000} hideProgressBar theme="dark" />
    </div>
  );
};

export default RandomColorGenerator;
