import { Injectable } from '@angular/core';
import { CurriculumItem } from '../interfaces/curriculum-item';

@Injectable({
  providedIn: 'root',
})
export class CurriculumService {
  private curriculumItems: CurriculumItem[] = [
    {
      title: 'Tecnico en análisis y desarrollo de software',
      date_range: '2020 ene - 2021 ene',
      type: 'education',
      description: 'SENA',
    },
    {
      title: 'Desarrollador',
      description:
        'SENA | Diseño de mockups e interfaces para web de DigibootCamp, iniciativa como plataforma para cursos cortos y bootcamps de progrmación',
      date_range: '2022 ene - 2022 jun',
      type: 'work-experience',
    },
    {
      title: 'Analista TI',
      description:
        'Gestión Laboral | Automatizaciòn de procesos con Power Platform, diseño de interfaces, administraciòn de bases de datos SQL SERVER',
      date_range: '2022 ago - Actualidad',
      type: 'work-experience',
    },
    {
      title: 'Tecnólogo en análisis y desarrollo de software',
      date_range: '2022 oct - 2024 dic',
      type: 'education',
      description: 'SENA',
    },
  ];

  getItemsByType(type: 'education' | 'work-experience'): CurriculumItem[] {
    return this.curriculumItems.filter((item) => item.type === type);
  }
}
