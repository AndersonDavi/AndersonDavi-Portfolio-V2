export interface SkillItem {
  title: string;
  img: string;
  type: 'frontend' | 'backend' | 'tools' | 'cloud';
}

export const skills: SkillItem[] = [
  { title: 'HTML', img: 'html.webp', type: 'frontend' },
  { title: 'CSS', img: 'css.webp', type: 'frontend' },
  { title: 'JavaScript', img: 'js.webp', type: 'frontend' },
  { title: 'TypeScript', img: 'ts.webp', type: 'frontend' },
  { title: 'Angular', img: 'angular.webp', type: 'frontend' },
  { title: 'Astro', img: 'astro.svg', type: 'frontend' },
  { title: 'Bootstrap', img: 'bootstrap.webp', type: 'frontend' },
  { title: 'Tailwind', img: 'tailwind.webp', type: 'frontend' },
  { title: 'SQL Server', img: 'SQLserver.webp', type: 'backend' },
  { title: 'MySQL', img: 'mysql.webp', type: 'backend' },
  { title: 'PostgreSQL', img: 'postgresql.svg', type: 'backend' },
  { title: 'NodeJS', img: 'node.svg', type: 'backend' },
  { title: 'ExpressJS', img: 'express.svg', type: 'backend' },
  { title: 'nestJS', img: 'nest.svg', type: 'backend' },
  { title: 'Git', img: 'git.webp', type: 'tools' },
  { title: 'GitHub', img: 'github.svg', type: 'tools' },
  { title: 'Postman', img: 'post.webp', type: 'tools' },
  { title: 'Figma', img: 'figma.webp', type: 'tools' },
  { title: 'Photoshop', img: 'ps.webp', type: 'tools' },
  { title: 'Docker', img: 'docker.svg', type: 'cloud' },
  { title: 'AWS', img: 'aws.svg', type: 'cloud' },
  { title: 'GCP', img: 'gcp.svg', type: 'cloud' },
];

export const skillTypes = ['frontend', 'backend', 'tools', 'cloud'] as const;
export type SkillType = typeof skillTypes[number];
