"use client"
import { useState, useEffect } from "react";

const ScrollToTop = () => {
    const [isVisible, setIsVisible] = useState(false);

    // Show button when page is scrolled down
    const toggleVisibility = () => {
        if (window.pageYOffset > 20) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    // Scroll to top of the page
    const customScrollToTop = () => {
        const targetPosition = 0;
        const startPosition = window.pageYOffset;
        const distance = startPosition - targetPosition;
        const duration = 300; // Duration in milliseconds
        let start = null;

        const easeInOutQuad = (time, from, distance, duration) => {
            time /= duration / 2;
            if (time < 1) return (distance / 2) * time * time + from;
            time--;
            return (-distance / 2) * (time * (time - 2) - 1) + from;
        };

        const animation = currentTime => {
            if (start === null) start = currentTime;
            const timeElapsed = currentTime - start;
            const run = easeInOutQuad(timeElapsed, startPosition, -distance, duration);
            window.scrollTo(0, run);
            if (timeElapsed < duration) requestAnimationFrame(animation);
        };

        requestAnimationFrame(animation);
    };

    // Scroll to top of the page
    // const scrollToTop = () => {
    //     window.scrollTo({
    //         top: 0,
    //         behavior: "auto", // Instant scroll
    //     });
    // };

    useEffect(() => {
        window.addEventListener("scroll", toggleVisibility);
        return () => window.removeEventListener("scroll", toggleVisibility);
    }, []);


    return (
        isVisible && (
            <button
                onClick={customScrollToTop}
                className="fixed bottom-17 right-4 bg-blue-600 text-white font-bold rounded-[50%] p-2 cursor-pointer shadow-2xs z-1000"
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="26"
                    height="26"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                >
                    <path
                        fillRule="evenodd"
                        d="M8 12a.5.5 0 0 0 .5-.5V4.707l3.147 3.147a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L7.5 4.707V11.5A.5.5 0 0 0 8 12z"
                    />
                </svg>
            </button>
        )
    );
};

export default ScrollToTop;
