import React from 'react'

const About = () => {
    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-800 to-purple-900 text-white flex items-center justify-center p-6 pb-20">
            <div className="max-w-4xl text-center space-y-6 shadow-lg rounded-lg p-8 bg-white/10 ">
                <h1 className="text-5xl md:text-7xl font-extrabold">About</h1>
                <p className="text-lg md:text-xl leading-8">
                    Welcome to <span className="font-bold">Developer Toolkit</span> – a collection of useful tools for developers.
                </p>
                <p className="text-lg md:text-xl leading-8">
                    I’m <span className="font-bold">Abhishek Kumar</span>, a CSE student (Batch 2026) with a passion for coding and design.
                </p>
                <p className="text-lg md:text-xl leading-8">
                I created this platform to help developers work more efficiently with easy-to-use and visually appealing tools.
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
