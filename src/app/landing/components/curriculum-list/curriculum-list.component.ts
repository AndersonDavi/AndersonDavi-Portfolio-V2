import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
} from '@angular/core';
import { CurriculumItem } from '../../interfaces/curriculum-item';
import { CommonModule } from '@angular/common';
import { CurriculumService } from '../../services/Curriculum.service';

@Component({
  selector: 'app-curriculum-list',
  imports: [CommonModule],
  templateUrl: './curriculum-list.component.html',
  styleUrl: './curriculum-list.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CurriculumListComponent implements OnInit {
  @Input() sidebar: 'left' | 'right' = 'left';
  @Input() cardType: 'education' | 'work-experience' = 'work-experience';
  @Input() titleType: 'solo' | 'divided' = 'solo';
  @Input() title = 'Experiencia laboral';

  curriculumItems: CurriculumItem[] = [];

  constructor(private curriculumService: CurriculumService) {}

  ngOnInit(): void {
    this.curriculumItems = this.curriculumService.getItemsByType(this.cardType);
  }

  get dividedTitle(): string[] {
    return this.title.toUpperCase().split(' ');
  }
}
