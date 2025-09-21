'use client'

import { useEffect, useState } from 'react'
import dynamic from 'next/dynamic'

interface LocomotiveScrollProviderProps {
  children: React.ReactNode
}

export default function LocomotiveScrollProvider({ children }: LocomotiveScrollProviderProps) {
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  useEffect(() => {
    if (!isClient) return

    const initLocomotiveScroll = async () => {
      const LocomotiveScroll = (await import('locomotive-scroll')).default
      
      const scroll = new LocomotiveScroll({
        el: document.querySelector('[data-scroll-container]') as HTMLElement,
        smooth: true,
        multiplier: 1,
        class: 'is-revealed',
      })

      return () => {
        scroll.destroy()
      }
    }

    const cleanup = initLocomotiveScroll()
    
    return () => {
      cleanup.then(cleanupFn => cleanupFn?.())
    }
  }, [isClient])

  return <>{children}</>
}
