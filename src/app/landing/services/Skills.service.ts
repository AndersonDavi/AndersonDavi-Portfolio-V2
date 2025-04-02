import { Injectable } from '@angular/core';
import { SkillsItem } from '../interfaces/skills-item';

@Injectable({
  providedIn: 'root',
})
export class SkillsService {
  private skillsList: SkillsItem[] = [
    {
      title: 'HTML',
      img: 'html.webp',
      type: 'frontend',
    },
    {
      title: 'CSS',
      img: 'css.webp',
      type: 'frontend',
    },
    {
      title: 'JavaScript',
      img: 'js.webp',
      type: 'frontend',
    },
    {
      title: 'TypeScript',
      img: 'ts.webp',
      type: 'frontend',
    },
    {
      title: 'Angular',
      img: 'angular.webp',
      type: 'frontend',
    },
    {
      title: 'Bootstrap',
      img: 'bootstrap.webp',
      type: 'frontend',
    },
    {
      title: 'Tailwind',
      img: 'tailwind.webp',
      type: 'frontend',
    },
    {
      title: 'SQL Server',
      img: 'SQLserver.webp',
      type: 'backend',
    },
    {
      title: 'MySQL',
      img: 'mysql.webp',
      type: 'backend',
    },
    {
      title: 'NodeJS',
      img: 'node.svg',
      type: 'backend',
    },
    {
      title: 'ExpressJS',
      img: 'express.svg',
      type: 'backend',
    },
    {
      title: 'nestJS',
      img: 'nest.svg',
      type: 'backend',
    },
    {
      title: 'Git',
      img: 'git.webp',
      type: 'tools',
    },
    {
      title: 'GitHub',
      img: 'github.svg',
      type: 'tools',
    },
    {
      title: 'Postman',
      img: 'post.webp',
      type: 'tools',
    },
    {
      title: 'Figma',
      img: 'figma.webp',
      type: 'tools',
    },
    {
      title: 'Photoshop',
      img: 'ps.webp',
      type: 'tools',
    },
    {
      title: 'Docker',
      img: 'docker.svg',
      type: 'cloud',
    },
    {
      title: 'AWS',
      img: 'aws.svg',
      type: 'cloud',
    },
  ];

  private skillsTypes: string[] = ['frontend', 'backend', 'tools', 'cloud'];

  getSkillsListByType(skillType: string): SkillsItem[] {
    return this.skillsList.filter((item) => item.type === skillType);
  }
  getSkillsList(): SkillsItem[] {
    return this.skillsList;
  }
  getSkillsTypes(): string[] {
    return this.skillsTypes;
  }
}
