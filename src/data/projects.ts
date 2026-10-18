import type { Lang } from './translations';

type Localized<T = string> = Record<Lang, T>;

export interface Project {
  slug: string;
  name: string;
  year: string;
  /** Panel background and the text color that reads on it. */
  color: string;
  ink: 'light' | 'dark';
  logo: string;
  client: Localized;
  location: Localized;
  category: Localized;
  role: Localized;
  summary: Localized;
  description: Localized;
  highlights: Localized<string[]>;
  stack: string[];
  demoUrl?: string;
  codeUrl?: string;
  mockupUrl?: string;
  /** Long full-page capture of the home page; apps without one show the gallery instead. */
  fullPage?: boolean;
  gallery: number;
  mobile: boolean;
}

export const projects: Project[] = [
  {
    slug: 'cotizador',
    name: 'Cotizador',
    year: '2026',
    color: '#15181e',
    ink: 'light',
    logo: 'logo-light.webp',
    client: { es: 'Proyecto propio', en: 'Personal product' },
    location: { es: 'Colombia', en: 'Colombia' },
    category: { es: 'Aplicación web (PWA) y CLI', en: 'Web app (PWA) and CLI' },
    role: { es: 'Producto, diseño UI/UX y desarrollo', en: 'Product, UI/UX design and development' },
    summary: {
      es: 'Generador de cotizaciones y cuentas de cobro en PDF para freelancers y agencias.',
      en: 'PDF quote and invoice generator for freelancers and agencies.',
    },
    description: {
      es: 'Herramienta gratuita para crear cotizaciones y cuentas de cobro con el logo, la firma y los colores de cada marca, exportarlas en PDF o enviarlas por WhatsApp. Funciona sin backend ni registro: los datos viven en el navegador, con respaldo opcional en Google Drive, y un CLI permite generar documentos desde la terminal o desde agentes de IA.',
      en: 'A free tool to create quotes and invoices with each brand’s logo, signature and colors, export them as PDF or send them over WhatsApp. It runs with no backend or sign-up: data lives in the browser, with optional Google Drive backup, and a CLI generates documents from the terminal or from AI agents.',
    },
    highlights: {
      es: [
        '11 plantillas que se pintan con solo dos colores de marca',
        'PDF vectorial con texto seleccionable y enlaces activos',
        'Estados del documento: borrador, enviada, aprobada, cobrada y pagada',
        'Respaldo en Google Drive con el permiso mínimo (drive.file)',
        'App instalable que funciona sin conexión',
        'CLI multiplataforma que reutiliza el mismo motor de render',
      ],
      en: [
        '11 templates painted with just two brand colors',
        'Vector PDF with selectable text and working links',
        'Document states: draft, sent, approved, invoiced and paid',
        'Google Drive backup with the minimum scope (drive.file)',
        'Installable app that works offline',
        'Cross-platform CLI that reuses the same render engine',
      ],
    },
    stack: ['Astro', 'TypeScript', 'JavaScript', 'HTML', 'CSS', 'Node.js'],
    demoUrl: 'https://cotizador.andersonrueda.com/',
    codeUrl: 'https://github.com/AndersonDavi/Cotizador',
    fullPage: false,
    gallery: 6,
    mobile: true,
  },
  {
    slug: 'tecniart',
    name: 'Tecniart',
    year: '2026',
    color: '#11296b',
    ink: 'light',
    logo: 'logo-light.webp',
    client: { es: 'Industrias Metálicas Tecniart S.A.S.', en: 'Industrias Metálicas Tecniart S.A.S.' },
    location: { es: 'Santa Marta, Colombia', en: 'Santa Marta, Colombia' },
    category: { es: 'Catálogo web con CMS', en: 'Product catalog with CMS' },
    role: { es: 'Diseño UI y desarrollo web', en: 'UI design and web development' },
    summary: {
      es: 'Catálogo de productos en acero inoxidable con carrito de pedidos por WhatsApp.',
      en: 'Stainless steel product catalog with a WhatsApp ordering cart.',
    },
    description: {
      es: 'Sitio web para un fabricante de mesas, estanterías, equipos y muebles en acero inoxidable. Cada producto tiene su propia página optimizada para buscadores, el catálogo se filtra por categoría y subcategoría, y el carrito arma el pedido y lo envía por WhatsApp. Todo el contenido lo administra el cliente desde Sanity, con una guía de uso entregada junto al sitio.',
      en: 'Website for a manufacturer of stainless steel tables, shelving, equipment and furniture. Every product has its own search-optimized page, the catalog filters by category and subcategory, and the cart builds the order and sends it over WhatsApp. The client manages all the content from Sanity, with a user guide delivered alongside the site.',
    },
    highlights: {
      es: [
        'Página estática por producto, con datos estructurados para SEO',
        'Catálogo con categorías, subcategorías y buscador',
        'Carrito que envía el pedido completo por WhatsApp',
        'Contenido administrable en Sanity CMS',
        'Despliegue automatizado con script de build y subida',
      ],
      en: [
        'Static page per product, with structured data for SEO',
        'Catalog with categories, subcategories and search',
        'Cart that sends the full order over WhatsApp',
        'Content managed in Sanity CMS',
        'Automated deployment with a build-and-upload script',
      ],
    },
    stack: ['Astro', 'TypeScript', 'Tailwind', 'Sanity'],
    demoUrl: 'https://industriastecniart.com/',
    fullPage: true,
    gallery: 4,
    mobile: true,
  },
  {
    slug: 'benitech',
    name: 'Benitech',
    year: '2026',
    color: '#1747d5',
    ink: 'light',
    logo: 'logo-light.webp',
    client: { es: 'Benitech', en: 'Benitech' },
    location: { es: 'Colombia', en: 'Colombia' },
    category: { es: 'Catálogo web B2B', en: 'B2B product catalog' },
    role: { es: 'Diseño UI, desarrollo web y migración a Astro', en: 'UI design, web development and Astro migration' },
    summary: {
      es: 'Catálogo de insumos de impresión y tecnología con buscador, filtros y canal de distribuidores.',
      en: 'Printing supplies and tech catalog with search, filters and a distributor channel.',
    },
    description: {
      es: 'Sitio web para un importador de tóner, insumos de impresión y equipos de cómputo con cobertura nacional. Empezó como una SPA en Angular y lo migré a Astro para generar una página estática por producto, con JSON-LD y sitemap, de modo que cada referencia pueda posicionarse en Google. Incluye buscador, filtros por categoría, carrito por WhatsApp y una sección para captar distribuidores.',
      en: 'Website for an importer of toner, printing supplies and computers with nationwide coverage. It started as an Angular SPA and I migrated it to Astro to generate a static page per product, with JSON-LD and a sitemap, so every item can rank on Google. It includes search, category filters, a WhatsApp cart and a section to recruit distributors.',
    },
    highlights: {
      es: [
        'Migración de Angular a Astro para SEO: una página por producto',
        'Catálogo de más de 150 referencias con buscador y filtros',
        'Carrito de cotización que se envía por WhatsApp',
        'Formulario y página para nuevos distribuidores',
        'Marca y contenido gestionables en Sanity CMS',
      ],
      en: [
        'Angular to Astro migration for SEO: one page per product',
        'Catalog of 150+ items with search and filters',
        'Quote cart sent over WhatsApp',
        'Form and landing page for new distributors',
        'Brand and content managed in Sanity CMS',
      ],
    },
    stack: ['Astro', 'Angular', 'TypeScript', 'Tailwind', 'Sanity'],
    demoUrl: 'https://benitechst.com/',
    fullPage: true,
    gallery: 3,
    mobile: true,
  },
  {
    slug: 'diversa-experiences',
    name: 'Diversa Experiences',
    year: '2026',
    color: '#023047',
    ink: 'light',
    logo: 'logo-light.webp',
    client: { es: 'Diversa Experiences', en: 'Diversa Experiences' },
    location: { es: 'Cartagena de Indias, Colombia', en: 'Cartagena de Indias, Colombia' },
    category: { es: 'Sitio web de turismo', en: 'Tourism website' },
    role: { es: 'Diseño UI y desarrollo web', en: 'UI design and web development' },
    summary: {
      es: 'Sitio de una agencia de turismo en Cartagena con pasadías, tours y reservas por WhatsApp.',
      en: 'Cartagena tour agency website with day passes, tours and WhatsApp bookings.',
    },
    description: {
      es: 'Sitio web para una agencia de turismo receptivo LGBTQ+ friendly en Cartagena. Organiza más de 20 experiencias en pasadías, playas y salidas fuera de la ciudad; cada destino tiene su página con horarios, lo que incluye y precio, y la reserva se cierra por WhatsApp. El contenido se administra en Sanity y el sitio está optimizado para búsquedas locales.',
      en: 'Website for an LGBTQ+ friendly inbound tour agency in Cartagena. It organizes 20+ experiences into day passes, beaches and trips outside the city; each destination has its own page with schedule, inclusions and price, and bookings close over WhatsApp. Content is managed in Sanity and the site is optimized for local search.',
    },
    highlights: {
      es: [
        'Más de 20 experiencias organizadas por categoría',
        'Página por destino con horarios, inclusiones y precios',
        'Reservas directas por WhatsApp',
        'Contenido administrable en Sanity CMS',
        'Animaciones de scroll y SEO local',
      ],
      en: [
        '20+ experiences organized by category',
        'Page per destination with schedule, inclusions and prices',
        'Direct bookings over WhatsApp',
        'Content managed in Sanity CMS',
        'Scroll animations and local SEO',
      ],
    },
    stack: ['Astro', 'TypeScript', 'Tailwind', 'Sanity'],
    demoUrl: 'https://www.diversaexperience.com/',
    fullPage: true,
    gallery: 3,
    mobile: true,
  },
  {
    slug: 'klaystone',
    name: 'Klaystone Business Solutions',
    year: '2025',
    color: '#0f3d77',
    ink: 'light',
    logo: 'logo-light.webp',
    client: { es: 'Klaystone Business Solutions', en: 'Klaystone Business Solutions' },
    location: { es: 'Charlotte, Carolina del Norte, EE. UU.', en: 'Charlotte, North Carolina, USA' },
    category: { es: 'Sitio corporativo bilingüe', en: 'Bilingual corporate website' },
    role: { es: 'Desarrollo web', en: 'Web development' },
    summary: {
      es: 'Sitio bilingüe (inglés y español) para una firma de contabilidad e impuestos en Estados Unidos.',
      en: 'Bilingual (English and Spanish) website for an accounting and tax firm in the United States.',
    },
    description: {
      es: 'Sitio corporativo para una firma de contabilidad, nómina e impuestos en Carolina del Norte. Está en inglés y español, con URLs por idioma y etiquetas hreflang; las páginas de cada servicio se generan desde una sola fuente de contenido, y las secciones aparecen con animaciones al hacer scroll.',
      en: 'Corporate website for an accounting, payroll and tax firm in North Carolina. It is available in English and Spanish, with per-language URLs and hreflang tags; each service page is generated from a single content source, and sections animate in on scroll.',
    },
    highlights: {
      es: [
        'Sitio bilingüe con URLs por idioma y hreflang',
        'Páginas de servicio generadas desde una sola fuente de contenido',
        'Animaciones de scroll con AnimeJS',
        'SEO técnico con JSON-LD y sitemap',
        'Cliente en Estados Unidos, trabajo 100 % remoto',
      ],
      en: [
        'Bilingual site with per-language URLs and hreflang',
        'Service pages generated from a single content source',
        'Scroll animations with AnimeJS',
        'Technical SEO with JSON-LD and sitemap',
        'US-based client, fully remote collaboration',
      ],
    },
    stack: ['Astro', 'TypeScript', 'Tailwind', 'AnimeJS', 'Vercel'],
    demoUrl: 'https://www.klaysolutions.com/',
    fullPage: true,
    gallery: 3,
    mobile: true,
  },
  {
    slug: 'empleo-grupologis',
    name: 'Empleo Grupologis',
    year: '2022 – 2025',
    color: '#e45b00',
    ink: 'light',
    logo: 'logo-light.webp',
    client: { es: 'Gestión Laboral S.A.S. (Grupo Logis)', en: 'Gestión Laboral S.A.S. (Grupo Logis)' },
    location: { es: 'Barranquilla, Colombia', en: 'Barranquilla, Colombia' },
    category: { es: 'Plataforma de reclutamiento (ATS)', en: 'Recruitment platform (ATS)' },
    role: { es: 'Desarrollo frontend y diseño de interfaces', en: 'Frontend development and UI design' },
    summary: {
      es: 'Portal de empleo y sistema ATS para publicar vacantes y gestionar candidatos.',
      en: 'Job board and ATS to publish openings and manage candidates.',
    },
    description: {
      es: 'Plataforma de reclutamiento y selección de Grupo Logis, donde los candidatos buscan vacantes, se registran y se postulan, y el equipo de selección gestiona el proceso. Participé en el desarrollo del frontend en Angular y en el diseño de sus interfaces: el buscador con filtros, el detalle de cada vacante, el blog, los casos de éxito y, recientemente, el rediseño de las tarjetas de vacantes y de varias vistas.',
      en: 'Grupo Logis’s recruitment platform, where candidates search openings, sign up and apply, and the hiring team manages the process. I took part in building the Angular frontend and designing its interfaces: the filtered job search, the job detail page, the blog, the success stories and, more recently, the redesign of the job cards and several views.',
    },
    highlights: {
      es: [
        'Buscador de vacantes con filtros por ciudad, salario y cargo',
        'Detalle de vacante, registro y postulación de candidatos',
        'Rediseño de tarjetas de vacantes y de varias interfaces',
        'Backend en Node.js con Express y base de datos PostgreSQL',
        'Despliegue y actualizaciones en AWS',
      ],
      en: [
        'Job search with filters by city, salary and role',
        'Job detail page, candidate sign-up and applications',
        'Redesign of the job cards and several interfaces',
        'Node.js backend with Express and a PostgreSQL database',
        'Deployment and updates on AWS',
      ],
    },
    stack: ['Angular', 'TypeScript', 'Node.js', 'Express', 'PostgreSQL', 'AWS', 'Figma'],
    demoUrl: 'https://www.empleogrupologis.com/',
    mockupUrl: 'https://www.figma.com/design/s3O6swXl11T40b6QyVEEIk/ATS?node-id=0-1&t=O7XBCs9gnpOtSysy-1',
    fullPage: true,
    gallery: 4,
    mobile: true,
  },
  {
    slug: 'ediciones-kaziyadu',
    name: 'Ediciones Kaziyadu',
    year: '2024',
    color: '#eb546c',
    ink: 'light',
    logo: 'logo-light.webp',
    client: { es: 'Ediciones Kaziyadu', en: 'Ediciones Kaziyadu' },
    location: { es: 'Barranquilla, Colombia', en: 'Barranquilla, Colombia' },
    category: { es: 'Sitio web editorial', en: 'Publisher website' },
    role: { es: 'Diseño UI y desarrollo web', en: 'UI design and web development' },
    summary: {
      es: 'Sitio de una editorial independiente con catálogo de libros de descarga gratuita.',
      en: 'Independent publisher website with a catalog of free-to-download books.',
    },
    description: {
      es: 'Sitio web de una editorial independiente que publica libros de psicoanálisis de descarga gratuita. Cada libro tiene su página con sinopsis, datos bibliográficos, versiones por idioma y PDF descargable. Lo construí primero en Angular y luego lo migré a Astro para mejorar el SEO y la velocidad de carga.',
      en: 'Website for an independent publisher of free-to-download psychoanalysis books. Every book has its own page with synopsis, bibliographic details, language versions and a downloadable PDF. I first built it in Angular and later migrated it to Astro to improve SEO and load speed.',
    },
    highlights: {
      es: [
        'Catálogo de 11 libros con descarga gratuita en PDF',
        'Página por libro con versiones por idioma',
        'Migración de Angular a Astro para SEO y velocidad',
        'Formulario de contacto',
        'Desplegado en Cloudflare Pages',
      ],
      en: [
        'Catalog of 11 books with free PDF downloads',
        'Page per book with language versions',
        'Angular to Astro migration for SEO and speed',
        'Contact form',
        'Deployed on Cloudflare Pages',
      ],
    },
    stack: ['Astro', 'Angular', 'TypeScript', 'Tailwind', 'Cloudflare'],
    demoUrl: 'https://kaziyadu.com/',
    fullPage: true,
    gallery: 3,
    mobile: true,
  },
];

export function getProject(slug: string): Project | undefined {
  return projects.find(p => p.slug === slug);
}

export function projectImage(project: Project, file: string): string {
  return `/projects/${project.slug}/${file}`;
}
