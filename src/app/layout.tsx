import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Audio Leaks - Confidential Audio Archive',
  description: 'A satirical platform for humorous audio recordings and leaks. Entertainment purposes only.',
  keywords: 'audio leaks, satirical, humor, entertainment, confidential, archive',
  authors: [{ name: 'Audio Leaks Team' }],
  openGraph: {
    title: 'Audio Leaks - Confidential Audio Archive',
    description: 'A satirical platform for humorous audio recordings and leaks.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}