import AboutSection from '@/components/AboutSection'
import ExperienceSection from '@/components/ExperienceSection'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import { Meta } from '@/components/Meta'
import PortfolioSection from '@/components/PortfolioSection'
import Head from 'next/head'

export default function Home() {
  return (
    <div className='bg-gray-100 min-h-screen'>
      <Meta />
      <Header />
      <AboutSection />
      <PortfolioSection />
      <ExperienceSection />
      <Footer />
    </div>
  )
}
