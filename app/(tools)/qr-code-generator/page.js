import React from 'react'
import QrCodeGenerator from './QrCodeGenerator'
import ScrollToTop from '@/components/ScrollToTop'
import Image from 'next/image'

const page = () => {
    return (
        <div className='bg-black relative min-h-screen'>
            <div className="relative z-10">
            <QrCodeGenerator />
            </div>

            {/* Handling background Image */}
            <div className="fixed inset-0">
                <Image
                    src="/qr-code-generator.jpg"
                    alt=""
                    layout="fill"
                    objectFit="cover"
                    className="opacity-10 max-h-screen"
                />
            </div>

            <ScrollToTop />
        </div>
    )
}

export default page

export const metadata = {
    title: 'QR Code Generator',
    description: "This is a easy to use QR Code generator website, feel free to use.",
};

// this is made as server component to have the metadata