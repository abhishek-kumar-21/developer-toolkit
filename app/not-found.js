import Link from 'next/link';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export default function NotFound() {
    return (
        <div className={`text-white bg-slate-800 flex items-center justify-center min-h-screen flex-col p-6 text-center ${inter.variable}`}>
            <h1 className='text-8xl font-extrabold text-blue-600 drop-shadow-lg'>404</h1>

            <p className="mt-4 text-xl font-semibold text-gray-300">
                Oops! The page you&apos;re looking for doesn&apos;t exist.
            </p>

            <p className="my-3 text-gray-500">
                It looks like you may have taken a wrong turn.
            </p>

            <Link
                href="/"
                className='rounded-lg px-6 py-3 font-medium bg-blue-500 text-white hover:bg-blue-700 hover:cursor-pointer transition focus:ring focus:ring-blue-300'
            >
                Return Home
            </Link>
        </div>
    );
}
