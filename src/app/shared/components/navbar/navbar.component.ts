import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LanguageService, Language } from '../../services/language.service';
import { translations } from '../../i18n/translations';

@Component({
  selector: 'app-navbar',
  imports: [CommonModule],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true
})
export class NavbarComponent {
  activeLink: string = '';
  isMenuOpen: boolean = false;
  currentLanguage: Language;
  translations = translations;

  constructor(private languageService: LanguageService) {
    this.currentLanguage = this.languageService.getCurrentLanguage();
    this.languageService.getLanguage$().subscribe(lang => {
      this.currentLanguage = lang;
    });
  }

  setActiveLink(link: string) {
    this.activeLink = link;
    this.isMenuOpen = false;  // Cerrar el menú al hacer clic en un enlace
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  toggleLanguage() {
    const newLang: Language = this.currentLanguage === 'es' ? 'en' : 'es';
    this.languageService.setLanguage(newLang);
  }
}
