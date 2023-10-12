import Analytics from '@/components/Analytics'
import { ModalContextProvider } from '@/components/ModalContext'
import ProgressBar from '@/components/ProgressBar'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {

  return (
    <>
      <Analytics />
      <ProgressBar />
      <ModalContextProvider>
        <Component {...pageProps} />
      </ModalContextProvider>
    </>
  )
}
