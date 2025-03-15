import React from 'react'
import Base64EncoderDecoder from './Base64EncoderDecoder';
import Image from 'next/image';
import ScrollToTop from '@/components/ScrollToTop';

const page = () => {
    return (
        <div className='bg-black relative'>
            <div className="relative z-10">
                <Base64EncoderDecoder />
            </div>

            {/* Handling background Image */}
            <div className="fixed inset-0">
                <Image
                    src="/base64-encoder-decoder.webp"
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
    title: 'Base64 Encoder Decoder',
    description: "This is a easy to use Base64 encoding and decoding website, feel free to use.",
};

// this is made as server component to have the metadata
