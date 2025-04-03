import { Component, OnInit, OnDestroy } from '@angular/core';
import { FooterComponent } from './shared/components/footer/footer.component';
import { NavbarComponent } from './shared/components/navbar/navbar.component';
import { CurriculumListComponent } from './landing/components/curriculum-list/curriculum-list.component';
import { SkillsListComponent } from './landing/components/skills-list/skills-list.component';
import { CommonModule } from '@angular/common';
import { ProjectGalComponent } from './landing/components/project-gal/project-gal.component';
import { ContactFormComponent } from './landing/components/contact-form/contact-form.component';
import { HoverStringComponent } from './shared/components/hoverString/hoverString.component';
import { translations } from './shared/i18n/translations';
import { Language, LanguageService } from './shared/services/language.service';
import { Subject, takeUntil } from 'rxjs';
import { TextFormatPipe } from './shared/pipes/textFormat.pipe';

@Component({
  selector: 'app-root',
  imports: [
    FooterComponent,
    NavbarComponent,
    CurriculumListComponent,
    SkillsListComponent,
    CommonModule,
    ProjectGalComponent,
    ContactFormComponent,
    HoverStringComponent,
    TextFormatPipe,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'mi-portafolioV2';

  currentLanguage: Language;
  translations = translations;
  marqueeTexts: string[] = [];
  private destroy$ = new Subject<void>();

  constructor(private languageService: LanguageService) {
    this.currentLanguage = this.languageService.getCurrentLanguage();
    this.languageService
      .getLanguage$()
      .pipe(takeUntil(this.destroy$))
      .subscribe((lang) => {
        this.currentLanguage = lang;
        this.updateMarqueeTexts();
      });
  }

  ngOnInit(): void {
    this.updateMarqueeTexts();
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  private updateMarqueeTexts(): void {
    this.marqueeTexts = [];
    const baseText = this.translations[this.currentLanguage].marquee;

    for (let i = 0; i < 16; i++) {
      if (i === 15) {
        this.marqueeTexts.push(baseText.replace('-', '').trim());
      } else {
        this.marqueeTexts.push(baseText);
      }
    }
  }
}
