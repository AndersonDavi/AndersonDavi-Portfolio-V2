import { Component, OnInit } from '@angular/core';
import { FooterComponent } from './shared/components/footer/footer.component';
import { NavbarComponent } from './shared/components/navbar/navbar.component';
import { CurriculumListComponent } from './landing/components/curriculum-list/curriculum-list.component';
import { SkillsListComponent } from './landing/components/skills-list/skills-list.component';
import { CommonModule } from '@angular/common';
import { ProjectGalComponent } from "./landing/components/project-gal/project-gal.component";

@Component({
  selector: 'app-root',
  imports: [
    FooterComponent,
    NavbarComponent,
    CurriculumListComponent,
    SkillsListComponent,
    CommonModule,
    ProjectGalComponent
],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  title = 'mi-portafolioV2';
  marqueeTexts: string[] = ['Curriculum vitae -'];
  ngOnInit(): void {
    for (let i = 0; i < 16; i++) {
      if (i == 15) {
        this.marqueeTexts.push('Curriculum vitae');
      } else {
        this.marqueeTexts.push('Curriculum vitae -');
      }
    }
  }
}
