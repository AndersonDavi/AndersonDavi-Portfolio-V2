import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { ProjectItem } from '../../interfaces/project-item';
import { ProjectsService } from '../../services/projects.service';
import { CommonModule } from '@angular/common';
import { LanguageService } from '../../../shared/services/language.service';
import { Subject, takeUntil } from 'rxjs';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { TextFormatPipe } from '../../../shared/pipes/textFormat.pipe';

@Component({
  selector: 'app-project-gal',
  standalone: true,
  imports: [CommonModule, TextFormatPipe],
  templateUrl: './project-gal.component.html',
  styleUrls: ['./project-gal.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProjectGalComponent implements OnInit, OnDestroy {
  projectsList: ProjectItem[] = [];
  selectedProject: ProjectItem | null = null;
  title = '';

  private initialX: number = 0;
  private initialY: number = 0;
  private currentElement: HTMLElement | null = null;
  private destroy$ = new Subject<void>();

  constructor(
    private projectService: ProjectsService,
    private languageService: LanguageService,
    private sanitizer: DomSanitizer,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.loadContent();
    this.initDragListeners();

    // Suscribirse a cambios de idioma
    this.languageService
      .getLanguage$()
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
    this.projectsList = this.projectService.getProjectsList();
    this.title = this.projectService.getTitle();
    if (!this.selectedProject && this.projectsList.length > 0) {
      this.selectedProject = this.projectsList[0];
    } else if (this.selectedProject) {
      // Actualizar el proyecto seleccionado con la nueva traducción
      this.selectedProject =
        this.projectsList.find((p) => p.id === this.selectedProject?.id) ||
        this.projectsList[0];
    }
  }

  selectProject(project: ProjectItem) {
    this.selectedProject = project;
    this.resetDraggablePositions();
    this.restartAnimations();
  }

  private resetDraggablePositions() {
    const draggables = document.querySelectorAll('.draggable');
    draggables.forEach((element) => {
      const el = element as HTMLElement;
      el.style.position = '';
      el.style.left = '';
      el.style.top = '';
      el.style.transform = '';
    });
  }

  private restartAnimations() {
    const img1 = document.querySelector('.img-min-1');
    const img2 = document.querySelector('.img-min-2');

    if (img1 && img2) {
      // Remover y volver a añadir las clases de animación
      img1.classList.remove('img-min-1');
      img2.classList.remove('img-min-2');

      setTimeout(() => {
        img1.classList.add('img-min-1');
        img2.classList.add('img-min-2');
      }, 10);
    }
  }

  private initDragListeners(): void {
    document.addEventListener('mousedown', this.handleMouseDown.bind(this));
    document.addEventListener('mousemove', this.handleMouseMove.bind(this));
    document.addEventListener('mouseup', this.handleMouseUp.bind(this));
  }

  private handleMouseDown(e: MouseEvent): void {
    const target = e.target as HTMLElement;
    if (target.classList.contains('draggable')) {
      this.currentElement = target;
      this.initialX = e.clientX - target.offsetLeft;
      this.initialY = e.clientY - target.offsetTop;
      target.style.position = 'absolute';
      target.style.cursor = 'grabbing';
    }
  }

  private handleMouseMove(e: MouseEvent): void {
    if (this.currentElement) {
      e.preventDefault();
      const x = e.clientX - this.initialX;
      const y = e.clientY - this.initialY;
      this.currentElement.style.left = x + 'px';
      this.currentElement.style.top = y + 'px';
      this.currentElement.style.transform = 'none';
    }
  }

  private handleMouseUp(): void {
    if (this.currentElement) {
      this.currentElement.style.cursor = 'grab';
      this.currentElement = null;
    }
  }
}
