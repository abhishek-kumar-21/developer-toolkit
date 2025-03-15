import CaseConverter from './CaseConverter';
import React from 'react'
import Image from 'next/image';
import ScrollToTop from '@/components/ScrollToTop';

const page = () => {
    return (
        <div className='bg-black relative'>
            <div className="relative z-10">
                <CaseConverter />
            </div>

            {/* Handling background Image */}
            <div className="fixed inset-0">
                <Image
                    src="/case-converter.webp"
                    alt=""
                    layout="fill"
                    objectFit="cover"
                    className="opacity-22 max-h-screen"
                />
            </div>

            <ScrollToTop/>
        </div>
    )
}

export default page


export const metadata = {
    title: 'Case Converter',
    description: "This is a easy to use case converter tool, feel free to use.",
};

// this is made as server component to have the metadata
