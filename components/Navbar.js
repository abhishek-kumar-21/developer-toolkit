import React from 'react'
import Link from 'next/link'

const Navbar = ({ scrollToSection }) => {
    return (
        <nav className='flex md:flex-row flex-col justify-between items-center py-2 z-15 sticky top-0'>
            <img src="/devtools-hub.svg" alt="DevTools Hub" className='w-fit' />

            <div className='flex justify-center items-center md:gap-10 gap-5'>
                <ul className='flex md:gap-8 gap-10 text-white text-lg'>
                    <Link href="/" className='hover:text-yellow-200'><li>Home</li></Link>
                    <Link href="/about" target='_blank' className='hover:text-yellow-200'><li>About</li></Link>
                </ul>

                <button onClick={() => scrollToSection("dashboard")} className='text-white text-lg p-1.5 border-2 rounded-lg hover:bg-sky-500 hover:cursor-pointer md:ml-0 ml-6 md:mr-10'>Try Tools</button>
            </div>

        </nav>
    )
}

export default Navbar
