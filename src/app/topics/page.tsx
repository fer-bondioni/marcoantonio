'use client'

import { useEffect, useState } from 'react'
import Header from '@/components/Header'
import TopicCard from '@/components/TopicCard'
import { supabase, Topic } from '@/lib/supabase'
import { FileAudio, ArrowLeft } from 'lucide-react'
import Link from 'next/link'

export default function TopicsPage() {
  const [topics, setTopics] = useState<Topic[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchTopics()
  }, [])

  const fetchTopics = async () => {
    try {
      const { data, error } = await supabase
        .from('topics')
        .select(`
          *,
          leaks (id)
        `)
        .order('created_at', { ascending: false })

      if (error) throw error

      setTopics(data || [])
    } catch (error) {
      console.error('Error fetching topics:', error)
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
            <p className="text-gray-600 dark:text-gray-400">Cargando temas...</p>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Header />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Back Button */}
        <Link
          href="/"
          className="inline-flex items-center text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white mb-8 transition-colors"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Volver al Inicio
        </Link>

        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-6">
            <FileAudio className="h-16 w-16 text-red-600 mr-4" />
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
                Todos los Temas
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-400 mt-2">
                Explorar filtraciones por categoría
              </p>
            </div>
          </div>
        </div>

        {/* Topics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {topics.map((topic) => (
            <TopicCard
              key={topic.id}
              topic={topic}
              leakCount={topic.leaks?.length || 0}
            />
          ))}
        </div>

        {topics.length === 0 && (
          <div className="text-center py-12">
            <FileAudio className="h-16 w-16 text-gray-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
              No se Encontraron Temas
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              No hay temas disponibles en este momento.
            </p>
          </div>
        )}
      </main>
    </div>
  )
}
