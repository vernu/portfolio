import React from 'react'

export default function Footer() {
  return (
    <footer className='bg-gray-800 font-[200] px-6 py-8 text-center bg-gradient-to-r from-gray-700 to-cyan-900 text-white'>
      &copy; {new Date().getFullYear()} No rights reserved :)
    </footer>
  )
}
