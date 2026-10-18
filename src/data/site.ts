import type { Lang } from './translations';

export const SITE_URL = 'https://www.andersonrueda.com';
export const EMAIL = 'contactoandersonrueda@gmail.com';
export const LINKEDIN = 'https://www.linkedin.com/in/anderson-david-rueda-consuegra-16b32821b/';
export const GITHUB = 'https://github.com/AndersonDavi';

/** First professional role (SENA, Jan 2022). Years of experience are derived from it at build time. */
const CAREER_START = new Date('2022-01-01');

export function yearsOfExperience(now = new Date()): number {
  const months = (now.getFullYear() - CAREER_START.getFullYear()) * 12 + now.getMonth() - CAREER_START.getMonth();
  return Math.floor(months / 12);
}

export const YEARS = yearsOfExperience();

export const routes = {
  home: { es: '/', en: '/en/' },
  about: { es: '/sobre-mi/', en: '/en/about/' },
  services: { es: '/servicios/', en: '/en/services/' },
  projects: { es: '/proyectos/', en: '/en/projects/' },
  faq: { es: '/preguntas-frecuentes/', en: '/en/faq/' },
} as const;

export type RouteKey = keyof typeof routes;

export function projectPath(slug: string, lang: Lang): string {
  return lang === 'es' ? `/proyectos/${slug}/` : `/en/projects/${slug}/`;
}

export function absolute(path: string): string {
  return `${SITE_URL}${path}`;
}

/** Hash link to a home section that works from any page. */
export function homeSection(id: string, lang: Lang): string {
  return `${routes.home[lang]}#${id}`;
}

export const ui = {
  es: {
    nav: { home: 'Inicio', about: 'Sobre mí', experience: 'Experiencia', skills: 'Skills', projects: 'Proyectos', services: 'Servicios', contact: 'Contacto', faq: 'Preguntas frecuentes' },
    footer: {
      tagline: `Desarrollador de software Frontend y Full Stack en Barranquilla, Colombia. ${YEARS}+ años creando aplicaciones web.`,
      pages: 'Páginas',
      contact: 'Contacto',
      rights: 'Todos los derechos reservados.',
    },
    breadcrumbHome: 'Inicio',
    cta: {
      title: '¿Tienes un proyecto en mente?',
      text: 'Cuéntame qué necesitas y te respondo con una propuesta. Trabajo como freelance y estoy abierto a ofertas de empleo presencial, híbrido o remoto.',
      contact: 'Escríbeme',
      services: 'Ver servicios',
    },
  },
  en: {
    nav: { home: 'Home', about: 'About me', experience: 'Experience', skills: 'Skills', projects: 'Projects', services: 'Services', contact: 'Contact', faq: 'FAQ' },
    footer: {
      tagline: `Frontend and Full Stack software developer based in Barranquilla, Colombia. ${YEARS}+ years building web applications.`,
      pages: 'Pages',
      contact: 'Contact',
      rights: 'All rights reserved.',
    },
    breadcrumbHome: 'Home',
    cta: {
      title: 'Have a project in mind?',
      text: "Tell me what you need and I'll get back to you with a proposal. I take freelance work and I'm open to full-time remote roles with companies anywhere.",
      contact: 'Get in touch',
      services: 'See services',
    },
  },
} as const;
