import { createClient } from "@supabase/supabase-js";

const supabaseUrl =
  process.env.NEXT_PUBLIC_SUPABASE_URL || "https://placeholder.supabase.co";
const supabaseAnonKey =
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "placeholder-key";

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Database types
export interface Topic {
  id: string;
  name: string;
  description: string;
  created_at: string;
  leaks?: Leak[];
}

export interface Leak {
  id: string;
  topic_id: string;
  title: string;
  audio_url: string;
  transcript: string;
  image_url?: string;
  synopsis: string;
  created_at: string;
  updated_at: string;
}
