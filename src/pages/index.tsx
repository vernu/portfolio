import AboutSection from '@/components/AboutSection'
import ExperienceSection from '@/components/ExperienceSection'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import { Meta } from '@/components/Meta'
import PortfolioSection from '@/components/PortfolioSection'
import { profile } from '@/data/profile'

export default function Home() {
  const { basicInfo, workExperience, skills, projects } = profile
  return (
    <div className='bg-gray-100 min-h-screen'>
      <Meta />
      <Header basicInfo={basicInfo} />
      <AboutSection basicInfo={basicInfo} skills={skills} />
      <PortfolioSection projects={projects} />
      <ExperienceSection workExperience={workExperience} />
      <Footer />
    </div>
  )
}
