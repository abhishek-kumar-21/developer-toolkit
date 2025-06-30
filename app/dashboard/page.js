import ToolCard from '@/components/ToolCard';
import Image from 'next/image';
import React from 'react';

const tools = [
  {
    imageSrc: '/base64-encoder-decoder.webp',
    title: 'Base64 Encoder Decoder',
    description: 'Convert text to and from Base64 encoding for safe transmission over text-based protocols.',
  },
  {
    imageSrc: '/case-converter.webp',
    title: 'Case Converter',
    description: 'Easily change text between uppercase, lowercase, title case, and more for proper formatting.',
  },
  {
    imageSrc: '/json-formatter.webp',
    title: 'JSON Formatter',
    description: 'Format and beautify JSON data for better readability and debugging.',
  },
  {
    imageSrc: '/lorem-ipsum-generator.jpg',
    title: 'Lorem Ipsum Generator',
    description: 'Generate placeholder text for design mockups and content layout visualization.',
  },
  {
    imageSrc: '/qr-code-generator.jpg',
    title: 'QR Code Generator',
    description: 'Create scannable QR codes from text, URLs, or other data for easy sharing.',
  },
  {
    imageSrc: '/random-color-generator.webp',
    title: 'Random Color Generator',
    description: 'Generate a random HEX color on each refresh for design inspiration.',
  },
  {
    imageSrc: '/url-encoder-decoder.webp',
    title: 'URL Encoder Decoder',
    description: 'Encode or decode URLs to handle special characters and ensure valid web addresses.',
  },
];

const Dashboard = () => {
  return (
    <div  id="dashboard" className="mx-auto py-20 min-h-screen w-[80vw]">
      <h2 className="text-3xl font-semibold my-6 text-white text-center">Developer Tools Dashboard</h2>

      <div className="p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {tools.map((tool, index) => (
          <div key={index} className="card z-10">
            <ToolCard
              imageSrc={tool.imageSrc}
              title={tool.title}
              description={tool.description}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Dashboard;
