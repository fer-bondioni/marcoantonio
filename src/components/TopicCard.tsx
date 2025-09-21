'use client'

import Link from 'next/link'
import { ArrowRight, FileAudio } from 'lucide-react'
import { Topic } from '@/lib/supabase'

interface TopicCardProps {
  topic: Topic
  leakCount?: number
}

export default function TopicCard({ topic, leakCount = 0 }: TopicCardProps) {
  return (
    <Link href={`/topics/${topic.id}`} className="topic-card group">
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center space-x-3">
          <div className="p-3 bg-red-100 dark:bg-red-900/20 rounded-lg">
            <FileAudio className="h-6 w-6 text-red-600 dark:text-red-400" />
          </div>
          <div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white group-hover:text-red-600 dark:group-hover:text-red-400 transition-colors">
              {topic.name}
            </h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              {leakCount} {leakCount === 1 ? 'leak' : 'leaks'}
            </p>
          </div>
        </div>
        <ArrowRight className="h-5 w-5 text-gray-400 group-hover:text-red-600 dark:group-hover:text-red-400 transition-colors" />
      </div>

      <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
        {topic.description}
      </p>

      <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
        <div className="flex items-center text-sm text-red-600 dark:text-red-400 font-medium">
          Browse Leaks
          <ArrowRight className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" />
        </div>
      </div>
    </Link>
  )
}
