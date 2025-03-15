"use client"
import Footer from '@/components/Footer';
import React, { useState, useEffect } from 'react'
import { ToastContainer, toast } from 'react-toastify';

const RandomColorGenerator = () => {
  const [color, setColor] = useState("");

  useEffect(() => {
    // Generate random color
    const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0');
    setColor(randomColor);
  }, []);


  return (
    <div className="w-[100vw] h-screen" style={{ backgroundColor: color }}>
      <div>
        <h1 className='text-3xl md:text-6xl font-bold text-white text-center p-4'>Random Color Generator</h1>
        <p className='text-white text-xl text-center'>Refresh the page to get random color</p>
        <p className='text-white text-xl text-center'>Click on color code to copy</p>
      </div>

      <div className='text-6xl text-white w-[100vw] h-[76vh] flex justify-center items-center'>
        <span className='p-2 cursor-pointer' onClick={() => {
          navigator.clipboard.writeText(color)
          toast("color copied!")
        }}>{color}</span>
      </div>

      <Footer title={"Random Color Generator"}/>

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

export default RandomColorGenerator
