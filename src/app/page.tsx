'use client'

import { useEffect, useState } from 'react'
import ThreeBackground from '@/components/ThreeBackground'
import { Shield, Volume2, AlertTriangle, Play } from 'lucide-react'

export default function Home() {
  const [expandedCard, setExpandedCard] = useState<string | null>(null)

  const handleCardClick = (cardId: string) => {
    setExpandedCard(expandedCard === cardId ? null : cardId)
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900" data-scroll-container>
      <ThreeBackground />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Hero Section */}
        <div className="text-center mb-8" data-scroll-section>
          <div className="flex items-center justify-center mb-6">
            <Shield className="h-16 w-16 text-red-600 mr-4" />
            <div>
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white" data-scroll data-scroll-speed="0.5">
                MARCO ANTONIO LEAKS
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-400 mt-2" data-scroll data-scroll-speed="0.3">
                Archivo Confidencial de Audio
              </p>
            </div>
          </div>
          
          <div className="flex items-center justify-center space-x-8 text-sm text-gray-500 dark:text-gray-400" data-scroll data-scroll-speed="0.2">
            <div className="flex items-center">
              <Volume2 className="h-4 w-4 mr-2" />
              Grabaciones de Audio
            </div>
            <div className="flex items-center">
              <AlertTriangle className="h-4 w-4 mr-2" />
              Contenido Clasificado
            </div>
          </div>
        </div>

        {/* Main Cards Section */}
        <section className="mb-16" data-scroll-section>
          <div className="space-y-6">
            {/* Card 1: Marco Antonio y el 3% */}
            <div 
              className={`main-card group cursor-pointer transition-all duration-500 ${
                expandedCard === 'card1' 
                  ? 'scale-105 shadow-2xl' 
                  : 'hover:scale-102 hover:shadow-lg'
              }`}
              onClick={() => handleCardClick('card1')}
              data-scroll data-scroll-speed="0.3"
            >
              <div className="relative h-80 bg-gradient-to-br from-red-900 to-red-700 rounded-lg overflow-hidden">
                {/* Background Image Placeholder */}
                <div className="absolute inset-0 bg-gradient-to-br from-red-900/80 to-red-700/80">
                  <div className="absolute inset-0 bg-black/20"></div>
                </div>
                
                {/* Card Content */}
                <div className="relative z-10 p-8 h-full flex flex-col justify-between">
                  <div>
                    <h3 className="text-3xl font-bold text-white mb-4 group-hover:text-red-200 transition-colors">
                      Marco Antonio y el 3%
                    </h3>
                    <p className="text-red-100 text-lg leading-relaxed">
                      Una exploración profunda de los secretos más oscuros y las revelaciones más impactantes.
                    </p>
                  </div>
                  
                  {/* Play Button - Only visible when expanded */}
                  {expandedCard === 'card1' && (
                    <div className="flex justify-center mt-6 animate-fadeIn">
                      <button className="bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white p-4 rounded-full transition-all duration-300 hover:scale-110">
                        <Play className="h-8 w-8" />
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Card 2: Marco Antonio and the labubus */}
            <div 
              className={`main-card group cursor-pointer transition-all duration-500 ${
                expandedCard === 'card2' 
                  ? 'scale-105 shadow-2xl' 
                  : 'hover:scale-102 hover:shadow-lg'
              }`}
              onClick={() => handleCardClick('card2')}
              data-scroll data-scroll-speed="0.3"
            >
              <div className="relative h-80 bg-gradient-to-br from-blue-900 to-purple-700 rounded-lg overflow-hidden">
                {/* Background Image Placeholder */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-900/80 to-purple-700/80">
                  <div className="absolute inset-0 bg-black/20"></div>
                </div>
                
                {/* Card Content */}
                <div className="relative z-10 p-8 h-full flex flex-col justify-between">
                  <div>
                    <h3 className="text-3xl font-bold text-white mb-4 group-hover:text-blue-200 transition-colors">
                      Marco Antonio and the labubus
                    </h3>
                    <p className="text-blue-100 text-lg leading-relaxed">
                      Una historia fascinante que combina misterio, intriga y revelaciones sorprendentes.
                    </p>
                  </div>
                  
                  {/* Play Button - Only visible when expanded */}
                  {expandedCard === 'card2' && (
                    <div className="flex justify-center mt-6 animate-fadeIn">
                      <button className="bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white p-4 rounded-full transition-all duration-300 hover:scale-110">
                        <Play className="h-8 w-8" />
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="mt-16 pt-8 border-t border-gray-200 dark:border-gray-700" data-scroll-section>
          <div className="text-center text-gray-500 dark:text-gray-400">
            <p className="mb-2">
              Este es un sitio web satírico solo para entretenimiento.
            </p>
            <p className="text-sm">
              Todo el contenido es ficticio y creado con fines cómicos.
            </p>
          </div>
        </footer>
      </main>
    </div>
  )
}