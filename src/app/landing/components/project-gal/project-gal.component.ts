import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ProjectItem } from '../../interfaces/project-item';
import { ProjectsService } from '../../services/projects.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-project-gal',
  imports: [CommonModule],
  templateUrl: './project-gal.component.html',
  styleUrl: './project-gal.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProjectGalComponent {
  projectsList: ProjectItem[] = [];
  selectedProject: ProjectItem | null = null;
  private initialX: number = 0;
  private initialY: number = 0;
  private currentElement: HTMLElement | null = null;

  constructor(private projectService: ProjectsService) {}

  ngOnInit(): void {
    this.projectsList = this.projectService.getProjectsList();
    this.selectedProject = this.projectsList[0];
    this.initDragListeners();
  }

  selectProject(project: ProjectItem) {
    this.selectedProject = project;
    this.resetDraggablePositions();
  }

  private resetDraggablePositions() {
    const draggables = document.querySelectorAll('.draggable');
    draggables.forEach(element => {
      const el = element as HTMLElement;
      el.style.position = '';
      el.style.left = '';
      el.style.top = '';
      el.style.transform = '';
    });
  }

  formatTitle(title: string): string {
    return title.replace(
      /#(.*?)#/g,
      '<span class="text-primary-500">$1</span>'
    );
  }

  private initDragListeners() {
    document.addEventListener('mousedown', (e) => this.handleDragStart(e));
    document.addEventListener('mousemove', (e) => this.handleDragMove(e));
    document.addEventListener('mouseup', () => this.handleDragEnd());
  }

  private handleDragStart(event: MouseEvent) {
    const target = event.target as HTMLElement;
    if (target.classList.contains('draggable')) {
      this.currentElement = target;
      this.initialX = event.clientX - target.offsetLeft;
      this.initialY = event.clientY - target.offsetTop;
      target.style.cursor = 'grabbing';
    }
  }

  private handleDragMove(event: MouseEvent) {
    if (this.currentElement) {
      event.preventDefault();
      const x = event.clientX - this.initialX;
      const y = event.clientY - this.initialY;
      
      this.currentElement.style.position = 'absolute';
      this.currentElement.style.left = `${x}px`;
      this.currentElement.style.top = `${y}px`;
    }
  }

  private handleDragEnd() {
    if (this.currentElement) {
      this.currentElement.style.cursor = 'grab';
      this.currentElement = null;
    }
  }

  ngOnDestroy() {
    document.removeEventListener('mousedown', (e) => this.handleDragStart(e));
    document.removeEventListener('mousemove', (e) => this.handleDragMove(e));
    document.removeEventListener('mouseup', () => this.handleDragEnd());
  }
}
