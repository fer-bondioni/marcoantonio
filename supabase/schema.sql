-- Create topics table
CREATE TABLE topics (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  description TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create leaks table
CREATE TABLE leaks (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  topic_id UUID REFERENCES topics(id) ON DELETE CASCADE,
  title VARCHAR(500) NOT NULL,
  audio_url TEXT NOT NULL,
  transcript TEXT,
  image_url TEXT,
  synopsis TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create indexes for better performance
CREATE INDEX idx_leaks_topic_id ON leaks(topic_id);
CREATE INDEX idx_leaks_created_at ON leaks(created_at DESC);

-- Insert sample data
INSERT INTO topics (name, description) VALUES
('Political Scandals', 'Audio recordings of political figures in compromising situations'),
('Corporate Secrets', 'Behind-the-scenes corporate conversations and decisions'),
('Celebrity Gossip', 'Private conversations and revelations from public figures'),
('Tech Industry', 'Internal discussions and leaked tech company communications');

INSERT INTO leaks (topic_id, title, audio_url, transcript, image_url, synopsis) VALUES
(
  (SELECT id FROM topics WHERE name = 'Political Scandals' LIMIT 1),
  'Mayor''s Late Night Confession',
  '/audio/mayor-confession.mp3',
  'MAYOR: "I never thought anyone would find out about the parking meter scandal..."',
  '/images/mayor-thumbnail.jpg',
  'A shocking audio recording reveals the mayor discussing a parking meter embezzlement scheme during a late-night phone call.'
),
(
  (SELECT id FROM topics WHERE name = 'Corporate Secrets' LIMIT 1),
  'CEO''s Honest Assessment',
  '/audio/ceo-assessment.mp3',
  'CEO: "Our product is basically garbage, but people keep buying it..."',
  '/images/ceo-thumbnail.jpg',
  'An internal meeting recording shows the CEO candidly discussing product quality issues and customer satisfaction.'
),
(
  (SELECT id FROM topics WHERE name = 'Celebrity Gossip' LIMIT 1),
  'Actor''s Real Opinion on Co-Stars',
  '/audio/actor-opinion.mp3',
  'ACTOR: "Working with them was like trying to act opposite a brick wall..."',
  '/images/actor-thumbnail.jpg',
  'A leaked recording from a private conversation reveals an actor''s brutally honest thoughts about their co-stars.'
);
