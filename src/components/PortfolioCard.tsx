import { Project } from '@/data/types'
import Image from 'next/image'
import React from 'react'

interface PortfolioCardProps {
  project: Project
}

export default function PortfolioCard({ project }: PortfolioCardProps) {
  const { title, description, tech, image } = project

  return (
    <div className=' bg-white rounded shadow-md overflow-hidden'>
      <Image
        src={image ?? '/images/placeholder.jpeg'}
        alt={title}
        loading='lazy'
        width={400}
        height={300}
        className='w-full max-h-48 object-cover'
      />
      <div className='px-6 py-4'>
        <div className='font-bold text-xl mb-2'>{title}</div>
        <p className='text-gray-700 text-base text-justify'>{description}</p>
      </div>
      <div className='px-6 py-4'>
        {tech?.map((item) => (
          <span
            key={item}
            className='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2'
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  )
}
