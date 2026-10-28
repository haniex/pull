export type ProjectCategory = 'ALL' | 'WEB DESIGN' | 'BRANDING' | '3D' | 'EXPERIMENTAL';

export interface Project {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  category: ProjectCategory[];
  year: number;
  description: string;
  role: string[];
  challenge: string;
  concept: string;
  palette: string[];
  typography: string;
  coverGradient: string;
  accent: string;
  tags: string[];
  /** Real image paths relative to /public */
  coverImage: string;
  images: string[];
}

export const projects: Project[] = [
  {
    id: '1',
    slug: 'aether',
    title: 'AETHER',
    subtitle: 'Architectural Futures',
    category: ['WEB DESIGN', '3D'],
    year: 2025,
    description: 'A digital presence for a visionary architecture studio that designs spaces between reality and speculation.',
    role: ['Art Direction', 'Web Design', '3D Direction', 'Development'],
    challenge: 'Translate the poetic gravity of speculative architecture into an interactive digital environment that feels as precise as a blueprint and as atmospheric as a film still.',
    concept: 'The site becomes a living archive of light, volume and material. Navigation is spatial. Content is revealed through carefully orchestrated sequences of depth and silence.',
    palette: ['#0A0C10', '#1A1F2E', '#C8B89A', '#E8E4DC', '#4A5568'],
    typography: 'Neue Haas Grotesk + Custom Display',
    coverGradient: 'linear-gradient(145deg, #0A0C10 0%, #1A1F2E 40%, #2A3344 100%)',
    accent: '#C8B89A',
    tags: ['Architecture', 'WebGL', 'Editorial'],
    coverImage: 'images/projects/aether/cover.jpg',
    images: ['images/projects/aether/cover.jpg', 'images/projects/aether/detail-1.jpg'],
  },
  {
    id: '2',
    slug: 'lumiere',
    title: 'LUMIÈRE',
    subtitle: 'Luminous Beauty',
    category: ['BRANDING', 'WEB DESIGN'],
    year: 2025,
    description: 'Premium cosmetics brand identity and digital experience built around the physics of light on skin.',
    role: ['Brand Strategy', 'Identity', 'Packaging Direction', 'Digital Design'],
    challenge: 'Create a visual system that feels expensive without being cold, scientific without losing sensuality.',
    concept: 'Light as the primary material. Every surface, type treatment and motion sequence is designed to catch, refract or dissolve light.',
    palette: ['#F8F4F0', '#E8D5C4', '#C9A88A', '#2C2420', '#8B7355'],
    typography: 'Didot + Suisse Int\'l',
    coverGradient: 'linear-gradient(160deg, #F8F4F0 0%, #E8D5C4 50%, #C9A88A 100%)',
    accent: '#C9A88A',
    tags: ['Beauty', 'Identity', 'Luxury'],
    coverImage: 'images/projects/lumiere/cover.jpg',
    images: ['images/projects/lumiere/cover.jpg', 'images/projects/lumiere/detail-1.jpg'],
  },
  {
    id: '3',
    slug: 'nova',
    title: 'NØVA',
    subtitle: 'Signal Identity',
    category: ['BRANDING', 'EXPERIMENTAL'],
    year: 2024,
    description: 'Visual identity system for a deep-tech company operating at the edge of quantum sensing.',
    role: ['Identity System', 'Motion Language', 'Guidelines'],
    challenge: 'Make the invisible legible. Quantum phenomena need a graphic language that is rigorous yet human.',
    concept: 'A living mark that responds to data. Typography that behaves like a signal. A system designed to evolve with the science.',
    palette: ['#050508', '#12121A', '#00F0FF', '#7B61FF', '#FFFFFF'],
    typography: 'Space Grotesk + IBM Plex Mono',
    coverGradient: 'linear-gradient(135deg, #050508 0%, #12121A 50%, #1A1A2E 100%)',
    accent: '#00F0FF',
    tags: ['Tech', 'Identity', 'Motion'],
    coverImage: 'images/projects/nova/cover.jpg',
    images: ['images/projects/nova/cover.jpg', 'images/projects/nova/detail-1.jpg'],
  },
  {
    id: '4',
    slug: 'orbital',
    title: 'ORBITAL',
    subtitle: 'Beyond Atmosphere',
    category: ['WEB DESIGN', '3D', 'EXPERIMENTAL'],
    year: 2025,
    description: 'Interactive platform for a private space technology company exploring next-generation orbital infrastructure.',
    role: ['Creative Direction', '3D Experience', 'Interface Design', 'Development'],
    challenge: 'Communicate ambition and precision without falling into generic sci-fi clichés.',
    concept: 'The interface itself becomes orbital. Content drifts in controlled gravity. Depth is information.',
    palette: ['#03040A', '#0B0E1A', '#1E3A5F', '#4A90D9', '#E0F0FF'],
    typography: 'Monument Extended + Inter',
    coverGradient: 'linear-gradient(180deg, #03040A 0%, #0B0E1A 40%, #1E3A5F 100%)',
    accent: '#4A90D9',
    tags: ['Space', 'WebGL', 'Product'],
    coverImage: 'images/projects/orbital/cover.jpg',
    images: ['images/projects/orbital/cover.jpg', 'images/projects/orbital/detail-1.jpg'],
  },
  {
    id: '5',
    slug: 'form-object',
    title: 'FORM / OBJECT',
    subtitle: 'Material Studies',
    category: ['3D', 'BRANDING'],
    year: 2024,
    description: 'A collection of object studies and digital sculptures exploring the boundary between product and pure form.',
    role: ['3D Art Direction', 'Material Design', 'Presentation System'],
    challenge: 'Present physical objects in a digital space that feels more tactile than a photograph.',
    concept: 'Each piece is given its own gravitational field. Light is the only narrator.',
    palette: ['#111111', '#1C1C1C', '#A0A0A0', '#E8E8E8', '#5C5C5C'],
    typography: 'Helvetica Now Display',
    coverGradient: 'linear-gradient(145deg, #111111 0%, #1C1C1C 60%, #2A2A2A 100%)',
    accent: '#A0A0A0',
    tags: ['Product', 'CGI', 'Still Life'],
    coverImage: 'images/projects/form-object/cover.jpg',
    images: ['images/projects/form-object/cover.jpg', 'images/projects/form-object/detail-1.jpg'],
  },
  {
    id: '6',
    slug: 'solace',
    title: 'SOLACE',
    subtitle: 'Digital Wellness',
    category: ['WEB DESIGN', 'BRANDING'],
    year: 2025,
    description: 'A calm digital sanctuary for a wellness brand focused on nervous-system regulation and modern ritual.',
    role: ['Brand Identity', 'Experience Design', 'Motion System'],
    challenge: 'Design for the body, not just the eye. Every interaction should lower rather than raise arousal.',
    concept: 'Soft geometry, restrained motion, and a color system derived from natural circadian cycles.',
    palette: ['#F5F2EB', '#E6E0D4', '#8B9A7D', '#3D4A3A', '#C4B8A5'],
    typography: 'Söhne + Freight Text',
    coverGradient: 'linear-gradient(160deg, #F5F2EB 0%, #E6E0D4 50%, #C4B8A5 100%)',
    accent: '#8B9A7D',
    tags: ['Wellness', 'Identity', 'Calm'],
    coverImage: 'images/projects/solace/cover.jpg',
    images: ['images/projects/solace/cover.jpg', 'images/projects/solace/detail-1.jpg'],
  },
  {
    id: '7',
    slug: 'afterglow',
    title: 'AFTERGLOW',
    subtitle: 'Sonic Visuals',
    category: ['EXPERIMENTAL', '3D'],
    year: 2024,
    description: 'A visual identity and live system for an electronic music project exploring residual light and delayed memory.',
    role: ['Visual Identity', 'Live Visuals Direction', 'Generative Systems'],
    challenge: 'Create a visual language that feels like the afterimage of sound.',
    concept: 'Phosphorescent marks, delayed motion, and compositions that only resolve after the beat has passed.',
    palette: ['#0D0A12', '#1A1525', '#FF2E63', '#08D9D6', '#EAEAEA'],
    typography: 'Druk + ABC Diatype',
    coverGradient: 'linear-gradient(135deg, #0D0A12 0%, #1A1525 40%, #2A1F3D 100%)',
    accent: '#FF2E63',
    tags: ['Music', 'Generative', 'Live'],
    coverImage: 'images/projects/afterglow/cover.jpg',
    images: ['images/projects/afterglow/cover.jpg', 'images/projects/afterglow/detail-1.jpg'],
  },
  {
    id: '8',
    slug: 'monolith',
    title: 'MONOLITH',
    subtitle: 'Experimental Architecture',
    category: ['WEB DESIGN', '3D', 'EXPERIMENTAL'],
    year: 2025,
    description: 'Digital home for a studio that treats architecture as long-duration sculpture and material research.',
    role: ['Art Direction', 'Web Experience', '3D Systems'],
    challenge: 'Give weight and silence to a medium that usually rewards speed and novelty.',
    concept: 'The site is a single continuous volume. Content is excavated rather than scrolled.',
    palette: ['#0C0C0C', '#1A1A1A', '#3D3D3D', '#B8B8B8', '#F0F0F0'],
    typography: 'GT America + Custom Serif',
    coverGradient: 'linear-gradient(180deg, #0C0C0C 0%, #1A1A1A 50%, #2A2A2A 100%)',
    accent: '#B8B8B8',
    tags: ['Architecture', 'Sculpture', 'Research'],
    coverImage: 'images/projects/monolith/cover.jpg',
    images: ['images/projects/monolith/cover.jpg', 'images/projects/monolith/detail-1.jpg'],
  },
];

export const categories: ProjectCategory[] = [
  'ALL',
  'WEB DESIGN',
  'BRANDING',
  '3D',
  'EXPERIMENTAL',
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getNextProject(currentSlug: string): Project | undefined {
  const idx = projects.findIndex((p) => p.slug === currentSlug);
  if (idx === -1) return undefined;
  return projects[(idx + 1) % projects.length];
}
