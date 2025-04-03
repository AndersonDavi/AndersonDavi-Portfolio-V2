import { Injectable } from '@angular/core';
import { CurriculumItem } from '../interfaces/curriculum-item';
import { LanguageService } from '../../shared/services/language.service';

interface TranslatedItem {
  title: string;
  description: string;
  date_range: string;
}

@Injectable({
  providedIn: 'root',
})
export class CurriculumService {
  constructor(private languageService: LanguageService) {}

  getItemsByType(type: 'education' | 'work-experience'): CurriculumItem[] {
    const currentLang = this.languageService.getCurrentLanguage();
    const translations = this.languageService.getTranslations();
    
    if (type === 'education') {
      return translations[currentLang].experience.education.items.map((item: TranslatedItem) => ({
        ...item,
        type: 'education'
      }));
    } else {
      return translations[currentLang].experience.work.items.map((item: TranslatedItem) => ({
        ...item,
        type: 'work-experience'
      }));
    }
  }

  getTitle(type: 'education' | 'work-experience'): string {
    const currentLang = this.languageService.getCurrentLanguage();
    const translations = this.languageService.getTranslations();
    
    return type === 'education' 
      ? translations[currentLang].experience.education.title
      : translations[currentLang].experience.work.title;
  }
}
