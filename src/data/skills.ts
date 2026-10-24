import type { Lang } from './translations';

export const skillTypes = ['frontend', 'backend', 'data', 'cloud', 'tools', 'ai'] as const;
export type SkillType = typeof skillTypes[number];

export interface SkillItem {
  title: string;
  img: string;
  type: SkillType;
}

export const skills: SkillItem[] = [
  { title: 'HTML', img: 'html.webp', type: 'frontend' },
  { title: 'CSS', img: 'css.webp', type: 'frontend' },
  { title: 'JavaScript', img: 'js.webp', type: 'frontend' },
  { title: 'TypeScript', img: 'ts.webp', type: 'frontend' },
  { title: 'Angular', img: 'angular.webp', type: 'frontend' },
  { title: 'Astro', img: 'astro.svg', type: 'frontend' },
  { title: 'Tailwind', img: 'tailwind.webp', type: 'frontend' },
  { title: 'Bootstrap', img: 'bootstrap.webp', type: 'frontend' },
  { title: 'Node.js', img: 'node.svg', type: 'backend' },
  { title: 'NestJS', img: 'nest.svg', type: 'backend' },
  { title: 'Express', img: 'express.svg', type: 'backend' },
  { title: 'Java', img: 'java.svg', type: 'backend' },
  { title: 'PostgreSQL', img: 'postgresql.svg', type: 'data' },
  { title: 'SQL Server', img: 'SQLserver.webp', type: 'data' },
  { title: 'Firestore', img: 'firestore.svg', type: 'data' },
  { title: 'MySQL', img: 'mysql.webp', type: 'data' },
  { title: 'GCP', img: 'gcp.svg', type: 'cloud' },
  { title: 'AWS', img: 'aws.svg', type: 'cloud' },
  { title: 'Docker', img: 'docker.svg', type: 'cloud' },
  { title: 'Vercel', img: 'vercel.svg', type: 'cloud' },
  { title: 'Cloudflare', img: 'cloudflare.svg', type: 'cloud' },
  { title: 'Git', img: 'git.webp', type: 'tools' },
  { title: 'GitHub', img: 'github.svg', type: 'tools' },
  { title: 'Jira', img: 'jira.svg', type: 'tools' },
  { title: 'Sanity', img: 'sanity.svg', type: 'tools' },
  { title: 'Figma', img: 'figma.webp', type: 'tools' },
  { title: 'Postman', img: 'post.webp', type: 'tools' },
  { title: 'Power Platform', img: 'powerautomate.svg', type: 'tools' },
  { title: 'Photoshop', img: 'ps.webp', type: 'tools' },
  { title: 'Claude Code', img: 'claude.svg', type: 'ai' },
  { title: 'Codex', img: 'openai.svg', type: 'ai' },
  { title: 'OpenCode', img: 'opencode.svg', type: 'ai' },
];

export const skillTypeLabels: Record<Lang, Record<SkillType, string>> = {
  es: { frontend: 'frontend', backend: 'backend', data: 'bases de datos', cloud: 'cloud', tools: 'herramientas', ai: 'IA' },
  en: { frontend: 'frontend', backend: 'backend', data: 'databases', cloud: 'cloud', tools: 'tools', ai: 'AI' },
};

/** Icon for a technology name used in project stacks; names without an icon render as text-only chips. */
export function skillIcon(title: string): string | undefined {
  const skill = skills.find(s => s.title.toLowerCase() === title.toLowerCase());
  return skill ? `/skills/${skill.img}` : undefined;
}
