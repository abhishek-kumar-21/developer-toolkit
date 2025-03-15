import React from 'react'
import UrlEncoderDecoder from './UrlEncoderDecoder'
import Image from 'next/image'
import ScrollToTop from '@/components/ScrollToTop'

const page = () => {
  return (
    <div className='bg-black relative min-h-screen'>
      <div className="relative z-10">
        <UrlEncoderDecoder />
      </div>

      {/* Handling background Image */}
      <div className="fixed inset-0">
        <Image
          src="/url-encoder-decoder.webp"
          alt=""
          layout="fill"
          objectFit="cover"
          className="opacity-50 max-h-screen"
        />
      </div>

      <ScrollToTop />
    </div>
  )
}

export default page

export const metadata = {
  title: 'URL Encoder Decoder',
  description: "This is a easy to use URL encoding and decoding website, feel free to use.",
};

// this is made as server component to have the metadata
