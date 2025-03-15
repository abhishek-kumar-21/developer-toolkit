import React from 'react'

const About = () => {
    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-800 to-purple-900 text-white flex items-center justify-center p-6">
            <div className="max-w-4xl text-center space-y-6 shadow-lg rounded-lg p-8 bg-white/10">
                <h1 className="text-5xl md:text-7xl font-extrabold">About</h1>
                <p className="text-lg md:text-xl leading-8">
                    Welcome to <span className="font-bold">DevTools Dashboard</span> – your one-stop destination for a curated suite of developer tools.
                </p>
                <p className="text-lg md:text-xl leading-8">
                    I’m <span className="font-bold">Abhishek Kumar</span>, a passionate software developer from the CSE batch of 2026. My mission is to empower developers by providing a comprehensive, easy-to-use collection of tools that streamline workflows and enhance productivity.
                </p>
                <p className="text-lg md:text-xl leading-8">
                    With a keen eye for design and a commitment to clean, efficient code, I built this platform to be both functional and visually stunning. Every tool has been carefully crafted to meet the needs of modern developers.
                </p>
                <p className="text-xl font-semibold">
                    – Abhishek Kumar, CSE &apos;26
                </p>
            </div>
        </div>
    );
}

export default About

export const metadata = {
    title: 'About - Developer Toolkit',
    description: "Learn more about the Developer Toolkit and the vision behind its creation.",
};
