'use client'

import React from 'react'
import Link from 'next/link'
import { Play, FileText, Image, Calendar } from 'lucide-react'
import { Leak } from '@/lib/supabase'

interface LeakCardProps {
  leak: Leak
}

export default function LeakCard({ leak }: LeakCardProps) {

  return (
    <div className="leak-card">
      {leak.image_url && (
        <div className="relative h-48 bg-gray-200 dark:bg-gray-700 overflow-hidden">
          <img
            src={leak.image_url}
            alt={leak.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-20 flex items-center justify-center">
            <Play className="h-12 w-12 text-white opacity-80" />
          </div>
        </div>
      )}

      <div className="p-6">
        <div className="flex items-start justify-between mb-3">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white line-clamp-2">
            {leak.title}
          </h3>
          <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 ml-4">
            <Calendar className="h-4 w-4 mr-1" />
            {new Date(leak.created_at).toLocaleDateString()}
          </div>
        </div>

        <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 line-clamp-3">
          {leak.synopsis}
        </p>

        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4 text-sm text-gray-500 dark:text-gray-400">
            <div className="flex items-center">
              <Play className="h-4 w-4 mr-1" />
              Audio
            </div>
            {leak.transcript && (
              <div className="flex items-center">
                <FileText className="h-4 w-4 mr-1" />
                Transcripción
              </div>
            )}
            {leak.image_url && (
            <div className="flex items-center">
              <Image className="h-4 w-4 mr-1" />
              Imagen
            </div>
            )}
          </div>

          <Link
            href={`/leaks/${leak.id}`}
            className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700 transition-colors text-sm font-medium"
          >
            Ver Detalles
          </Link>
        </div>
      </div>
    </div>
  )
}
