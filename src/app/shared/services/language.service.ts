import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { translations } from '../i18n/translations';

export type Language = 'es' | 'en';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {
  private readonly LANGUAGE_KEY = 'selectedLanguage';
  private languageSubject = new BehaviorSubject<Language>(this.getInitialLanguage());

  constructor() {
    this.loadStoredLanguage();
  }

  private getInitialLanguage(): Language {
    const storedLang = localStorage.getItem(this.LANGUAGE_KEY) as Language;
    return storedLang || 'es';
  }

  private loadStoredLanguage(): void {
    const lang = this.getInitialLanguage();
    this.setLanguage(lang);
  }

  setLanguage(lang: Language): void {
    localStorage.setItem(this.LANGUAGE_KEY, lang);
    this.languageSubject.next(lang);
  }

  getLanguage$() {
    return this.languageSubject.asObservable();
  }

  getCurrentLanguage(): Language {
    return this.languageSubject.value;
  }

  getTranslations() {
    return translations;
  }
}
