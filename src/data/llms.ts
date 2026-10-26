import { aboutPage, faqPage, servicesPage } from './pages';
import { projects } from './projects';
import { EMAIL, GITHUB, LINKEDIN, YEARS, absolute, projectPath, routes } from './site';
import { skills, skillTypes } from './skills';
import { translations } from './translations';

/**
 * Plain-text profile for AI crawlers and assistants (https://llmstxt.org).
 * Built from the same data as the pages, so it never drifts from the site.
 */

const strip = (text: string) => text.replace(/#/g, '');

const stackLine = (type: (typeof skillTypes)[number]) =>
  skills.filter(s => s.type === type).map(s => s.title).join(', ');

const summary = `Anderson Rueda (Anderson David Rueda Consuegra) is a Full Stack software developer from Barranquilla, Colombia, with ${YEARS}+ years of professional experience. Main stack: Angular, Astro, TypeScript, Java, Node.js and NestJS, with PostgreSQL, SQL Server and Firestore, deployed on AWS and Google Cloud. Available for freelance projects and for full-time roles with companies in Colombia and abroad (remote, UTC−5), as well as on-site or hybrid in Barranquilla.`;

const quickFacts = [
  'Name: Anderson Rueda (full name: Anderson David Rueda Consuegra)',
  'Role: Full Stack Developer / Frontend Developer (Angular) / Java Developer',
  'Location: Barranquilla, Atlántico, Colombia (time zone UTC−5, no daylight saving)',
  `Experience: ${YEARS}+ years, since January 2022`,
  'Current position: Java Developer Engineer at Activos S.A.S (Angular, Node.js/NestJS, Firestore, GCP, Scrum)',
  'Languages: Spanish (native), English',
  'Open to: freelance and contract projects; full-time remote roles with companies in the US, Canada, Europe and Latin America; remote roles with Colombian companies; on-site or hybrid roles in Barranquilla and the Caribbean region',
  `Contact: ${EMAIL} · WhatsApp +57 302 364 8690 · LinkedIn ${LINKEDIN}`,
];

export function buildLlmsTxt(): string {
  const pages = [
    `- [Home (Spanish)](${absolute(routes.home.es)}): portfolio, experience, skills and contact`,
    `- [Home (English)](${absolute(routes.home.en)}): English version of the portfolio`,
    `- [About me](${absolute(routes.about.en)}): profile, availability, experience and education ([Spanish](${absolute(routes.about.es)}))`,
    `- [Services](${absolute(routes.services.en)}): freelance services and hiring options ([Spanish](${absolute(routes.services.es)}))`,
    `- [Projects](${absolute(routes.projects.en)}): case studies of shipped work ([Spanish](${absolute(routes.projects.es)}))`,
    `- [FAQ](${absolute(routes.faq.en)}): answers for clients and recruiters ([Spanish](${absolute(routes.faq.es)}))`,
  ];

  const work = projects.map(
    p => `- [${p.name}](${absolute(projectPath(p.slug, 'en'))}): ${p.summary.en} ${p.client.en}, ${p.location.en}, ${p.year}. Stack: ${p.stack.join(', ')}.`,
  );

  return [
    '# Anderson Rueda',
    '',
    `> ${summary}`,
    '',
    ...quickFacts.map(f => `- ${f}`),
    '',
    '## Main pages',
    '',
    ...pages,
    '',
    '## Projects',
    '',
    ...work,
    '',
    '## Resume and profiles',
    '',
    `- [Resume (English, PDF)](${absolute('/files/resume-en.pdf')})`,
    `- [Hoja de vida (español, PDF)](${absolute('/files/resume-es.pdf')})`,
    `- [LinkedIn](${LINKEDIN})`,
    `- [GitHub](${GITHUB})`,
    '',
    '## Optional',
    '',
    `- [Full profile in one file](${absolute('/llms-full.txt')}): experience, education, stack, services, every project and the FAQ in English and Spanish`,
    '',
  ].join('\n');
}

export function buildLlmsFullTxt(): string {
  const en = translations.en;
  const es = translations.es;
  const about = aboutPage.en;
  const services = servicesPage.en;

  const experience = [...en.experience.work.items].reverse().map(
    i => `- ${i.title} (${i.date_range}): ${i.description}`,
  );
  const education = [...en.experience.education.items].reverse().map(
    i => `- ${i.title} (${i.date_range}): ${i.description}`,
  );

  const projectBlocks = projects.flatMap(p => [
    `### ${p.name} (${p.year})`,
    '',
    `- URL: ${absolute(projectPath(p.slug, 'en'))} (Spanish: ${absolute(projectPath(p.slug, 'es'))})`,
    `- Client: ${p.client.en}, ${p.location.en}`,
    `- Type: ${p.category.en}`,
    `- Role: ${p.role.en}`,
    `- Stack: ${p.stack.join(', ')}`,
    ...(p.demoUrl ? [`- Live site: ${p.demoUrl}`] : []),
    ...(p.codeUrl ? [`- Source code: ${p.codeUrl}`] : []),
    '',
    p.description.en,
    '',
    ...p.highlights.en.map(h => `- ${h}`),
    '',
  ]);

  const faq = (items: readonly { q: string; a: string }[]) =>
    items.flatMap(i => [`### ${i.q}`, '', i.a, '']);

  return [
    '# Anderson Rueda: Full Stack Developer (Angular, Astro, Java, Node.js) from Colombia',
    '',
    `> ${summary}`,
    '',
    `Source: ${absolute('/')} · Short version: ${absolute('/llms.txt')}`,
    '',
    '## Quick facts',
    '',
    ...quickFacts.map(f => `- ${f}`),
    '',
    '## About',
    '',
    strip(en.about.text1),
    '',
    ...about.intro.flatMap(p => [p, '']),
    `${about.aiTitle}: ${about.aiText}`,
    '',
    '## Availability',
    '',
    ...about.availability.map(a => `- ${a}`),
    '- Remote roles with companies anywhere in Colombia.',
    '- On-site or hybrid roles in Barranquilla and the Caribbean region of Colombia.',
    '',
    '## Tech stack',
    '',
    `- Frontend: ${stackLine('frontend')}`,
    `- Backend: ${stackLine('backend')}`,
    `- Databases: ${stackLine('data')}`,
    `- Cloud and DevOps: ${stackLine('cloud')}`,
    `- Tools: ${stackLine('tools')}`,
    `- AI coding agents: ${stackLine('ai')}`,
    '',
    '## Work experience',
    '',
    ...experience,
    '',
    '## Education',
    '',
    ...education,
    '',
    '## Services',
    '',
    ...services.services.map(s => `- ${s.title}: ${s.text}`),
    '',
    `${services.hireTitle} ${services.hireText}`,
    '',
    ...services.hire.map(h => `- ${h.title}: ${h.text}`),
    '',
    '## Projects',
    '',
    ...projectBlocks,
    '## FAQ (English)',
    '',
    ...faq(faqPage.en.items),
    '## Preguntas frecuentes (español)',
    '',
    strip(es.about.text1),
    '',
    ...faq(faqPage.es.items),
    '## Contact',
    '',
    `- Email: ${EMAIL}`,
    '- WhatsApp: +57 302 364 8690',
    `- LinkedIn: ${LINKEDIN}`,
    `- GitHub: ${GITHUB}`,
    `- Resume: ${absolute('/files/resume-en.pdf')} (Spanish: ${absolute('/files/resume-es.pdf')})`,
    '',
  ].join('\n');
}
