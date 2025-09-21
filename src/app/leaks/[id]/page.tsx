'use client'

import { useEffect, useState } from 'react'
import { useParams } from 'next/navigation'
import Header from '@/components/Header'
import AudioPlayer from '@/components/AudioPlayer'
import { supabase, Leak, Topic } from '@/lib/supabase'
import { ArrowLeft, Calendar, FileText, Image, Volume2 } from 'lucide-react'
import Link from 'next/link'

export default function LeakDetail() {
  const params = useParams()
  const [leak, setLeak] = useState<Leak | null>(null)
  const [topic, setTopic] = useState<Topic | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (params.id) {
      fetchLeak(params.id as string)
    }
  }, [params.id])

  const fetchLeak = async (id: string) => {
    try {
      const { data, error } = await supabase
        .from('leaks')
        .select(`
          *,
          topics (*)
        `)
        .eq('id', id)
        .single()

      if (error) throw error

      setLeak(data)
      setTopic(data.topics)
    } catch (error) {
      console.error('Error fetching leak:', error)
    } finally {
      setLoading(false)
    }
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
        <Header />
        <div className="flex items-center justify-center min-h-screen">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-red-600 mx-auto mb-4"></div>
            <p className="text-gray-600 dark:text-gray-400">Loading leak details...</p>
          </div>
        </div>
      </div>
    )
  }

  if (!leak) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
        <Header />
        <div className="flex items-center justify-center min-h-screen">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Leak Not Found
            </h1>
            <p className="text-gray-600 dark:text-gray-400 mb-8">
              The requested leak could not be found.
            </p>
            <Link
              href="/"
              className="bg-red-600 text-white px-6 py-3 rounded-md hover:bg-red-700 transition-colors"
            >
              Return Home
            </Link>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Header />
      
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Back Button */}
        <Link
          href="/"
          className="inline-flex items-center text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white mb-8 transition-colors"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Home
        </Link>

        {/* Leak Header */}
        <div className="leak-container rounded-lg mb-8">
          <div className="leak-header rounded-t-lg">
            <div className="flex items-center justify-between">
              <h1 className="text-2xl font-bold">{leak.title}</h1>
              <div className="flex items-center text-red-100">
                <Calendar className="h-4 w-4 mr-2" />
                {new Date(leak.created_at).toLocaleDateString()}
              </div>
            </div>
            {topic && (
              <p className="text-red-100 mt-2">Topic: {topic.name}</p>
            )}
          </div>

          <div className="leak-content">
            {/* Image */}
            {leak.image_url && (
              <div className="mb-6">
                <img
                  src={leak.image_url}
                  alt={leak.title}
                  className="w-full h-64 object-cover rounded-lg"
                />
              </div>
            )}

            {/* Audio Player */}
            <div className="mb-6">
              <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
                <Volume2 className="h-5 w-5 mr-2 text-red-600" />
                Audio Recording
              </h2>
              <AudioPlayer audioUrl={leak.audio_url} title={leak.title} />
            </div>

            {/* Synopsis */}
            <div className="mb-6">
              <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                Synopsis
              </h2>
              <div className="synopsis">
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  {leak.synopsis}
                </p>
              </div>
            </div>

            {/* Transcript */}
            {leak.transcript && (
              <div className="mb-6">
                <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
                  <FileText className="h-5 w-5 mr-2 text-red-600" />
                  Transcript
                </h2>
                <div className="transcript">
                  <p className="text-gray-800 dark:text-gray-200 leading-relaxed">
                    {leak.transcript}
                  </p>
                </div>
              </div>
            )}

            {/* Metadata */}
            <div className="border-t border-gray-200 dark:border-gray-700 pt-6">
              <h3 className="text-sm font-semibold text-gray-900 dark:text-white mb-3">
                Leak Information
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-gray-600 dark:text-gray-400">
                <div>
                  <span className="font-medium">Leak ID:</span> {leak.id}
                </div>
                <div>
                  <span className="font-medium">Created:</span> {new Date(leak.created_at).toLocaleString()}
                </div>
                <div>
                  <span className="font-medium">Updated:</span> {new Date(leak.updated_at).toLocaleString()}
                </div>
                <div>
                  <span className="font-medium">Topic:</span> {topic?.name || 'Unknown'}
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
