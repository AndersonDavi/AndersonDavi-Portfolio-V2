import { ChangeDetectionStrategy, Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LanguageService, Language } from '../../services/language.service';
import { translations } from '../../i18n/translations';

@Component({
  selector: 'app-navbar',
  imports: [CommonModule],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  host: {
    'style': 'contain: layout style; content-visibility: auto;'
  }
})
export class NavbarComponent implements OnInit, OnDestroy {
  activeLink: string = '';
  isMenuOpen: boolean = false;
  currentLanguage: Language;
  translations = translations;
  private scrollListener: (() => void) | undefined;

  constructor(private languageService: LanguageService) {
    this.currentLanguage = this.languageService.getCurrentLanguage();
    this.languageService.getLanguage$().subscribe((lang) => {
      this.currentLanguage = lang;
    });
  }

  ngOnInit() {
    this.scrollListener = () => {
      const navContainer = document.querySelector('.nav-container');
      if (!navContainer) return;

      if (window.scrollY > 80) {
        navContainer.classList.remove('nav-blur-container');
        navContainer.classList.add('nav-blur-active');
      } else {
        navContainer.classList.remove('nav-blur-active');
        navContainer.classList.add('nav-blur-container');
      }
    };

    window.addEventListener('scroll', this.scrollListener, { passive: true });
  }

  ngOnDestroy() {
    if (this.scrollListener) {
      window.removeEventListener('scroll', this.scrollListener);
    }
  }

  setActiveLink(link: string) {
    this.activeLink = link;
    if (window.innerWidth <= 950) {
      this.toggleMenu();
    }
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
    const navContainer = document.querySelector('.nav-container');

    if (this.isMenuOpen) {
      navContainer?.classList.remove('nav-blur-container');
      navContainer?.classList.add('nav-blur-active');
    } else {
      navContainer?.classList.remove('nav-blur-active');
      navContainer?.classList.add('nav-blur-container');
    }
  }

  toggleLanguage() {
    const newLang: Language = this.currentLanguage === 'es' ? 'en' : 'es';
    this.languageService.setLanguage(newLang);
  }
}
