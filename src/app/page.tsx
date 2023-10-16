import AboutSection from '@/components/AboutSection'
import ExperienceSection from '@/components/ExperienceSection'
import PortfolioSection from '@/components/PortfolioSection'
import Skills from '@/components/Skills'
import { profile } from '@/data/profile'

export default function Home() {
  const { workExperience, skills, projects } = profile
  return (
    <div className='min-h-screen bg-gradient-to-r from-gray-700 to-cyan-800 text-gray-300'>
      <AboutSection />
      <Skills skills={skills} />
      <PortfolioSection projects={projects} />
      <ExperienceSection workExperience={workExperience} />
    </div>
  )
}
