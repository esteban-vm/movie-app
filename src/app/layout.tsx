import '@/styles/globals.css'
import type { Metadata } from 'next'
import type { ReactNode } from 'react'
import { ThemeModeScript } from 'flowbite-react'
import { Navigation } from '@/containers'
import { MovieContextProvider } from '@/contexts'

export const metadata: Metadata = {
  title: 'Movie App',
  description: 'Generated by create next app',
}

export default function RootLayout(props: { children: ReactNode }) {
  return (
    <html lang='en'>
      <head>
        <ThemeModeScript />
      </head>
      <body suppressHydrationWarning>
        <Navigation />
        <main className='absolute left-1/2 top-16 -z-10 w-full max-w-screen-2xl -translate-x-1/2'>
          <MovieContextProvider {...props} />
        </main>
      </body>
    </html>
  )
}
