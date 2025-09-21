-- Update existing topics to Spanish
UPDATE topics SET 
  name = 'Escándalos Políticos',
  description = 'Grabaciones de audio de figuras políticas en situaciones comprometedoras'
WHERE name = 'Political Scandals';

UPDATE topics SET 
  name = 'Secretos Corporativos',
  description = 'Conversaciones y decisiones corporativas detrás de escena'
WHERE name = 'Corporate Secrets';

UPDATE topics SET 
  name = 'Chismes de Celebridades',
  description = 'Conversaciones privadas y revelaciones de figuras públicas'
WHERE name = 'Celebrity Gossip';

UPDATE topics SET 
  name = 'Industria Tecnológica',
  description = 'Discusiones internas y comunicaciones filtradas de empresas tecnológicas'
WHERE name = 'Tech Industry';

-- Update existing leaks to Spanish
UPDATE leaks SET 
  title = 'Confesión Nocturna del Alcalde',
  transcript = 'ALCALDE: "Nunca pensé que alguien descubriría el escándalo de los parquímetros..."',
  synopsis = 'Una grabación de audio impactante revela al alcalde discutiendo un esquema de malversación de parquímetros durante una llamada telefónica nocturna.'
WHERE title = 'Mayor''s Late Night Confession';

UPDATE leaks SET 
  title = 'Evaluación Honesta del CEO',
  transcript = 'CEO: "Nuestro producto es básicamente basura, pero la gente sigue comprándolo..."',
  synopsis = 'Una grabación de reunión interna muestra al CEO discutiendo francamente los problemas de calidad del producto y la satisfacción del cliente.'
WHERE title = 'CEO''s Honest Assessment';

UPDATE leaks SET 
  title = 'Opinión Real del Actor sobre sus Compañeros',
  transcript = 'ACTOR: "Trabajar con ellos fue como tratar de actuar frente a una pared de ladrillos..."',
  synopsis = 'Una grabación filtrada de una conversación privada revela los pensamientos brutalmente honestos de un actor sobre sus compañeros de reparto.'
WHERE title = 'Actor''s Real Opinion on Co-Stars';
