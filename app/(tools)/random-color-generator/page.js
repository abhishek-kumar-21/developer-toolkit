import React from "react";
import RandomColorGenerator from "./RandomColorGenerator";

const Page = () => {
    return <RandomColorGenerator />;
};

export default Page;

export const metadata = {
    title: "Random Color Generator",
    description: "This is an easy-to-use random color generator website. Feel free to use it.",
};

// This is a server component to have the metadata
