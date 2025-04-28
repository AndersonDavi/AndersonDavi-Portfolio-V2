import {
  ChangeDetectionStrategy,
  Component,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { translations } from '../../../shared/i18n/translations';
import {
  Language,
  LanguageService,
} from '../../../shared/services/language.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FooterComponent } from '../../../shared/components/footer/footer.component';
import { HoverStringComponent } from '../../../shared/components/hoverString/hoverString.component';
import { NavbarComponent } from '../../../shared/components/navbar/navbar.component';
import { TextFormatPipe } from '../../../shared/pipes/textFormat.pipe';
import { ContactFormComponent } from '../../components/contact-form/contact-form.component';
import { CurriculumListComponent } from '../../components/curriculum-list/curriculum-list.component';
import { ProjectGalComponent } from '../../components/project-gal/project-gal.component';
import { SkillsListComponent } from '../../components/skills-list/skills-list.component';

@Component({
  selector: 'app-home',
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
    RouterModule,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent implements OnInit, OnDestroy {
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
