import '@/styles/globals.css'
import Footer from '@/components/layout/Footer'
import Header from '@/components/layout/Header'
import { basicInfo } from '@/data/basicInfo'
import Analytics from '@/components/shared/Analytics'

interface RootLayoutProps {
  children: React.ReactNode
}
export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang='en'>
      <body>
        <Analytics />
        <Header basicInfo={basicInfo} />
        {children}
        <Footer />
      </body>
    </html>
  )
}
