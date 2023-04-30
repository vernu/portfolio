import React from 'react'
import { FiPhone } from 'react-icons/fi'
import { BsLinkedin } from 'react-icons/bs'
import { TfiEmail } from 'react-icons/tfi'
import { BasicInfo } from '@/data/types'

interface HeaderProps {
  basicInfo: BasicInfo
}

export default function Header({ basicInfo }: HeaderProps) {
  const { name, title, phone, email, linkedin } = basicInfo

  return (
    <header className='flex flex-col lg:flex-row lg:items-center justify-between py-4 px-6 lg:px-8 bg-gray-800 text-white'>
      <div>
        <h1 className='text-2xl font-bold'>{name}</h1>
        <p className='text-sm'>{title}</p>
      </div>
      <div className='flex md:items-center mt-4 md:mt-0 flex-col md:flex-row'>
        <a href={`tel:${phone}`} className='flex items-center mr-4'>
          <span className='mr-2'>
            <FiPhone />
          </span>
          {phone}
        </a>
        <a href='mailto:vernu1997@gmail.com' className='flex items-center mr-4'>
          <span className='mr-2'>
            <TfiEmail />
          </span>
          {email}
        </a>
        <a href={linkedin} className='flex items-center mr-2'>
          <span className='mr-2'>
            <BsLinkedin />
          </span>
          {linkedin?.replace('https://', '')}
        </a>
      </div>
    </header>
  )
}
