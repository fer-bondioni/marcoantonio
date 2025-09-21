'use client'

import { useEffect, useState } from 'react'
import Header from '@/components/Header'
import TopicCard from '@/components/TopicCard'
import LeakCard from '@/components/LeakCard'
import ThreeBackground from '@/components/ThreeBackground'
import { supabase, Topic, Leak } from '@/lib/supabase'
import { Shield, Volume2, AlertTriangle } from 'lucide-react'

export default function Home() {
  const [topics, setTopics] = useState<Topic[]>([])
  const [recentLeaks, setRecentLeaks] = useState<Leak[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchData()
  }, [])

  const fetchData = async () => {
    try {
      // Fetch topics
      const { data: topicsData, error: topicsError } = await supabase
        .from('topics')
        .select('*')
        .order('created_at', { ascending: false })

      if (topicsError) throw topicsError

      // Fetch recent leaks
      const { data: leaksData, error: leaksError } = await supabase
        .from('leaks')
        .select(`
          *,
          topics (name)
        `)
        .order('created_at', { ascending: false })
        .limit(6)

      if (leaksError) throw leaksError

      setTopics(topicsData || [])
      setRecentLeaks(leaksData || [])
    } catch (error) {
      console.error('Error fetching data:', error)
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
            <p className="text-gray-600 dark:text-gray-400">Loading confidential data...</p>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <ThreeBackground />
      <Header />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-6">
            <Shield className="h-16 w-16 text-red-600 mr-4" />
            <div>
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white">
                AUDIO LEAKS
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-400 mt-2">
                Confidential Audio Archive
              </p>
            </div>
          </div>
          
          <div className="flex items-center justify-center space-x-8 text-sm text-gray-500 dark:text-gray-400">
            <div className="flex items-center">
              <Volume2 className="h-4 w-4 mr-2" />
              Audio Recordings
            </div>
            <div className="flex items-center">
              <AlertTriangle className="h-4 w-4 mr-2" />
              Classified Content
            </div>
          </div>
        </div>

        {/* Topics Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            Browse by Topic
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {topics.map((topic) => (
              <TopicCard
                key={topic.id}
                topic={topic}
                leakCount={recentLeaks.filter(leak => leak.topic_id === topic.id).length}
              />
            ))}
          </div>
        </section>

        {/* Recent Leaks Section */}
        <section>
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            Recent Leaks
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {recentLeaks.map((leak) => (
              <LeakCard key={leak.id} leak={leak} />
            ))}
          </div>
        </section>

        {/* Footer */}
        <footer className="mt-16 pt-8 border-t border-gray-200 dark:border-gray-700">
          <div className="text-center text-gray-500 dark:text-gray-400">
            <p className="mb-2">
              This is a satirical website for entertainment purposes only.
            </p>
            <p className="text-sm">
              All content is fictional and created for comedic purposes.
            </p>
          </div>
        </footer>
      </main>
    </div>
  )
}