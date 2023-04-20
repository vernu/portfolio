import React from 'react'
import { FiPhone } from 'react-icons/fi'
import { BsLinkedin } from 'react-icons/bs'
import { TfiEmail } from 'react-icons/tfi'

export default function Header() {
  return (
    <header className='flex flex-col lg:flex-row lg:items-center justify-between py-4 px-6 lg:px-8 bg-gray-800 text-white'>
      <div>
        <h1 className='text-2xl font-bold'>Israel Abebe Kokiso</h1>
        <p className='text-sm'>Software Engineer</p>
      </div>
      <div className='flex md:items-center mt-4 md:mt-0 flex-col md:flex-row'>
        <a href='tel:+251912657519' className='flex items-center mr-4'>
          <span className='mr-2'>
            <FiPhone />
          </span>
          +251912657519
        </a>
        <a href='mailto:vernu1997@gmail.com' className='flex items-center mr-4'>
          <span className='mr-2'>
            <TfiEmail />
          </span>
          vernu1997@gmail.com
        </a>
        <a
          href='https://linkedin.com/in/israelabebe'
          className='flex items-center mr-2'
        >
          <span className='mr-2'>
            <BsLinkedin />
          </span>
          linkedin.com/in/israelabebe
        </a>
      </div>
    </header>
  )
}
