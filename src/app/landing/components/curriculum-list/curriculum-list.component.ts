import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  Input,
  OnInit,
  OnDestroy
} from '@angular/core';
import { CurriculumItem } from '../../interfaces/curriculum-item';
import { CommonModule } from '@angular/common';
import { CurriculumService } from '../../services/Curriculum.service';
import { LanguageService } from '../../../shared/services/language.service';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-curriculum-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './curriculum-list.component.html',
  styleUrls: ['./curriculum-list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CurriculumListComponent implements OnInit, OnDestroy {
  @Input() sidebar: 'left' | 'right' = 'left';
  @Input() cardType: 'education' | 'work-experience' = 'work-experience';
  @Input() titleType: 'solo' | 'divided' = 'solo';
  title = '';

  curriculumItems: CurriculumItem[] = [];
  private destroy$ = new Subject<void>();

  constructor(
    private curriculumService: CurriculumService,
    private languageService: LanguageService,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.loadContent();
    // Suscribirse a cambios de idioma
    this.languageService.getLanguage$()
      .pipe(takeUntil(this.destroy$))
      .subscribe(() => {
        this.loadContent();
        this.cdr.markForCheck();
      });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  private loadContent(): void {
    this.curriculumItems = this.curriculumService.getItemsByType(this.cardType);
    this.title = this.curriculumService.getTitle(this.cardType);
  }

  get dividedTitle(): string[] {
    return this.title.toUpperCase().split(' ');
  }
}
