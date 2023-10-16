import React from 'react'
import { BsGithub, BsLinkedin, BsWhatsapp } from 'react-icons/bs'
import { TfiEmail } from 'react-icons/tfi'
import { BasicInfo } from '@/data/types'

interface HeaderProps {
  basicInfo: BasicInfo
}

export default function Header({ basicInfo }: HeaderProps) {
  const { name, title, phone, email, linkedin, github } = basicInfo

  const links = [
    {
      link: `https://wa.me/${phone.replace('+', '')}`,
      icon: <BsWhatsapp />,
      text: phone,
    },
    {
      link: 'mailto:vernu1997@gmail.com',
      icon: <TfiEmail />,
      text: email,
    },
    {
      link: linkedin,
      icon: <BsLinkedin />,
      text: linkedin?.replace('https://linkedin.com', ''),
    },
    {
      link: github,
      icon: <BsGithub />,
      text: github?.replace('https://github.com', ''),
    },
  ]
  return (
    <header className='flex flex-col lg:flex-row lg:items-center justify-between py-2 px-6 lg:px-8 bg-gradient-to-r from-gray-700 to-cyan-900 text-white md:sticky top-0 z-10'>
      <div>
        <h1 className='text-2xl font-semibold'>{name}</h1>
        <p className='text-sm'>{title}</p>
      </div>
      <div className='flex md:items-center mt-4 md:mt-0 flex-col md:flex-row font-[200]'>
        {links.map(({ link, icon, text }) => (
          <a
            key={text}
            href={link}
            className='flex items-center mr-4'
            target='_blank'
          >
            <span className='mr-2'>{icon}</span>
            {text}
          </a>
        ))}
      </div>
    </header>
  )
}
