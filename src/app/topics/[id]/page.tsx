'use client'

import { useEffect, useState } from 'react'
import { useParams } from 'next/navigation'
import LeakCard from '@/components/LeakCard'
import { supabase, Leak, Topic } from '@/lib/supabase'
import { ArrowLeft, FileAudio } from 'lucide-react'
import Link from 'next/link'

export default function TopicDetail() {
  const params = useParams()
  const [topic, setTopic] = useState<Topic | null>(null)
  const [leaks, setLeaks] = useState<Leak[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (params.id) {
      fetchTopicAndLeaks(params.id as string)
    }
  }, [params.id])

  const fetchTopicAndLeaks = async (topicId: string) => {
    try {
      // Fetch topic
      const { data: topicData, error: topicError } = await supabase
        .from('topics')
        .select('*')
        .eq('id', topicId)
        .single()

      if (topicError) throw topicError

      // Fetch leaks for this topic
      const { data: leaksData, error: leaksError } = await supabase
        .from('leaks')
        .select('*')
        .eq('topic_id', topicId)
        .order('created_at', { ascending: false })

      if (leaksError) throw leaksError

      setTopic(topicData)
      setLeaks(leaksData || [])
    } catch (error) {
      console.error('Error fetching topic and leaks:', error)
    } finally {
      setLoading(false)
    }
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
        <div className="flex items-center justify-center min-h-screen">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-red-600 mx-auto mb-4"></div>
            <p className="text-gray-600 dark:text-gray-400">Cargando tema...</p>
          </div>
        </div>
      </div>
    )
  }

  if (!topic) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
        <div className="flex items-center justify-center min-h-screen">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Tema No Encontrado
            </h1>
            <p className="text-gray-600 dark:text-gray-400 mb-8">
              El tema solicitado no se pudo encontrar.
            </p>
            <Link
              href="/topics"
              className="bg-red-600 text-white px-6 py-3 rounded-md hover:bg-red-700 transition-colors"
            >
              Explorar Temas
            </Link>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Back Button */}
        <Link
          href="/topics"
          className="inline-flex items-center text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white mb-8 transition-colors"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Volver a Temas
        </Link>

        {/* Topic Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-6">
            <FileAudio className="h-16 w-16 text-red-600 mr-4" />
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
                {topic.name}
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-400 mt-2">
                {leaks.length} {leaks.length === 1 ? 'filtración' : 'filtraciones'} disponibles
              </p>
            </div>
          </div>
          
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            {topic.description}
          </p>
        </div>

        {/* Leaks Grid */}
        {leaks.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {leaks.map((leak) => (
              <LeakCard key={leak.id} leak={leak} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <FileAudio className="h-16 w-16 text-gray-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
              No hay Filtraciones Disponibles
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              No hay filtraciones disponibles para este tema aún.
            </p>
          </div>
        )}
      </main>
    </div>
  )
}
