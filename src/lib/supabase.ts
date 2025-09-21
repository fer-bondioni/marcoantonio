import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://placeholder.supabase.co'
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'placeholder-key'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

// Database types
export interface Topic {
  id: string
  name: string
  description: string
  created_at: string
  leaks?: Leak[]
}

export interface Leak {
  id: string
  topic_id: string
  title: string
  audio_url: string
  transcript: string
  image_url?: string
  synopsis: string
  created_at: string
  updated_at: string
}

// Mock data for development
export const mockTopics: Topic[] = [
  {
    id: '1',
    name: 'Political Scandals',
    description: 'Audio recordings of political figures in compromising situations',
    created_at: '2024-01-01T00:00:00Z',
    leaks: []
  },
  {
    id: '2',
    name: 'Corporate Secrets',
    description: 'Behind-the-scenes corporate conversations and decisions',
    created_at: '2024-01-01T00:00:00Z',
    leaks: []
  },
  {
    id: '3',
    name: 'Celebrity Gossip',
    description: 'Private conversations and revelations from public figures',
    created_at: '2024-01-01T00:00:00Z',
    leaks: []
  },
  {
    id: '4',
    name: 'Tech Industry',
    description: 'Internal discussions and leaked tech company communications',
    created_at: '2024-01-01T00:00:00Z',
    leaks: []
  }
]

export const mockLeaks: Leak[] = [
  {
    id: '1',
    topic_id: '1',
    title: 'Mayor\'s Late Night Confession',
    audio_url: '/audio/mayor-confession.mp3',
    transcript: 'MAYOR: "I never thought anyone would find out about the parking meter scandal..."',
    image_url: '/images/mayor-thumbnail.jpg',
    synopsis: 'A shocking audio recording reveals the mayor discussing a parking meter embezzlement scheme during a late-night phone call.',
    created_at: '2024-01-01T00:00:00Z',
    updated_at: '2024-01-01T00:00:00Z'
  },
  {
    id: '2',
    topic_id: '2',
    title: 'CEO\'s Honest Assessment',
    audio_url: '/audio/ceo-assessment.mp3',
    transcript: 'CEO: "Our product is basically garbage, but people keep buying it..."',
    image_url: '/images/ceo-thumbnail.jpg',
    synopsis: 'An internal meeting recording shows the CEO candidly discussing product quality issues and customer satisfaction.',
    created_at: '2024-01-01T00:00:00Z',
    updated_at: '2024-01-01T00:00:00Z'
  },
  {
    id: '3',
    topic_id: '3',
    title: 'Actor\'s Real Opinion on Co-Stars',
    audio_url: '/audio/actor-opinion.mp3',
    transcript: 'ACTOR: "Working with them was like trying to act opposite a brick wall..."',
    image_url: '/images/actor-thumbnail.jpg',
    synopsis: 'A leaked recording from a private conversation reveals an actor\'s brutally honest thoughts about their co-stars.',
    created_at: '2024-01-01T00:00:00Z',
    updated_at: '2024-01-01T00:00:00Z'
  }
]
