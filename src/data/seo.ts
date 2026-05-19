import type { Lang } from './translations';

const baseUrl = 'https://andersonrueda.com';

export const seoByLang = {
  es: {
    lang: 'es',
    languageMeta: 'es',
    canonical: `${baseUrl}/`,
    ogLocale: 'es_CO',
    alternateLocale: 'en_US',
    title: 'Anderson Rueda | Desarrollador Angular & Full Stack | Barranquilla, Colombia',
    description:
      'Anderson Rueda, Desarrollador Angular, Frontend y Full Stack. Tecnico y Tecnologo en Analisis y Desarrollo de Software por el SENA. Barranquilla, Colombia. Especializado en Angular, TypeScript, Node.js, NestJS, SQL Server.',
    keywords:
      'Anderson Rueda, Desarrollador Angular Barranquilla, Desarrollador Frontend Colombia, Desarrollador Full Stack Barranquilla, Tecnico Desarrollo Software Colombia, Tecnologo Analisis Desarrollo Software SENA, Angular developer Colombia, programador web Barranquilla, desarrollador TypeScript Colombia, NestJS developer, desarrollador backend Colombia, portafolio desarrollador software',
    siteName: 'Anderson Rueda - Desarrollador Full Stack',
    personJobTitle: 'Desarrollador Full Stack - Angular, TypeScript, Node.js, NestJS',
    personDescription:
      'Desarrollador Angular, Frontend y Full Stack. Tecnico y Tecnologo en Analisis y Desarrollo de Software por el SENA, Barranquilla, Colombia.',
    websiteName: 'Anderson Rueda - Portafolio Desarrollador Full Stack',
    websiteDescription:
      'Portafolio personal de Anderson Rueda, desarrollador Angular, Frontend y Full Stack en Barranquilla, Colombia. Tecnico y Tecnologo en Analisis y Desarrollo de Software SENA.',
    alumniDescription: 'Servicio Nacional de Aprendizaje - Tecnico y Tecnologo en Analisis y Desarrollo de Software',
    faq: [
      {
        question: 'Que tecnologias domina Anderson Rueda?',
        answer:
          'Anderson Rueda es desarrollador especializado en Angular, TypeScript, JavaScript, Node.js, NestJS, SQL Server, MySQL, Docker y AWS. Tecnico y Tecnologo en Analisis y Desarrollo de Software egresado del SENA.',
      },
      {
        question: 'Donde esta ubicado Anderson Rueda como desarrollador?',
        answer:
          'Anderson Rueda es un desarrollador full stack ubicado en Barranquilla, Atlantico, Colombia. Disponible para proyectos remotos y presenciales en la region Caribe colombiana.',
      },
      {
        question: 'Que formacion academica tiene Anderson Rueda?',
        answer:
          'Anderson Rueda es Tecnico y Tecnologo en Analisis y Desarrollo de Software del SENA. Cuenta con formacion practica en desarrollo frontend, backend y bases de datos.',
      },
      {
        question: 'Que tipo de proyectos ha desarrollado Anderson Rueda?',
        answer:
          'Ha colaborado en proyectos ATS para publicacion de ofertas de empleo, plataformas web para editoriales, aplicaciones con APIs externas como GIPHY, y automatizacion de procesos con Power Platform en entornos empresariales.',
      },
      {
        question: 'Como contactar a Anderson Rueda para proyectos de desarrollo?',
        answer:
          'Puedes contactar a Anderson Rueda a traves del formulario en su portafolio andersonrueda.com, por correo a contactoandersonrueda@gmail.com, o por LinkedIn en anderson-david-rueda-consuegra.',
      },
    ],
  },
  en: {
    lang: 'en',
    languageMeta: 'en',
    canonical: `${baseUrl}/en/`,
    ogLocale: 'en_US',
    alternateLocale: 'es_CO',
    title: 'Anderson Rueda | Angular & Full Stack Developer | Barranquilla, Colombia',
    description:
      'Anderson Rueda, Angular, Frontend and Full Stack Developer based in Barranquilla, Colombia. Specialized in Angular, TypeScript, Node.js, NestJS, SQL Server and modern web applications.',
    keywords:
      'Anderson Rueda, Angular developer Colombia, Frontend developer Colombia, Full Stack developer Barranquilla, TypeScript developer Colombia, Node.js developer, NestJS developer, software developer portfolio, web developer Barranquilla',
    siteName: 'Anderson Rueda - Full Stack Developer',
    personJobTitle: 'Full Stack Developer - Angular, TypeScript, Node.js, NestJS',
    personDescription:
      'Angular, Frontend and Full Stack Developer based in Barranquilla, Colombia. Specialized in web application development with Angular, TypeScript, Node.js and NestJS.',
    websiteName: 'Anderson Rueda - Full Stack Developer Portfolio',
    websiteDescription:
      'Personal portfolio of Anderson Rueda, Angular, Frontend and Full Stack Developer based in Barranquilla, Colombia.',
    alumniDescription: 'National Learning Service - Software Analysis and Development training',
    faq: [
      {
        question: 'What technologies does Anderson Rueda work with?',
        answer:
          'Anderson Rueda specializes in Angular, TypeScript, JavaScript, Node.js, NestJS, SQL Server, MySQL, Docker and AWS.',
      },
      {
        question: 'Where is Anderson Rueda based?',
        answer:
          'Anderson Rueda is a full stack developer based in Barranquilla, Atlantico, Colombia, available for remote and local software projects.',
      },
      {
        question: 'What is Anderson Rueda academic background?',
        answer:
          'Anderson Rueda has technical and technologist training in software analysis and development, with practical experience in frontend, backend and databases.',
      },
      {
        question: 'What kind of projects has Anderson Rueda built?',
        answer:
          'He has worked on ATS job posting platforms, editorial websites, API-based applications such as GIPHY projects, and business process automation with Power Platform.',
      },
      {
        question: 'How can I contact Anderson Rueda for a software project?',
        answer:
          'You can contact Anderson Rueda through the form on andersonrueda.com, by email at contactoandersonrueda@gmail.com, or through LinkedIn.',
      },
    ],
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

export function createFaqSchema(lang: Lang) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: seoByLang[lang].faq.map(item => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  };
}
