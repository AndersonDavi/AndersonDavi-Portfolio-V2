import { Injectable } from '@angular/core';
import { ProjectItem } from '../interfaces/project-item';

@Injectable({
  providedIn: 'root',
})
export class ProjectsService {
  private projectsList: ProjectItem[] = [
    {
      id: 1,
      title: 'PLATAFORMA #DE RECLUTAMIENTO# Y SELECCIÓN',
      description:
        'Colaboración en proyecto ATS para publicación de ofertas de empleo, corrección de estilos y mejoras en diseño',
      demo_url: 'https://www.empleogrupologis.com/',
      mockup_url: '123',
      bg_img: 'ATSIMG.webp',
      logo_img: 'ATSLogo.png',
      tecnologies: [
        { title: 'HTML', img: 'html.webp' },
        { title: 'CSS', img: 'css.webp' },
        { title: 'JS', img: 'js.webp' },
        { title: 'Angular', img: 'angular.webp' },
        { title: 'TypeScript', img: 'ts.webp' },
      ],
      colors: ['#e45b00', '#ff6e0d', '#f0f0f7'],
      alt_imgs: ['ATSIMG.webp', 'ATSIMG.webp', 'gifsapp3.webp'],
    },
    {
      id: 2,
      title: 'GIFS#APP2#',
      description:
        'Gestión laboral SAS | Automatizaciòn de procesos con Power Platform, diseño de interfaces, administraciòn de bases de datos SQL SERVER',
      demo_url: '123',
      code_url: '123',
      mockup_url: '',
      bg_img: 'ATSIMG.webp',
      logo_img: 'ATSLogo.png',

      tecnologies: [{ title: 'HTML', img: 'html.webp' }],
      colors: ['#F2F2F2', '#FF5733', '#C70039'],
      alt_imgs: ['ATSIMG.webp', 'ATSIMG.webp', 'gifsapp3.webp'],
    },
  ];

  getProjectsList(): ProjectItem[] {
    return this.projectsList;
  }
}
