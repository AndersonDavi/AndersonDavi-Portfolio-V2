import { YEARS } from './site';

export const translations = {
  es: {
    nav: {
      home: 'Inicio',
      about: 'Sobre mí',
      experience: 'Experiencia',
      skills: 'Skills',
      projects: 'Proyectos',
      contact: 'Contacto',
    },
    resume: {
      url: '/files/resume-es.pdf',
      text: 'Hoja de vida',
    },
    marquee: 'Curriculum vitae -',
    about: {
      title: '¡Hola #mundo#!',
      text1:
        `Soy Anderson Rueda, #desarrollador de software# en Barranquilla con ${YEARS}+ años de experiencia. Me especializo en frontend y full stack: convierto tus ideas en herramientas digitales eficientes y con estilo que agilizan tu trabajo`,
      text2:
        'Me encuentro constantemente #aprendiendo# cosas nuevas y afrontando retos',
    },
    experience: {
      education: {
        title: 'Educación',
        items: [
          {
            title: 'Bachiller',
            date_range: '2014 - 2020',
            description:
              'Institución Colombiana de Educación para el Talento Humano - ICETEC',
          },
          {
            title: 'Técnico en Programación de Software',
            date_range: '2021 - 2022',
            description: 'Centro Colombo Alemán – SENA',
          },
          {
            title: 'Tecnólogo en Análisis y Desarrollo de Software',
            date_range: '2022 - 2024',
            description: 'Centro Colombo Alemán – SENA',
          },
          {
            title: 'Tecnólogo en Desarrollo de Software',
            date_range: '2025 - 2026',
            description:
              'Corporación Universitaria Politécnico Costa Atlántica (PCA)',
          },
          {
            title: 'Ingeniería de Sistemas - En curso',
            date_range: '2026 - Actualidad',
            description:
              'Corporación Universitaria Politécnico Costa Atlántica (PCA)',
          },
        ],
      },
      work: {
        title: 'Experiencia laboral',
        items: [
          {
            title: 'Desarrollador Frontend',
            description:
              'SENA | Diseño de mockups e interfaces para web de DigibootCamp, iniciativa como plataforma para cursos cortos y bootcamps de programación',
            date_range: '2022 ene - 2022 jun',
          },
          {
            title: 'Analista de Sistemas',
            description:
              'Gestión Laboral S.A.S | Desarrollo de sistema ATS con Angular, Node.js y PostgreSQL. Automatización de procesos con Power Platform, administración de bases de datos SQL Server y despliegue en AWS.',
            date_range: '2022 ago - 2025 ago',
          },
          {
            title: 'Java Developer Engineer',
            description:
              'Activos S.A.S | Desarrollo frontend con Angular y backend con Node.js/NestJS. Manejo de Firestore, integración con APIs REST y despliegue en GCP bajo metodologías Scrum.',
            date_range: '2025 ago - Actualidad',
          },
        ],
      },
    },
    projectsTitle: 'PORTA#FOLIO#',
    contact: {
      title: '¡CONTÁCTAME!',
      text1: 'Hagamos #realidad# tus ideas',
      text2: '¡Todo listo!',
      text3: 'Nos estaremos comunicando contigo',
      text4: 'Algo salió mal :(',
      text5:
        'No pudimos enviar directamente tu mensaje, pero puedes contactarme en mis redes sociales o enviarme un mensaje directo a mi correo',
      form: {
        name: 'Nombre',
        email: 'Correo',
        message: 'Mensaje',
        send: 'Enviar',
      },
    },
  },
  en: {
    nav: {
      home: 'Home',
      about: 'About me',
      experience: 'Experience',
      skills: 'Skills',
      projects: 'Projects',
      contact: 'Contact',
    },
    resume: {
      url: '/files/resume-en.pdf',
      text: 'Resume',
    },
    marquee: 'Resume -',
    about: {
      title: 'Hello #World!#',
      text1:
        `I'm Anderson Rueda, a #software developer# from Barranquilla, Colombia, with ${YEARS}+ years of experience. I specialize in frontend and full stack work, turning your ideas into efficient, stylish digital tools that streamline your work.`,
      text2:
        "I'm constantly #learning# new things and tackling new challenges.",
    },
    experience: {
      education: {
        title: 'Education',
        items: [
          {
            title: 'High School Diploma',
            date_range: '2014 - 2020',
            description:
              'Institución Colombiana de Educación para el Talento Humano - ICETEC',
          },
          {
            title: 'Software Programming Technician',
            date_range: '2021 - 2022',
            description: 'Centro Colombo Alemán – SENA',
          },
          {
            title: 'Software Analysis and Development Technologist',
            date_range: '2022 - 2024',
            description: 'Centro Colombo Alemán – SENA',
          },
          {
            title: 'Software Development Technologist',
            date_range: '2025 - 2026',
            description:
              'Corporación Universitaria Politécnico Costa Atlántica (PCA)',
          },
          {
            title: 'Systems Engineering - In progress',
            date_range: '2026 - Present',
            description:
              'Corporación Universitaria Politécnico Costa Atlántica (PCA)',
          },
        ],
      },
      work: {
        title: 'Work Experience',
        items: [
          {
            title: 'Frontend Developer',
            description:
              'SENA | Design of mockups and web interfaces for DigibootCamp, an initiative as a platform for short courses and programming bootcamps',
            date_range: 'Jan 2022 - Jun 2022',
          },
          {
            title: 'Systems Analyst',
            description:
              'Gestión Laboral S.A.S | ATS system development with Angular, Node.js and PostgreSQL. Process automation with Power Platform, SQL Server database administration and deployment on AWS.',
            date_range: 'Aug 2022 - Aug 2025',
          },
          {
            title: 'Java Developer Engineer',
            description:
              'Activos S.A.S | Frontend development with Angular and backend with Node.js/NestJS. Firestore management, REST API integration and GCP deployment under Scrum methodologies.',
            date_range: 'Aug 2025 - Present',
          },
        ],
      },
    },
    projectsTitle: 'PORT#FOLIO#',
    contact: {
      title: 'CONTACT ME!',
      text1: "Let's bring your ideas to #reality#",
      text2: 'All set!',
      text3: 'We will be in touch with you',
      text4: 'Something went wrong :(',
      text5:
        "We can't send your message directly, but you can contact me via my social networks or send me a direct message to my email",
      form: {
        name: 'Name',
        email: 'Email',
        message: 'Message',
        send: 'Send',
      },
    },
  },
} as const;

export type Lang = keyof typeof translations;
export type Translations = typeof translations;
