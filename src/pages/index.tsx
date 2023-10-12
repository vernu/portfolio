import AboutSection from '@/components/AboutSection'
import ExperienceSection from '@/components/ExperienceSection'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import { Meta } from '@/components/Meta'
import PortfolioSection from '@/components/PortfolioSection'
import Skills from '@/components/Skills'
import { profile } from '@/data/profile'

export default function Home() {
  const { basicInfo, workExperience, skills, projects } = profile
  return (
    <div className='min-h-screen bg-gradient-to-r from-gray-700 to-cyan-800 text-gray-300'>
      <Meta />
      <Header basicInfo={basicInfo} />
      <AboutSection basicInfo={basicInfo} skills={skills} />
      <Skills />
      <PortfolioSection projects={projects} />
      <ExperienceSection workExperience={workExperience} />
      <Footer />
    </div>
  )
}
