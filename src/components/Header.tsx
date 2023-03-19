import React from 'react'

export default function Header() {
  return (
    <header className='flex flex-col md:flex-row items-center justify-between py-4 md:px-8 bg-gray-800 text-white'>
      <div>
        <h1 className='text-2xl font-bold'>Israel Abebe Kokiso</h1>
        <p className='text-sm'>Software Engineer</p>
      </div>
      <div className='flex md:items-center mt-4 md:mt-0 flex-col md:flex-row'>
        <a href='tel:+251912657519' className='mr-4'>
          <span className='mr-2'>Phone:</span>+251912657519
        </a>
        <a href='mailto:vernu1997@gmail.com' className='mr-4'>
          <span className='mr-2'>Email:</span>vernu1997@gmail.com
        </a>
        <a href='https://linkedin.com/in/israelabebe'>
          <span className='mr-2'>LinkedIn:</span>linkedin.com/in/israelabebe
        </a>
      </div>
    </header>
  )
}
