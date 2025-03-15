import ScrollToTop from '@/components/ScrollToTop';
import LoremIpsum from './LoremIpsum';
import React from 'react'
import Image from 'next/image';

const page = () => {
    return (
        <div className='bg-black relative min-h-screen'>
            <div className="relative z-10">
                <LoremIpsum />
            </div>

            {/* Handling background Image */}
            <div className="fixed inset-0">
                <Image
                    src="/lorem-ipsum-generator.jpg"
                    alt=""
                    layout="fill"
                    objectFit="cover"
                    className="opacity-15 max-h-screen"
                />
            </div>

            <ScrollToTop />
        </div>
    )
}

export default page


export const metadata = {
    title: 'Lorem Ipsum Generator',
    description: "This is a easy to use lorem ipsum generator website, feel free to use.",
};

// this is made as server component to have the metadata
