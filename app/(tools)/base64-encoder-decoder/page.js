import React from 'react';
import Base64EncoderDecoder from './Base64EncoderDecoder';
import Image from 'next/image';
import ScrollToTop from '@/components/ScrollToTop';

export const metadata = {
    title: 'Base64 Encoder Decoder',
    description: "This is an easy-to-use Base64 encoding and decoding website. Feel free to use it.",
};

const Base64Page = () => {
    return (
        <div className="bg-black relative min-h-screen">
            <div className="relative z-10">
                <Base64EncoderDecoder />
            </div>

            {/* Background Image */}
            <div className="fixed inset-0">
                <Image
                    src="/base64-encoder-decoder.webp"
                    alt="Base64 Encoder Background"
                    fill
                    className="object-cover opacity-20 max-h-screen"
                    priority
                />
            </div>

            <ScrollToTop />
        </div>
    );
};

export default Base64Page;
