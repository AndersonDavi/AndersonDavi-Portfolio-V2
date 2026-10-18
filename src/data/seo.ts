import type { Lang } from './translations';
import { YEARS } from './site';

export const baseUrl = 'https://www.andersonrueda.com';

export const seoByLang = {
  es: {
    lang: 'es',
    languageMeta: 'es',
    canonical: `${baseUrl}/`,
    ogLocale: 'es_CO',
    alternateLocale: 'en_US',
    title: 'Anderson Rueda | Desarrollador de Software Full Stack en Barranquilla, Colombia',
    description: `Desarrollador de software Frontend y Full Stack en Barranquilla, Colombia, con ${YEARS}+ años de experiencia en Angular, Astro, TypeScript, Node.js y NestJS. Desarrollo web freelance y disponible para empresas.`,
    keywords:
      'desarrollador de software Barranquilla, desarrollador web Barranquilla, desarrollador frontend Colombia, desarrollador full stack Colombia, desarrollador Angular Barranquilla, desarrollador Astro, programador freelance Barranquilla, páginas web Barranquilla, Anderson Rueda',
    siteName: 'Anderson Rueda - Desarrollador de Software',
    personJobTitle: 'Desarrollador de Software Full Stack',
    personDescription: `Desarrollador de software Frontend y Full Stack en Barranquilla, Colombia, con ${YEARS}+ años de experiencia en Angular, Astro, TypeScript, Node.js, NestJS y bases de datos SQL y NoSQL.`,
    websiteName: 'Anderson Rueda - Portafolio de Desarrollador de Software',
    websiteDescription:
      'Portafolio de Anderson Rueda, desarrollador de software Frontend y Full Stack en Barranquilla, Colombia: proyectos, servicios y experiencia.',
    alumniDescription: 'Servicio Nacional de Aprendizaje - Tecnólogo en Análisis y Desarrollo de Software',
  },
  en: {
    lang: 'en',
    languageMeta: 'en',
    canonical: `${baseUrl}/en/`,
    ogLocale: 'en_US',
    alternateLocale: 'es_CO',
    title: 'Anderson Rueda | Remote Full Stack Developer from Colombia',
    description: `Frontend and Full Stack software developer from Barranquilla, Colombia, with ${YEARS}+ years of experience in Angular, Astro, TypeScript, Node.js and NestJS. Available for remote roles and freelance projects.`,
    keywords:
      'remote full stack developer Colombia, remote frontend developer LATAM, hire Angular developer, Astro developer, TypeScript developer Colombia, Node.js developer, nearshore software developer, Barranquilla software developer, Anderson Rueda',
    siteName: 'Anderson Rueda - Software Developer',
    personJobTitle: 'Full Stack Software Developer',
    personDescription: `Frontend and Full Stack software developer based in Barranquilla, Colombia, with ${YEARS}+ years of experience in Angular, Astro, TypeScript, Node.js, NestJS and SQL/NoSQL databases.`,
    websiteName: 'Anderson Rueda - Software Developer Portfolio',
    websiteDescription:
      'Portfolio of Anderson Rueda, a Frontend and Full Stack software developer from Colombia: projects, services and experience.',
    alumniDescription: 'National Learning Service (SENA) - Software Analysis and Development Technologist',
  },
} as const;

export const alternateUrls = {
  es: `${baseUrl}/`,
  en: `${baseUrl}/en/`,
  default: `${baseUrl}/`,
} as const;

export function getSeo(lang: Lang) {
  return seoByLang[lang];
}
