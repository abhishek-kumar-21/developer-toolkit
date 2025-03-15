import React from 'react'
import RandomColorGenerator from './RandomColorGenerator.js';

const page = () => {
    return (
        <RandomColorGenerator />
    )
}

export default page

export const metadata = {
    title: 'Random Color Generator',
    description: "This is a easy to use random color generator website, feel free to use.",
};

// this is made as server component to have the metadata
