import React from 'react'
import Image from 'next/image'
import JsonFormatter from './JsonFormatter'
import ScrollToTop from '@/components/ScrollToTop'

const page = () => {
  return (
    <div className='bg-black relative min-h-screen'>
      <div className="relative z-10">
        <JsonFormatter />
      </div>

      {/* Handling background Image */}
      <div className="fixed inset-0">
        <Image
          src="/json-formatter.webp"
          alt=""
          layout="fill"
          objectFit="cover"
          className="opacity-16 max-h-screen"
        />
      </div>

      <ScrollToTop />
    </div>
  )
}

export default page

export const metadata = {
  title: 'Json Formatter',
  description: "This is a easy to use json formatter tool, feel free to use.",
};

// this is made as server component to have the metadata
