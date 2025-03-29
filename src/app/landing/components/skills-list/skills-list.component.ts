import { ChangeDetectionStrategy, Component } from '@angular/core';
import { SkillsItem } from '../../interfaces/skills-item';
import { SkillsService } from '../../services/Skills.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-skills-list',
  imports: [CommonModule],
  templateUrl: './skills-list.component.html',
  styleUrl: './skills-list.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SkillsListComponent {
  skillsList: SkillsItem[] = [];
  skillsTypes: string[] = [];
  selectedType: string = 'frontend';

  constructor(private skillsService: SkillsService) {}

  ngOnInit(): void {
    this.skillsTypes = this.skillsService.getSkillsTypes();
    this.skillsList = this.skillsService.getSkillsList();
  }

  getSelectedSkills(): SkillsItem[] {
    return this.skillsList.filter((skill) => skill.type === this.selectedType);
  }

  getNonSelectedSkills(): SkillsItem[] {
    return this.skillsList.filter((skill) => skill.type !== this.selectedType);
  }

  selectedTypeChange(type: string) {
    this.selectedType = type;
  }
}
