import React from 'react'
import QrCodeGenerator from './QrCodeGenerator'
import ScrollToTop from '@/components/ScrollToTop'
import Image from 'next/image'

const Page = () => {
    return (
        <div className="bg-black relative min-h-screen">
            {/* Main Content */}
            <div className="relative z-10">
                <QrCodeGenerator />
            </div>

            {/* Background Image */}
            <div className="fixed inset-0">
                <Image
                    src="/qr-code-generator.jpg"
                    alt="QR Code Generator Background"
                    fill
                    objectFit="cover"
                    priority
                    className="opacity-10 max-h-screen"
                />
            </div>

            <ScrollToTop />
        </div>
    );
};

export default Page;

export const metadata = {
    title: "QR Code Generator",
    description: "An easy-to-use QR Code generator tool, feel free to use.",
};
