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
        'Soy Anderson Rueda, #desarrollador web# dedicado y apasionado por el diseño, me especializo en convertir tus ideas en herramientas digitales eficientes y con estilo que agilizan tu trabajo',
      text2:
        'Me encuentro constantemente #aprendiendo# cosas nuevas y afrontando retos',
    },
    experience: {
      education: {
        title: 'Educación',
        items: [
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
            date_range: '2023 - 2026',
            description: 'Politécnico Costa Atlántica',
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
    projects: {
      title: 'Proyectos',
      items: [
        {
          id: 1,
          title: 'EMPLEO #GRUPOLOGIS#',
          description:
            'Colaboración en proyecto ATS para publicación de ofertas de empleo, corrección de estilos y mejoras en diseño',
          demo_url: 'https://www.empleogrupologis.com/',
          mockup_url:
            'https://www.figma.com/design/s3O6swXl11T40b6QyVEEIk/ATS?node-id=0-1&t=O7XBCs9gnpOtSysy-1',
          bg_img: 'ATSIMG.webp',
          logo_img: 'ATSLogo.webp',
          logo_img_noColor: 'ATSLogo-noColor.webp',
          technologies: [
            { title: 'HTML', img: 'html.webp' },
            { title: 'CSS', img: 'css.webp' },
            { title: 'JS', img: 'js.webp' },
            { title: 'Angular', img: 'angular.webp' },
            { title: 'TypeScript', img: 'ts.webp' },
          ],
          colors: ['#e45b00', '#ff6e0d', '#f0f0f7'],
          y_images: ['ATS-Y-1.webp'],
          x_images: [
            'ATS-X-1.webp',
            'ATS-X-2.webp',
            'ATS-X-3.webp',
            'ATS-X-4.webp',
            'ATS-X-5.webp',
            'ATS-X-7.webp',
            'ATS-X-6.webp',
          ],
        },
        {
          id: 2,
          title: 'EDICIONES #KAZIYADU#',
          description:
            'Web para publicar libros gratuitos diseñada para la editorial Ediciones kaziyadu',
          demo_url: 'https://kaziyadu.vercel.app/',
          bg_img: 'kaziyaduAppIMG.webp',
          logo_img: 'kaziyaduAppLogo.webp',
          technologies: [
            { title: 'HTML', img: 'html.webp' },
            { title: 'CSS', img: 'css.webp' },
            { title: 'JS', img: 'js.webp' },
            { title: 'Angular', img: 'angular.webp' },
            { title: 'TypeScript', img: 'ts.webp' },
            { title: 'Tailwind', img: 'tailwind.webp' },
          ],
          colors: ['#fed801', '#eb546c', '#84bae7'],
          y_images: ['KAZIYADU-Y-1.webp'],
          x_images: [
            'KAZIYADU-X-1.webp',
            'KAZIYADU-X-5.webp',
            'KAZIYADU-X-4.webp',
            'KAZIYADU-X-2.webp',
            'KAZIYADU-X-3.webp',
            'KAZIYADU-X-6.webp',
            'KAZIYADU-X-7.webp',
          ],
        },
        {
          id: 3,
          title: 'GIFS#APP#',
          description:
            'Aplicación para buscar y compartir GIFs usando la API de GIPHY',
          demo_url: 'https://andersondavi.github.io/GIFS-API/',
          bg_img: 'gifsAppIMG.webp',
          logo_img: 'gifsAppLogo.webp',
          technologies: [
            { title: 'HTML', img: 'html.webp' },
            { title: 'CSS', img: 'css.webp' },
            { title: 'JS', img: 'js.webp' },
            { title: 'Angular', img: 'angular.webp' },
            { title: 'TypeScript', img: 'ts.webp' },
          ],
          colors: ['#1f2022', '#212529', '#ffffff'],
          y_images: ['GIFS-Y-1.webp'],
          x_images: [
            'GIFS-X-1.webp',
            'GIFS-X-2.webp',
            'GIFS-X-3.webp',
            'GIFS-X-5.webp',
            'GIFS-X-4.webp',
            'GIFS-X-6.webp',
            'GIFS-X-7.webp',
          ],
        },
      ],
    },
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
        "I'm Anderson Rueda, a dedicated #web developer# passionate about design. I specialize in turning your ideas into efficient and stylish digital tools that streamline your work.",
      text2:
        "I'm constantly #learning# new things and tackling new challenges.",
    },
    experience: {
      education: {
        title: 'Education',
        items: [
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
            date_range: '2023 - 2026',
            description: 'Politécnico Costa Atlántica',
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
    projects: {
      title: 'Projects',
      items: [
        {
          id: 1,
          title: 'EMPLEO #GRUPOLOGIS#',
          description:
            'Collaboration on ATS project for job posting, style correction and design improvements',
          demo_url: 'https://www.empleogrupologis.com/',
          mockup_url:
            'https://www.figma.com/design/s3O6swXl11T40b6QyVEEIk/ATS?node-id=0-1&t=O7XBCs9gnpOtSysy-1',
          bg_img: 'ATSIMG.webp',
          logo_img: 'ATSLogo.webp',
          technologies: [
            { title: 'HTML', img: 'html.webp' },
            { title: 'CSS', img: 'css.webp' },
            { title: 'JS', img: 'js.webp' },
            { title: 'Angular', img: 'angular.webp' },
            { title: 'TypeScript', img: 'ts.webp' },
          ],
          colors: ['#e45b00', '#ff6e0d', '#f0f0f7'],
          y_images: ['ATS-Y-1.webp'],
          x_images: [
            'ATS-X-1.webp',
            'ATS-X-2.webp',
            'ATS-X-3.webp',
            'ATS-X-4.webp',
            'ATS-X-5.webp',
            'ATS-X-7.webp',
            'ATS-X-6.webp',
          ],
        },
        {
          id: 2,
          title: 'EDICIONES #KAZIYADU#',
          description:
            'Website to publish free books designed for Ediciones kaziyadu publishing house',
          demo_url: 'https://kaziyadu.vercel.app/',
          bg_img: 'kaziyaduAppIMG.webp',
          logo_img: 'kaziyaduAppLogo.webp',
          technologies: [
            { title: 'HTML', img: 'html.webp' },
            { title: 'CSS', img: 'css.webp' },
            { title: 'JS', img: 'js.webp' },
            { title: 'Angular', img: 'angular.webp' },
            { title: 'TypeScript', img: 'ts.webp' },
            { title: 'Tailwind', img: 'tailwind.webp' },
          ],
          colors: ['#fed801', '#eb546c', '#84bae7'],
          y_images: ['KAZIYADU-Y-1.webp'],
          x_images: [
            'KAZIYADU-X-1.webp',
            'KAZIYADU-X-5.webp',
            'KAZIYADU-X-4.webp',
            'KAZIYADU-X-2.webp',
            'KAZIYADU-X-3.webp',
            'KAZIYADU-X-6.webp',
            'KAZIYADU-X-7.webp',
          ],
        },
        {
          id: 3,
          title: 'GIFS#APP#',
          description:
            'Application to search and share GIFs using the GIPHY API',
          demo_url: 'https://andersondavi.github.io/GIFS-API/',
          bg_img: 'gifsAppIMG.webp',
          logo_img: 'gifsAppLogo.webp',
          technologies: [
            { title: 'HTML', img: 'html.webp' },
            { title: 'CSS', img: 'css.webp' },
            { title: 'JS', img: 'js.webp' },
            { title: 'Angular', img: 'angular.webp' },
            { title: 'TypeScript', img: 'ts.webp' },
          ],
          colors: ['#1f2022', '#212529', '#ffffff'],
          y_images: ['GIFS-Y-1.webp'],
          x_images: [
            'GIFS-X-1.webp',
            'GIFS-X-2.webp',
            'GIFS-X-3.webp',
            'GIFS-X-5.webp',
            'GIFS-X-4.webp',
            'GIFS-X-6.webp',
            'GIFS-X-7.webp',
          ],
        },
      ],
    },
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
