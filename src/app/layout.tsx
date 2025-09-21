import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Filtraciones de Audio - Archivo Confidencial de Audio',
  description: 'Una plataforma satírica para grabaciones de audio humorísticas y filtraciones. Solo para entretenimiento.',
  keywords: 'filtraciones de audio, satírico, humor, entretenimiento, confidencial, archivo',
  authors: [{ name: 'Equipo de Filtraciones de Audio' }],
  openGraph: {
    title: 'Filtraciones de Audio - Archivo Confidencial de Audio',
    description: 'Una plataforma satírica para grabaciones de audio humorísticas y filtraciones.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}