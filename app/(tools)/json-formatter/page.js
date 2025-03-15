import React from 'react';
import Image from 'next/image';
import JsonFormatter from './JsonFormatter';
import ScrollToTop from '@/components/ScrollToTop';

export const metadata = {
  title: 'JSON Formatter',
  description: "This is an easy-to-use JSON formatter tool. Feel free to use it.",
};

const Page = () => {
  return (
    <div className="bg-black relative min-h-screen">
      <div className="relative z-10">
        <JsonFormatter />
      </div>

      {/* Handling background image */}
      <div className="fixed inset-0 -z-10">
        <Image
          src="/json-formatter.webp"
          alt="JSON Formatter Background"
          fill
          className="object-cover opacity-[0.16] max-h-screen"
          priority
        />
      </div>

      <ScrollToTop />
    </div>
  );
};

export default Page;
