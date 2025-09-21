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
                About Audio Leaks
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-400 mt-2">
                Confidential Audio Archive
              </p>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="prose prose-lg max-w-none">
          <div className="bg-white dark:bg-gray-900 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Mission Statement
            </h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
              Audio Leaks is a satirical platform dedicated to the preservation and dissemination 
              of humorous audio recordings that reveal the lighter side of public discourse. 
              Our mission is to provide entertainment through carefully curated audio content 
              that showcases the absurd, the unexpected, and the downright hilarious moments 
              that occur when people think no one is listening.
            </p>
            
            <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-6 mb-6">
              <div className="flex items-start">
                <AlertTriangle className="h-6 w-6 text-red-600 mr-3 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold text-red-800 dark:text-red-200 mb-2">
                    Important Disclaimer
                  </h3>
                  <p className="text-red-700 dark:text-red-300">
                    This website is created purely for entertainment purposes. All content is 
                    fictional and satirical in nature. No real audio recordings of private 
                    conversations are used or distributed through this platform.
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
                  Audio Playback
                </h3>
              </div>
              <p className="text-gray-700 dark:text-gray-300">
                High-quality audio player with full controls for playback, volume, and seeking.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-900 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-6">
              <div className="flex items-center mb-4">
                <FileText className="h-8 w-8 text-red-600 mr-3" />
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  Transcripts
                </h3>
              </div>
              <p className="text-gray-700 dark:text-gray-300">
                Complete transcripts for all audio content with easy-to-read formatting.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-900 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-6">
              <div className="flex items-center mb-4">
                <Shield className="h-8 w-8 text-red-600 mr-3" />
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  Secure Archive
                </h3>
              </div>
              <p className="text-gray-700 dark:text-gray-300">
                Professional-grade security and organization for all confidential content.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-900 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-6">
              <div className="flex items-center mb-4">
                <Users className="h-8 w-8 text-red-600 mr-3" />
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  Community
                </h3>
              </div>
              <p className="text-gray-700 dark:text-gray-300">
                Join a community of audio enthusiasts and humor aficionados.
              </p>
            </div>
          </div>

          {/* Technology Stack */}
          <div className="bg-white dark:bg-gray-900 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Technology Stack
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
                  Backend & Database
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
              Audio Leaks - Confidential Audio Archive
            </p>
            <p className="text-sm text-gray-400 dark:text-gray-500">
              Built with Next.js, Supabase, and a healthy dose of humor.
            </p>
          </div>
        </div>
      </main>
    </div>
  )
}
