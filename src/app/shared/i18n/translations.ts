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
      title: '¡Que #más#!',
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
            title: 'Tecnico en análisis y desarrollo de software',
            date_range: '2020 ene - 2021 ene',
            description: 'SENA',
          },
          {
            title: 'Tecnólogo en análisis y desarrollo de software',
            date_range: '2022 oct - 2024 dic',
            description: 'SENA',
          },
        ],
      },
      work: {
        title: 'Experiencia laboral',
        items: [
          {
            title: 'Desarrollador',
            description:
              'SENA | Diseño de mockups e interfaces para web de DigibootCamp, iniciativa como plataforma para cursos cortos y bootcamps de progrmación',
            date_range: '2022 ene - 2022 jun',
          },
          {
            title: 'Analista TI',
            description:
              'Gestión Laboral | Automatizaciòn de procesos con Power Platform, diseño de interfaces, administraciòn de bases de datos SQL SERVER',
            date_range: '2022 ago - Actualidad',
          },
        ],
      },
    },projectsTitle: 'PORTA#FOLIO#',
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
          alt_imgs: ['ATS-img-2.webp', 'ATS-img-1.webp', 'ATSLogo.webp'],
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
          alt_imgs: ['kaziyadu-img-1.webp', 'kaziyadu-img-2.webp'],
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
          alt_imgs: ['GIFS-img-1.webp', 'GIFS-img-2.webp'],
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
      title: 'Hello #World#',
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
            title: 'Software Analysis and Development Technician',
            date_range: 'Jan 2020 - Jan 2021',
            description: 'SENA',
          },
          {
            title: 'Software Analysis and Development Technologist',
            date_range: 'Oct 2022 - Dec 2024',
            description: 'SENA',
          },
        ],
      },
      work: {
        title: 'Work Experience',
        items: [
          {
            title: 'Developer',
            description:
              'SENA | Design of mockups and web interfaces for DigibootCamp, an initiative as a platform for short courses and programming bootcamps',
            date_range: 'Jan 2022 - Jun 2022',
          },
          {
            title: 'IT Analyst',
            description:
              'Gestión Laboral | Process automation with Power Platform, interface design, SQL SERVER database administration',
            date_range: 'Aug 2022 - Present',
          },
        ],
      },
    },projectsTitle: 'PORT#FOLIO#',
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
          alt_imgs: ['ATS-img-2.webp', 'ATS-img-1.webp'],
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
          alt_imgs: ['kaziyadu-img-1.webp', 'kaziyadu-img-2.webp'],
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
          alt_imgs: ['GIFS-img-1.webp', 'GIFS-img-2.webp'],
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
};
