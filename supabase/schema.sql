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
('Escándalos Políticos', 'Grabaciones de audio de figuras políticas en situaciones comprometedoras'),
('Secretos Corporativos', 'Conversaciones y decisiones corporativas detrás de escena'),
('Chismes de Celebridades', 'Conversaciones privadas y revelaciones de figuras públicas'),
('Industria Tecnológica', 'Discusiones internas y comunicaciones filtradas de empresas tecnológicas');

INSERT INTO leaks (topic_id, title, audio_url, transcript, image_url, synopsis) VALUES
(
  (SELECT id FROM topics WHERE name = 'Escándalos Políticos' LIMIT 1),
  'Confesión Nocturna del Alcalde',
  '/audio/mayor-confession.mp3',
  'ALCALDE: "Nunca pensé que alguien descubriría el escándalo de los parquímetros..."',
  '/images/mayor-thumbnail.jpg',
  'Una grabación de audio impactante revela al alcalde discutiendo un esquema de malversación de parquímetros durante una llamada telefónica nocturna.'
),
(
  (SELECT id FROM topics WHERE name = 'Secretos Corporativos' LIMIT 1),
  'Evaluación Honesta del CEO',
  '/audio/ceo-assessment.mp3',
  'CEO: "Nuestro producto es básicamente basura, pero la gente sigue comprándolo..."',
  '/images/ceo-thumbnail.jpg',
  'Una grabación de reunión interna muestra al CEO discutiendo francamente los problemas de calidad del producto y la satisfacción del cliente.'
),
(
  (SELECT id FROM topics WHERE name = 'Chismes de Celebridades' LIMIT 1),
  'Opinión Real del Actor sobre sus Compañeros',
  '/audio/actor-opinion.mp3',
  'ACTOR: "Trabajar con ellos fue como tratar de actuar frente a una pared de ladrillos..."',
  '/images/actor-thumbnail.jpg',
  'Una grabación filtrada de una conversación privada revela los pensamientos brutalmente honestos de un actor sobre sus compañeros de reparto.'
);
