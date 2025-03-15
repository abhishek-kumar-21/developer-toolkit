import React from 'react'

const Footer = ({title}) => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className='bg-gray-900 text-white flex items-center justify-center px-4 h-16 z-10  fixed bottom-0 w-full'>
            <p className='text-center'>Copyright &copy; {currentYear} {title} - Created with ❤️ by Abhishek Kumar</p>
        </footer>
    )
}

export default Footer
