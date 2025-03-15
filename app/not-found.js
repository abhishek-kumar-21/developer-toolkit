import Link from 'next/link'

export default function NotFound() {
    return (
        <div className='text-white bg-slate-800 flex items-center justify-center min-h-screen flex-col'>
            <h1 className='text-8xl font-extrabold text-blue-700'>404</h1>

            <p className="mt-4 text-xl font-medium text-gray-200">
                Oops! The page you&apos;re looking for doesn&apos;t exist.
            </p>

            <p className="my-3 text-gray-400">
                It looks like you may have taken a wrong turn.
            </p>

            <Link href={"/"} className='rounded-lg border-none px-6 py-3 font-medium bg-blue-500 text-white hover:bg-blue-700 hover:cursor-pointer'>
                Return Home
            </Link>
        </div>
    )
}
