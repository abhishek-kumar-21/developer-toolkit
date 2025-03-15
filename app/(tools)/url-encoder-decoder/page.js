import React from 'react'
import UrlEncoderDecoder from './UrlEncoderDecoder'
import Image from 'next/image'
import ScrollToTop from '@/components/ScrollToTop'

const Page = () => {
  return (
    <div className="bg-black relative min-h-screen">
      {/* Main Content */}
      <div className="relative z-10">
        <UrlEncoderDecoder />
      </div>

      {/* Background Image */}
      <div className="fixed inset-0">
        <Image
          src="/url-encoder-decoder.webp"
          alt="Background Image"
          fill
          style={{ objectFit: "cover" }}
          className="opacity-50"
        />
      </div>

      <ScrollToTop />
    </div>
  )
}

export default Page

export const metadata = {
  title: 'URL Encoder & Decoder',
  description: "This is an easy-to-use website for URL encoding and decoding. Feel free to use it!",
};
