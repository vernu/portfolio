import { Project } from '@/data/types'
import Image from 'next/image'
import React from 'react'
interface PortfolioSectionProps {
  projects: Project[]
}
export default function PortfolioSection({ projects }: PortfolioSectionProps) {
  return (
    <section className='py-16'>
      <div className='container px-4 mx-auto'>
        <h2 className='text-3xl font-bold mb-4'>Portfolio</h2>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4'>
          {projects.map(({ title, description, image, tech }) => (
            <div
              key={title}
              className=' bg-white rounded shadow-md overflow-hidden'
            >
              <Image
                src={image ?? '/images/placeholder.jpeg'}
                alt={title}
                // layout='fill'
                // objectFit='cover'
                style={{ objectFit: 'cover' }}
                loading='lazy'
                width={400}
                height={300}

                // objectPosition={'center'}
              />
              <div className='px-6 py-4'>
                <div className='font-bold text-xl mb-2'>{title}</div>
                <p className='text-gray-700 text-base text-justify'>
                  {description}
                </p>
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
          ))}
        </div>
      </div>
    </section>
  )
}
