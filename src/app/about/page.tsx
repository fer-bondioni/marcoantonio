'use client'

import Header from '@/components/Header'
import { Shield, Volume2, AlertTriangle, FileText, Users } from 'lucide-react'

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Header />
      
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-6">
            <Shield className="h-16 w-16 text-red-600 mr-4" />
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
                Acerca de Filtraciones de Audio
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-400 mt-2">
                Archivo Confidencial de Audio
              </p>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="prose prose-lg max-w-none">
          <div className="bg-white dark:bg-gray-900 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Declaración de Misión
            </h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
              Filtraciones de Audio es una plataforma satírica dedicada a la preservación y difusión 
              de grabaciones de audio humorísticas que revelan el lado más ligero del discurso público. 
              Nuestra misión es proporcionar entretenimiento a través de contenido de audio cuidadosamente 
              seleccionado que muestra lo absurdo, lo inesperado y los momentos francamente hilarantes 
              que ocurren cuando la gente piensa que nadie está escuchando.
            </p>
            
            <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-6 mb-6">
              <div className="flex items-start">
                <AlertTriangle className="h-6 w-6 text-red-600 mr-3 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold text-red-800 dark:text-red-200 mb-2">
                    Descargo de Responsabilidad Importante
                  </h3>
                  <p className="text-red-700 dark:text-red-300">
                    Este sitio web se crea únicamente con fines de entretenimiento. Todo el contenido es 
                    ficticio y de naturaleza satírica. No se utilizan ni distribuyen grabaciones de audio 
                    reales de conversaciones privadas a través de esta plataforma.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Features */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white dark:bg-gray-900 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-6">
              <div className="flex items-center mb-4">
                <Volume2 className="h-8 w-8 text-red-600 mr-3" />
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  Reproducción de Audio
                </h3>
              </div>
              <p className="text-gray-700 dark:text-gray-300">
                Reproductor de audio de alta calidad con controles completos para reproducción, volumen y búsqueda.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-900 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-6">
              <div className="flex items-center mb-4">
                <FileText className="h-8 w-8 text-red-600 mr-3" />
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  Transcripciones
                </h3>
              </div>
              <p className="text-gray-700 dark:text-gray-300">
                Transcripciones completas para todo el contenido de audio con formato fácil de leer.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-900 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-6">
              <div className="flex items-center mb-4">
                <Shield className="h-8 w-8 text-red-600 mr-3" />
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  Archivo Seguro
                </h3>
              </div>
              <p className="text-gray-700 dark:text-gray-300">
                Seguridad y organización de nivel profesional para todo el contenido confidencial.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-900 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-6">
              <div className="flex items-center mb-4">
                <Users className="h-8 w-8 text-red-600 mr-3" />
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  Comunidad
                </h3>
              </div>
              <p className="text-gray-700 dark:text-gray-300">
                Únete a una comunidad de entusiastas del audio y aficionados al humor.
              </p>
            </div>
          </div>

          {/* Technology Stack */}
          <div className="bg-white dark:bg-gray-900 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Stack Tecnológico
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                  Frontend
                </h3>
                <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                  <li>• Next.js 14 with App Router</li>
                  <li>• React 18 with TypeScript</li>
                  <li>• Tailwind CSS for styling</li>
                  <li>• Three.js for visual effects</li>
                  <li>• Lucide React for icons</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                  Backend y Base de Datos
                </h3>
                <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                  <li>• Supabase for database</li>
                  <li>• PostgreSQL for data storage</li>
                  <li>• Real-time subscriptions</li>
                  <li>• Row Level Security (RLS)</li>
                  <li>• RESTful API integration</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="text-center mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
            <p className="text-gray-500 dark:text-gray-400 mb-2">
              Filtraciones de Audio - Archivo Confidencial de Audio
            </p>
            <p className="text-sm text-gray-400 dark:text-gray-500">
              Construido con Next.js, Supabase y una dosis saludable de humor.
            </p>
          </div>
        </div>
      </main>
    </div>
  )
}
