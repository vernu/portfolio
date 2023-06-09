import { Project } from '@/data/types'
import Image from 'next/image'
import React from 'react'

interface PortfolioCardProps {
  project: Project
}

export default function PortfolioCard({ project }: PortfolioCardProps) {
  const { title, description, tech, image, previewLink, githubLink } = project

  return (
    <div className=' bg-white rounded shadow-md overflow-hidden flex flex-col'>
      <Image
        src={image ?? '/images/placeholder.jpeg'}
        alt={title}
        loading='lazy'
        width={400}
        height={300}
        className='w-full max-h-48 object-cover'
      />
      <div className='px-6 py-2 mb-auto'>
        <div className='mb-2 flex flex-row justify-between'>
          <span className='font-bold text-lg'>{title}</span>
          <div>
            {previewLink && (
              <a
                href={previewLink}
                target='_blank'
                rel='noopener noreferrer'
                className='px-2 underline hover:text-blue'
              >
                Live
              </a>
            )}
            {previewLink && githubLink ? <> | </> : <></>}
            {githubLink && (
              <a
                href={githubLink}
                target='_blank'
                rel='noopener noreferrer'
                className='px-2 underline hover:text-blue'
              >
                Github
              </a>
            )}
          </div>
        </div>
        <p className='text-gray-700 text-md text-justify'>{description}</p>
      </div>
      <div className='px-6 py-4'>
        {tech?.map((item) => (
          <span
            key={item}
            className='inline-block bg-gray-200 rounded-full px-2 py-1 text-xs font-semibold text-gray-700 mr-1'
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  )
}
