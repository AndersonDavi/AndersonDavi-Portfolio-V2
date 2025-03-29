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

  constructor(private projectService: ProjectsService) {}

  ngOnInit(): void {
    this.projectsList = this.projectService.getProjectsList();
    this.selectedProject = this.projectsList[0];
  }

  selectProject(project: ProjectItem) {
    this.selectedProject = project;
  }

  formatTitle(title: string): string {
    return title.replace(/#(.*?)#/g, '<span class="text-primary-500">$1</span>');
  }
}
