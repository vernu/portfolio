import { Project } from '@/data/types'
import React from 'react'
import PortfolioCard from './PortfolioCard'
interface PortfolioSectionProps {
  projects: Project[]
}
export default function PortfolioSection({ projects }: PortfolioSectionProps) {
  return (
    <section className='py-16'>
      <div className='container px-4 mx-auto'>
        <h2 className='text-3xl font-bold mb-4'>Portfolio</h2>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4'>
          {projects.map((project: Project) => (
            <PortfolioCard key={project.title} project={project} />
          ))}
        </div>
      </div>
    </section>
  )
}
