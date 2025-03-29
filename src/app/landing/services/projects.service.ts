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
      code_url: 'https://github.com/AndersonDavi/GIFS-API',
      mockup_url:
        'https://www.figma.com/design/s3O6swXl11T40b6QyVEEIk/ATS?node-id=0-1&t=O7XBCs9gnpOtSysy-1',
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
      alt_imgs: ['ATS-img-2.png', 'ATS-img-1.png'],
    },
    {
      id: 2,
      title: 'EDICIONES #KAZIYADU#',
      description:
        'Web para publicar libros gratuitos diseñada para la editorial Ediciones kaziyadu',
      demo_url: 'https://kaziyadu.vercel.app/',
      bg_img: 'kaziyaduAppIMG.webp',
      logo_img: 'kaziyaduAppLogo.png',
      tecnologies: [
        { title: 'HTML', img: 'html.webp' },
        { title: 'CSS', img: 'css.webp' },
        { title: 'JS', img: 'js.webp' },
        { title: 'Angular', img: 'angular.webp' },
        { title: 'TypeScript', img: 'ts.webp' },
        { title: 'Tailwind', img: 'tailwind.webp' },
      ],
      colors: ['#fed801', '#eb546c', '#84bae7'],
      alt_imgs: ['kaziyadu-img-1.png', 'kaziyadu-img-2.png'],
    },
    {
      id: 3,
      title: 'GIFS#APP#',
      description:
        'Proyecto personal como práctica de Angular, buscador de Gifs con historial y conexión a la API de Giphy',
      demo_url: 'https://andersondavi.github.io/GIFS-API/',
      code_url: 'https://github.com/AndersonDavi/GIFS-API',
      bg_img: 'gifsAppIMG.webp',
      logo_img: 'gifsAppLogo.png',
      tecnologies: [
        { title: 'HTML', img: 'html.webp' },
        { title: 'CSS', img: 'css.webp' },
        { title: 'JS', img: 'js.webp' },
        { title: 'Angular', img: 'angular.webp' },
        { title: 'TypeScript', img: 'ts.webp' },
        { title: 'Bootstrap', img: 'bootstrap.webp' },
      ],
      colors: ['#212529', '#1f2022', '#ffffff'],
      alt_imgs: ['GIFS-img-1.png', 'GIFS-img-2.png'],
    },
  ];

  getProjectsList(): ProjectItem[] {
    return this.projectsList;
  }
}
