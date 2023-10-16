import React from 'react'
import Header from './Header'
import Footer from './Footer'
import { basicInfo } from '@/data/basicInfo'
import { Meta } from './Meta'

interface LayoutProps {
  children: React.ReactNode
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className='min-h-screen bg-gradient-to-r from-gray-700 to-cyan-800 text-gray-300'>
      <Meta />
      <Header basicInfo={basicInfo} />
      {children}
      <Footer />
    </div>
  )
}
