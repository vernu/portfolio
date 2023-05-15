import React from 'react'
import { BsGithub, BsLinkedin, BsWhatsapp } from 'react-icons/bs'
import { TfiEmail } from 'react-icons/tfi'
import { BasicInfo } from '@/data/types'

interface HeaderProps {
  basicInfo: BasicInfo
}

export default function Header({ basicInfo }: HeaderProps) {
  const { name, title, phone, email, linkedin, github } = basicInfo

  return (
    <header className='flex flex-col lg:flex-row lg:items-center justify-between py-4 px-6 lg:px-8 bg-gray-800 text-white'>
      <div>
        <h1 className='text-2xl font-bold'>{name}</h1>
        <p className='text-sm'>{title}</p>
      </div>
      <div className='flex md:items-center mt-4 md:mt-0 flex-col md:flex-row'>
        <a
          href={`https://wa.me/${phone.replace('+', '')}`}
          className='flex items-center mr-4'
          target='_blank'
        >
          <span className='mr-2'>
            <BsWhatsapp />
          </span>
          {phone}
        </a>
        <a
          href='mailto:vernu1997@gmail.com'
          className='flex items-center mr-4'
          target='_blank'
        >
          <span className='mr-2'>
            <TfiEmail />
          </span>
          {email}
        </a>
        <a href={linkedin} className='flex items-center mr-2' target='_blank'>
          <span className='mr-2'>
            <BsLinkedin />
          </span>
          <span className='md:hidden'>{linkedin?.replace('https://', '')}</span>
        </a>
        <a href={github} className='flex items-center mr-2' target='_blank'>
          <span className='mr-2'>
            <BsGithub />
          </span>
          <span className='md:hidden'>{github?.replace('https://', '')}</span>
        </a>
      </div>
    </header>
  )
}
