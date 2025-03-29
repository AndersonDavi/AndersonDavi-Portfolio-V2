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
  skillsList: SkillsItem[][] = [];
  skillsTypes: string[] = [];
  selectedType: string = 'frontend';

  constructor(private skillsService: SkillsService) {}

  ngOnInit(): void {
    this.skillsTypes = this.skillsService.getSkillsTypes();
    this.skillsTypes.forEach((skillType) => {
      const skills = this.skillsService.getSkillsListByType(skillType);
      this.skillsList.push(skills);
    });
    console.log(this.skillsList);
  }

  getItemStyle(index: number, type: string): string {
    const isActive = type === this.selectedType;
    const position = index - this.skillsTypes.indexOf(this.selectedType);
    return `--position: ${position}; --active: ${isActive ? 1 : 0}`;
  }

  selectedTypeChange(type: string) {
    this.selectedType = type;
    console.log(this.selectedType);
  }
}
