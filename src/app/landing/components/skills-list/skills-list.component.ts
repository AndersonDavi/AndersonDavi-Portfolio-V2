import { ChangeDetectionStrategy, Component } from '@angular/core';
import { SkillsItem } from '../../interfaces/skills-item';
import { SkillsService } from '../../services/Skills.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-skills-list',
  imports: [CommonModule],
  templateUrl: './skills-list.component.html',
  styleUrl: './skills-list.component.css',
})
export class SkillsListComponent {
  skillsList: SkillsItem[] = [];
  skillsTypes: string[] = [];
  selectedType: string = 'frontend';
  animationKey: number = 0;
  isVisible: boolean = true;

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
    this.isVisible = false;
    setTimeout(() => {
      this.selectedType = type;
      console.log(this.selectedType);
      console.log(this.getSelectedSkills());
      console.log(this.getNonSelectedSkills());
      this.isVisible = true;
    }, 300); // Esperar a que termine fadeOut
    this.animationKey++;
  }
}
