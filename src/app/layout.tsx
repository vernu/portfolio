import '@/styles/globals.css'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import { basicInfo } from '@/data/basicInfo'
import Analytics from '@/components/Analytics'

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
