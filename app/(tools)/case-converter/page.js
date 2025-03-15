import CaseConverter from './CaseConverter';
import React from 'react';
import Image from 'next/image';
import ScrollToTop from '@/components/ScrollToTop';

export const metadata = {
    title: 'Case Converter',
    description: "This is an easy-to-use case converter tool. Feel free to use it!",
};

const Page = () => {
    return (
        <div className="bg-black relative">
            <div className="relative z-10">
                <CaseConverter />
            </div>

            {/* Handling Background Image */}
            <div className="fixed inset-0">
                <Image
                    src="/case-converter.webp"
                    alt="Case Converter Background"
                    fill
                    className="object-cover opacity-22 max-h-screen"
                />
            </div>

            <ScrollToTop />
        </div>
    );
};

export default Page;
