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
    title: 'Anderson Rueda | Desarrollador Full Stack Angular, Astro y Java en Colombia',
    description: `Desarrollador Full Stack en Barranquilla, Colombia: ${YEARS}+ años con Angular, Astro, Java, Node.js y NestJS. Freelance y disponible para empresas, remoto o presencial.`,
    keywords:
      'desarrollador full stack Colombia, desarrollador Angular Colombia, desarrollador Java Colombia, desarrollador Astro, desarrollador frontend Colombia, desarrollador de software Barranquilla, desarrollador web freelance, desarrollador remoto Colombia, programador freelance Barranquilla, páginas web Barranquilla, Anderson Rueda',
    siteName: 'Anderson Rueda - Desarrollador de Software',
    personJobTitle: 'Desarrollador Full Stack (Angular, Java, Node.js)',
    personDescription: `Desarrollador de software Full Stack en Barranquilla, Colombia, con ${YEARS}+ años de experiencia en Angular, Astro, Java, TypeScript, Node.js, NestJS y bases de datos SQL y NoSQL. Disponible para proyectos freelance y para empresas de Colombia y del exterior, de forma remota, híbrida o presencial.`,
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
    title: 'Anderson Rueda | Remote Full Stack Developer, Angular & Java · Colombia',
    description: `Full Stack developer from Colombia with ${YEARS}+ years in Angular, Astro, Java, TypeScript, Node.js and NestJS. Available for remote roles and freelance projects.`,
    keywords:
      'remote full stack developer Colombia, remote frontend developer LATAM, hire Angular developer, Java developer Colombia, Astro developer, TypeScript developer Colombia, Node.js developer, freelance web developer, nearshore software developer, Barranquilla software developer, Anderson Rueda',
    siteName: 'Anderson Rueda - Software Developer',
    personJobTitle: 'Full Stack Developer (Angular, Java, Node.js)',
    personDescription: `Full Stack software developer based in Barranquilla, Colombia, with ${YEARS}+ years of experience in Angular, Astro, Java, TypeScript, Node.js, NestJS and SQL/NoSQL databases. Available for freelance projects and full-time roles with companies in Colombia and abroad, remote, hybrid or on-site.`,
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
