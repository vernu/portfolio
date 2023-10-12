import { Project } from '@/data/types'
import Image from 'next/image'
import React, { useContext } from 'react'
import { ModalContext } from './ModalContext'
import AnimatedScrollWrapper from './AnimatedScrollWrapper'
import { BsGithub } from 'react-icons/bs'
import { BiLinkExternal } from 'react-icons/bi'

interface PortfolioCardProps {
  project: Project
}

export default function PortfolioCard({ project }: PortfolioCardProps) {
  const { title, description, tech, image, previewLink, githubLink } = project

  const { showModal } = useContext(ModalContext)

  return (
    <AnimatedScrollWrapper>
      <div
        className='rounded-lg border-solid border-[0.5px] border-gray-400  overflow-hidden flex flex-col md:hover:drop-shadow-lg cursor-pointer md:hover:shadow-xl md:hover:scale-[102%] transition-transform duration-300 md:min-h-[360px]'
        onClick={() => {}}
      >
        <Image
          src={image ?? '/images/placeholder.jpeg'}
          alt={title}
          loading='lazy'
          width={400}
          height={300}
          className='w-full max-h-48 object-cover'
        />
        <div className='px-3 py-2 mb-auto flex-grow'>
          <div className='mb-2 flex flex-row justify-between'>
            <span className='font-semibold text-md'>{title}</span>
            <div className='text-md  flex flex-row'>
              {previewLink && (
                <a
                  href={previewLink}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='px-1 underline hover:text-cyan-500'
                >
                  <BiLinkExternal />
                </a>
              )}
              {githubLink && (
                <a
                  href={githubLink}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='px-1 underline hover:text-cyan-500'
                >
                  <BsGithub />
                </a>
              )}
            </div>
          </div>
          <p className='text-sm text-justify font-[100]'>{description}</p>
        </div>
        <div className='px-3 py-4 font-[200]'>
          {tech?.map((item) => (
            <span
              key={item}
              className='inline-block border-gray-200 rounded-full pr-2 py-1 text-xs mr-1 text-cyan-200'
            >
              #{item}
            </span>
          ))}
        </div>{' '}
      </div>
    </AnimatedScrollWrapper>
  )
}
