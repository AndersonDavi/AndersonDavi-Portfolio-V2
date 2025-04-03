import { Injectable } from '@angular/core';
import { ProjectItem } from '../interfaces/project-item';
import { LanguageService } from '../../shared/services/language.service';

@Injectable({
  providedIn: 'root',
})
export class ProjectsService {
  constructor(private languageService: LanguageService) {}

  getProjectsList(): ProjectItem[] {
    const currentLang = this.languageService.getCurrentLanguage();
    const translations = this.languageService.getTranslations();
    return translations[currentLang].projects.items;
  }

  getTitle(): string {
    const currentLang = this.languageService.getCurrentLanguage();
    const translations = this.languageService.getTranslations();
    return translations[currentLang].projects.title;
  }
}
